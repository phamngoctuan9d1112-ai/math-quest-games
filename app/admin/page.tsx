"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Chỉ để ẩn/hiện giao diện. Quyền đọc dữ liệu thật sự do chính sách RLS trong Supabase quyết định.
const ADMIN_EMAIL = "phamngoctuan9d1112@gmail.com";

// Số sự kiện gần nhất được tải (tránh tải toàn bộ bảng khi dữ liệu lớn dần)
const EVENT_LIMIT = 2000;

export default function AdminPage() {
  const [players, setPlayers] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  async function checkAdmin() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setAuthorized(!!user && user.email === ADMIN_EMAIL);
    setCheckingAuth(false);
  }

  async function loadData() {
    setLoading(true);
    setErrorMsg(null);

    const [playersRes, eventsRes] = await Promise.all([
      supabase
        .from("profiles")
        .select("*")
        .order("xp", { ascending: false }),
      supabase
        .from("player_events")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(EVENT_LIMIT),
    ]);

    if (playersRes.error || eventsRes.error) {
      console.error(playersRes.error ?? eventsRes.error);
      setErrorMsg(
        (playersRes.error ?? eventsRes.error)?.message ??
          "Không tải được dữ liệu"
      );
    }

    setPlayers(playersRes.data || []);
    setEvents(eventsRes.data || []);
    setLoading(false);
  }

  useEffect(() => {
    checkAdmin();
  }, []);

  useEffect(() => {
    if (authorized) loadData();
  }, [authorized]);

  // ---- Thống kê ----
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const totalPlayers = players.length;
  const totalXP = players.reduce((sum, p) => sum + (p.xp || 0), 0);
  const totalCoins = players.reduce((sum, p) => sum + (p.coins || 0), 0);

  // "Online hôm nay" = số người có bất kỳ hoạt động nào trong ngày
  // (game hiện chỉ ghi question_correct / question_wrong / world_complete, chưa có "login")
  const activeToday = new Set(
    events
      .filter((e) => new Date(e.created_at) >= startOfToday)
      .map((e) => e.user_id)
  ).size;

  const worldStats: Record<number, number> = {};
  events.forEach((e) => {
    if (e.event_type === "world_complete" && e.world_id) {
      worldStats[e.world_id] = (worldStats[e.world_id] || 0) + 1;
    }
  });

  const worldChartData = Object.entries(worldStats)
    .map(([world, count]) => ({ world: `World ${world}`, count, id: Number(world) }))
    .sort((a, b) => a.id - b.id);

  // ---- Giao diện ----
  if (checkingAuth) {
    return <div className="p-10 text-white">Đang kiểm tra quyền...</div>;
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black">⛔ Truy cập bị từ chối</h1>
          <p className="mt-4">Bạn không có quyền vào trang Admin.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-5xl font-black mb-8">👑 Admin Dashboard</h1>

      {errorMsg && (
        <div className="bg-red-900/60 border border-red-500 rounded-xl p-4 mb-6">
          ⚠️ Lỗi tải dữ liệu: {errorMsg}
        </div>
      )}

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">{totalPlayers}</div>
          <div>Tổng người chơi</div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">{totalXP}</div>
          <div>Tổng XP</div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">{totalCoins}</div>
          <div>Tổng Coin</div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">{activeToday}</div>
          <div>Hoạt động hôm nay</div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-5">👥 Danh sách người chơi</h2>

        {loading ? (
          <div>Đang tải...</div>
        ) : (
          <div className="space-y-3">
            {players.map((player, index) => (
              <div
                key={player.id}
                className="bg-slate-700 p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <div className="font-bold">
                    #{index + 1} {player.display_name}
                  </div>
                  <div className="text-sm text-slate-300">{player.id}</div>
                </div>

                <div className="flex gap-5">
                  <span>⭐ {player.xp || 0}</span>
                  <span>🪙 {player.coins || 0}</span>
                  <span>🔥 {player.streak || 0}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 mt-8">
        <h2 className="text-3xl font-bold mb-5">📊 World phổ biến nhất</h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={worldChartData}>
              <XAxis dataKey="world" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" allowDecimals={false} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.06)" }}
                contentStyle={{
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  color: "#fff",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar
                dataKey="count"
                name="Số lần hoàn thành"
                fill="#60a5fa"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 mt-8">
        <h2 className="text-3xl font-bold mb-5">📜 Event Log</h2>

        <div className="space-y-2">
          {events.slice(0, 30).map((event) => (
            <div key={event.id} className="bg-slate-700 rounded-lg p-3">
              <div>{event.event_type}</div>

              {event.world_id && <div>World {event.world_id}</div>}

              <div className="text-xs text-slate-400">
                {new Date(event.created_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}