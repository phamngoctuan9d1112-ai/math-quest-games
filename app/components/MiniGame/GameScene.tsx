"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Player from "./Player";
import NPC from "./NPC";
import HUD from "./HUD";
import QuestionModal from "./QuestionModal";
import PauseMenu from "./PauseMenu";
import {
    collisions,
    MAP_WIDTH,
} from "./collision";
import { npcQuestions } from "./questions";
import { quest } from "./quests";
import {
    COLLISION_SCALE,
    MAP_IMAGE_WIDTH,
    MAP_IMAGE_HEIGHT,
    scaleRects,
    hitsWall,
    checkReachable,
} from "./collisionTools";

// ---- Cấu hình (chỉnh ở đây) ----
const SPAWN = { x: 900, y: 120 };
const PLAYER_SPEED = 360;   // px / giây (≈ 6px × 60fps như bản cũ)
const HITBOX = 16;          // cạnh hộp va chạm của nhân vật
const SPRITE_HALF = 24;     // nửa kích thước ảnh nhân vật (w-12 = 48px)
const TALK_DISTANCE = 70;   // khoảng cách tối đa để nói chuyện với NPC
// Giữ đúng tỉ lệ ảnh minimap.png (3063×1750) → cao ≈ 932px, không phải 918
const MAP = { w: MAP_WIDTH, h: Math.round((MAP_WIDTH * MAP_IMAGE_HEIGHT) / MAP_IMAGE_WIDTH) };

type Props = {
    onComplete: () => void;
    onExit: () => void;
};

export default function GameScene({
    onComplete,
    onExit,
}: Props) {

    const containerRef = useRef<HTMLDivElement>(null);

    const [view, setView] = useState({ w: 1366, h: 768 });
    const [pos, setPos] = useState(SPAWN);
    const posRef = useRef(SPAWN);

    const keysRef = useRef(new Set<string>());
    const touchRef = useRef({ x: 0, y: 0 });

    const [completed, setCompleted] = useState<number[]>([]);
    const [currentNpc, setCurrentNpc] = useState<number | null>(null);
    const [showQuestion, setShowQuestion] = useState(false);
    const [paused, setPaused] = useState(false);
    const [debug, setDebug] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [collisionOn, setCollisionOn] = useState(true);

    const finished = completed.length >= npcQuestions.length;

    const rects = useMemo(
        () => scaleRects(collisions, COLLISION_SCALE),
        []
    );

    // Các ref để vòng lặp game / bàn phím đọc giá trị mới nhất mà không phải đăng ký lại
    const lockedRef = useRef(false);
    const questionOpenRef = useRef(false);
    const collisionOnRef = useRef(true);
    const nearNpcRef = useRef<(typeof npcQuestions)[number] | undefined>(undefined);
    const completeCalledRef = useRef(false);

    const nearNpc = useMemo(() => {
        return npcQuestions.find(n =>
            !completed.includes(n.id) &&
            Math.abs(pos.x - n.x) < TALK_DISTANCE &&
            Math.abs(pos.y - n.y) < TALK_DISTANCE
        );
    }, [pos, completed]);

    useEffect(() => {
        nearNpcRef.current = nearNpc;
        lockedRef.current = showQuestion || paused || finished;
        questionOpenRef.current = showQuestion;
        collisionOnRef.current = collisionOn;
    });

    function talk() {
        const n = nearNpcRef.current;
        if (!n || lockedRef.current) return;
        setCurrentNpc(n.id);
        setShowQuestion(true);
    }

    // ---- Kích thước khung nhìn theo màn hình thật (trước đây cố định 1366×768) ----
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => setView({ w: el.clientWidth, h: el.clientHeight });
        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }, []);

    // ---- Kiểm tra dữ liệu va chạm có khớp bản đồ không ----
    // Nếu từ điểm xuất phát không thể đi tới NPC nào đó thì tắt va chạm để không bị kẹt.
    useEffect(() => {
        const timer = setTimeout(() => {
            const targets = npcQuestions.map(n => ({ x: n.x, y: n.y }));
            const ok = checkReachable(rects, SPAWN, MAP, HITBOX, targets, TALK_DISTANCE);

            if (!ok) {
                console.warn(
                    "[MiniGame] Dữ liệu va chạm không khớp bản đồ, tạm tắt va chạm. Bấm C để xem lớp va chạm."
                );
            }
            setCollisionOn(ok);
        }, 0);

        return () => clearTimeout(timer);
    }, [rects]);

    // ---- Bàn phím ----
    useEffect(() => {
        function down(e: KeyboardEvent) {
            const k = e.key.toLowerCase();

            if (k.startsWith("arrow") || k === " ") e.preventDefault();

            if (k === "escape") {
                if (questionOpenRef.current) setShowQuestion(false);
                else setPaused(p => !p);
                return;
            }
            if (k === "c") {
                setDebug(d => !d);
                return;
            }
            if (k === "e") {
                talk();
                return;
            }
            keysRef.current.add(k);
        }

        function up(e: KeyboardEvent) {
            keysRef.current.delete(e.key.toLowerCase());
        }

        function clear() {
            keysRef.current.clear();
        }

        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        window.addEventListener("blur", clear);

        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
            window.removeEventListener("blur", clear);
        };
    }, []);

    // ---- Vòng lặp di chuyển (mượt, đi chéo được, trượt dọc tường) ----
    useEffect(() => {
        let raf = 0;
        let last = performance.now();

        const blocked = (x: number, y: number) =>
            x < SPRITE_HALF ||
            x > MAP.w - SPRITE_HALF ||
            y < SPRITE_HALF ||
            y > MAP.h - SPRITE_HALF ||
            (collisionOnRef.current && hitsWall(rects, x, y, HITBOX));

        // Thử bước đầy đủ, nếu vướng thì giảm dần để nhân vật dừng sát tường
        const slide = (x: number, y: number, dx: number, dy: number) => {
            for (let f = 1; f >= 0.1; f /= 2) {
                const nx = x + dx * f;
                const ny = y + dy * f;
                if (!blocked(nx, ny)) return { x: nx, y: ny };
            }
            return { x, y };
        };

        const tick = (now: number) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;

            if (!lockedRef.current) {
                const k = keysRef.current;
                const t = touchRef.current;

                let dx =
                    (k.has("d") || k.has("arrowright") ? 1 : 0) -
                    (k.has("a") || k.has("arrowleft") ? 1 : 0) +
                    t.x;
                let dy =
                    (k.has("s") || k.has("arrowdown") ? 1 : 0) -
                    (k.has("w") || k.has("arrowup") ? 1 : 0) +
                    t.y;

                dx = Math.max(-1, Math.min(1, dx));
                dy = Math.max(-1, Math.min(1, dy));

                if (dx !== 0 || dy !== 0) {
                    const len = Math.hypot(dx, dy);
                    const vx = (dx / len) * PLAYER_SPEED * dt;
                    const vy = (dy / len) * PLAYER_SPEED * dt;

                    const { x, y } = posRef.current;
                    const a = slide(x, y, vx, 0);
                    const b = slide(a.x, a.y, 0, vy);

                    if (b.x !== x || b.y !== y) {
                        posRef.current = b;
                        setPos(b);
                    }
                }
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [rects]);

    // ---- Hoàn thành nhiệm vụ (chỉ báo 1 lần) ----
    useEffect(() => {
        if (finished && !completeCalledRef.current) {
            completeCalledRef.current = true;
            onComplete();
        }
    }, [finished, onComplete]);

    // ---- Camera ----
    const cameraX = Math.max(0, Math.min(pos.x - view.w / 2, MAP.w - view.w));
    const cameraY = Math.max(0, Math.min(pos.y - view.h / 2, MAP.h - view.h));

    const npc = npcQuestions.find(n => n.id === currentNpc);

    function setTouch(x: number, y: number) {
        touchRef.current = { x, y };
    }

    function dpadButton(dx: number, dy: number, label: string) {
        return (
            <button
                key={label}
                onPointerDown={(e) => {
                    e.currentTarget.setPointerCapture(e.pointerId);
                    setTouch(dx, dy);
                }}
                onPointerUp={() => setTouch(0, 0)}
                onPointerCancel={() => setTouch(0, 0)}
                className="w-14 h-14 rounded-xl bg-white/25 text-white text-2xl active:bg-white/50 select-none touch-none"
            >
                {label}
            </button>
        );
    }

    return (

        <div
            ref={containerRef}
            className="
            relative
            w-full
            h-full
            overflow-hidden
            bg-black
            "
        >

            <div

                className="absolute"

                style={{
                    width: MAP.w,
                    height: MAP.h,
                    transform: `translate(${-cameraX}px, ${-cameraY}px)`,
                    willChange: "transform",
                }}

            >

                <img

                    src="/images/minimap.png"

                    alt=""

                    draggable={false}

                    className="absolute left-0 top-0 max-w-none select-none"

                    style={{ width: MAP.w, height: MAP.h }}

                />

                {debug && rects.map((r, i) => (
                    <div
                        key={i}
                        className="absolute border border-red-500 bg-red-500/25 pointer-events-none z-10"
                        style={{ left: r.x, top: r.y, width: r.width, height: r.height }}
                    />
                ))}

                {npcQuestions.map(n => (

                    <NPC

                        key={n.id}

                        x={n.x}

                        y={n.y}

                        completed={completed.includes(n.id)}

                    />

                ))}

                <Player

                    x={pos.x}

                    y={pos.y}

                />

            </div>

            <HUD
                world={1}
                title={quest.title}
                done={completed.length}
                total={quest.total}
                debugText={
                    debug
                        ? `x:${Math.round(pos.x)} y:${Math.round(pos.y)} · va chạm: ${collisionOn ? "BẬT" : "TẮT (dữ liệu không khớp)"}`
                        : undefined
                }
            />

            {nearNpc && !showQuestion && !paused && (

                <button

                    onClick={talk}

                    className="
                    absolute
                    left-1/2
                    bottom-24
                    sm:bottom-10
                    -translate-x-1/2
                    bg-black/70
                    px-6
                    py-3
                    rounded-xl
                    text-white
                    font-bold
                    z-40
                    cursor-pointer
                    "

                >

                    {isTouch ? "Chạm để nói chuyện" : "Nhấn E để nói chuyện"}

                </button>

            )}

            {isTouch && !showQuestion && !paused && !finished && (
                <div className="absolute left-5 bottom-5 z-40 grid grid-cols-3 gap-1 touch-none">
                    <span key="a" />
                    {dpadButton(0, -1, "▲")}
                    <span key="b" />
                    {dpadButton(-1, 0, "◀")}
                    <span />
                    {dpadButton(1, 0, "▶")}
                    <span />
                    {dpadButton(0, 1, "▼")}
                    <span />
                </div>
            )}

            {npc && (

                <QuestionModal

                    open={showQuestion}

                    question={npc.question}

                    options={npc.options}

                    answer={npc.answer}

                    onClose={() => setShowQuestion(false)}

                    onCorrect={() =>
                        setCompleted(prev =>
                            prev.includes(npc.id) ? prev : [...prev, npc.id]
                        )
                    }

                />

            )}

            {paused && (
                <PauseMenu
                    onClose={() => setPaused(false)}
                    onExit={onExit}
                />
            )}

        </div>

    );

}
