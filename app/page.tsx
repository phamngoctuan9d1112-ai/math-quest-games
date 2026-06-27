"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import XPBar from "./components/XPBar";
import StatusBar from "./components/StatusBar";
import WorldSelect from "./components/WorldSelect";
import TopBar from "./components/TopBar";
import AchievementList from "./components/AchievementList";

import { achievements } from "./data/achievements";
import { bosses } from "./data/bosses";
import { getWorlds } from "./data/worlds";
import { worldQuestions } from "./data/questions";
import Shop from "./components/Shop";
import StartScreen from "./components/StartScreen";
import Inventory from "./components/Inventory";
import SubMap from "./components/SubMap"; 
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Định nghĩa cấu trúc của một Boss
interface Boss {
  question: string;
  options: (string | number)[];
  answer: string | number;
}

export default function Home() {
  // ==========================================
  // 1. KHAI BÁO TẤT CẢ STATE Ở TRÊN CÙNG
  // ==========================================
  const [started, setStarted] = useState<boolean>(false);
  const [showInventory, setShowInventory] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [pet, setPet] = useState("🥚");
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState<boolean>(false);
  const [newWorldUnlocked, setNewWorldUnlocked] = useState<number | null>(null);
  const [unlockedWorlds, setUnlockedWorlds] = useState([1, 21, 41]);
  const [examMode, setExamMode] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [bossVictory, setBossVictory] = useState(false);
  const [bossHP, setBossHP] = useState(0);
  const [maxBossHP, setMaxBossHP] = useState(0);
  const [weapon, setWeapon] = useState("🪵");
  const [attacking, setAttacking] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [bossAttack, setBossAttack] = useState(false);
  const [bossHit, setBossHit] = useState(false);
  const [message, setMessage] = useState("");
  const [shopMessage, setShopMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [avatar, setAvatar] = useState("🧑");
// Thay vì: const [currentBoss, setCurrentBoss] = useState(null);
// Hãy sửa thành:
const [currentBoss, setCurrentBoss] = useState<Boss | null>(null);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [showShop, setShowShop] = useState(false);
  const [inventory, setInventory] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [dailyProgress, setDailyProgress] = useState<number>(0);

  const [myRank, setMyRank] = useState<number>(0);
  
  // Đã sửa Type cho biến Auth
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);

  const [selectedSubMap, setSelectedSubMap] = useState<number | null>(null);
  const [currentSubNode, setCurrentSubNode] = useState<number | null>(null);
  const [subNodeProgress, setSubNodeProgress] = useState<Record<number, number>>({ 1: 1 });

  // Thêm State này vào cùng với các State khác trong page.tsx
const [leaderboard, setLeaderboard] = useState<any[]>([]);


  // ==========================================
  // 2. BIẾN TÍNH TOÁN (Derived Variables)
  // ==========================================
  const level = Math.floor(xp / 50) + 1;
  let petDamage = 1;
  if (pet === "🐶") petDamage = 2;
  if (pet === "🐱") petDamage = 3;
  if (pet === "🐉") petDamage = 5;

  let weaponDamage = 1;
  if (weapon === "⚔️") weaponDamage = 3;
  if (weapon === "💎") weaponDamage = 5;
  if (weapon === "🔥") weaponDamage = 8;
  if (weapon === "👑") weaponDamage = 15;

  const totalDamage = petDamage + weaponDamage;

  let rank = "🥉 Đồng";
  if (level >= 5) rank = "🥈 Bạc";
  if (level >= 10) rank = "🥇 Vàng";
  if (level >= 20) rank = "💎 Kim Cương";
  if (level >= 30) rank = "👑 Huyền Thoại";

  const questions = (() => {
    if (shuffledQuestions.length > 0) return shuffledQuestions; 
    if (!selectedWorld || selectedWorld === -1 || currentSubNode === null) return [];
    const worldData = worldQuestions[selectedWorld as keyof typeof worldQuestions] as any;
    if (!worldData) return [];
    if (currentSubNode === 1) return worldData.stage1 || [];
    if (currentSubNode === 2) return worldData.stage2 || [];
    if (currentSubNode === 3) return worldData.stage3 || [];
    return [];
  })();

  async function updateXP(newXP: number) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("profiles")
    .update({
      xp: newXP,
    })
    .eq("id", user.id);

  if (error) {
    console.error("Lỗi cập nhật XP:", error);
  }
}

async function updateCoins(newCoins: number) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase
    .from("profiles")
    .update({
      coins: newCoins,
    })
    .eq("id", user.id);
}

  const question = current < questions.length ? questions[current] : null;

  // ==========================================
  // 3. TẤT CẢ USE EFFECT (Không được đặt dưới if return)
  // ==========================================
  useEffect(() => {
    const syncData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (data && !error) {
          const profile = data as any;
          setXp(Number(profile.xp || 0));
          setCoins(Number(profile.coins || 0));
        }
      }
    };
    syncData();
  }, []);

  useEffect(() => {
  const checkUser = async () => {
    const {
  data: { user },
} = await supabase.auth.getUser();

if (user) {
  await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      display_name:
        user.user_metadata?.full_name ??
        user.user_metadata?.name ??
        user.email,
      avatar_url: user.user_metadata?.avatar_url ?? "",
    });

  setIsLoggedIn(true);
}

setLoadingAuth(false);
  };

  checkUser();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      setIsLoggedIn(true);
      setLoadingAuth(false);
    } else if (event === "SIGNED_OUT") {
      setIsLoggedIn(false);
      setLoadingAuth(false);
    }
  });

  return () => subscription.unsubscribe();
}, []);

async function fetchLeaderboard() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("profiles")
    .select("id, display_name, avatar_url, xp")
    .order("xp", { ascending: false });

  if (!data) return;

  setLeaderboard(data.slice(0, 10));

  if (user) {
    const rank = data.findIndex((u) => u.id === user.id);

    if (rank !== -1) {
      setMyRank(rank + 1);
    }
  }
}

  // Các useEffect đồng bộ LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem('daily_task_progress');
      if (savedProgress) setDailyProgress(parseInt(savedProgress, 10));
      const savedSubNodes = localStorage.getItem('subNodeProgress');
      if (savedSubNodes) {
        try { setSubNodeProgress(JSON.parse(savedSubNodes)); } catch(e){}
      }
      const today = new Date().toDateString();

      // Kiểm tra đã nhận thưởng Daily Quest hôm nay chưa
const rewardDate = localStorage.getItem("dailyRewardDate");

if (rewardDate === today) {
  setDailyRewardClaimed(true);
} else {
  setDailyRewardClaimed(false);
}
      const lastLogin = localStorage.getItem("lastLogin");
      if (lastLogin !== today) {

  // Thưởng đăng nhập
  setCoins(prev => prev + 50);

  // Reset Daily Quest
  setDailyProgress(0);

  setDailyRewardClaimed(false);

  localStorage.removeItem("dailyRewardDate");

  localStorage.setItem("daily_task_progress", "0");

  localStorage.setItem("lastLogin", today);

  setMessage("🎁 Đăng nhập nhận 50 Coin");
}
      const savedWorlds = localStorage.getItem("unlockedWorlds");
      if (savedWorlds) {
        try {
          const parsedWorlds = JSON.parse(savedWorlds);
          setUnlockedWorlds([...new Set([...parsedWorlds, 1, 21, 41])]);
        } catch (e) {
          setUnlockedWorlds([1, 21, 41]);
        }
      }
      const savedBossHP = localStorage.getItem("bossHP");
      if (savedBossHP) setBossHP(Number(savedBossHP));
      const savedHearts = localStorage.getItem("hearts");
      if (savedHearts) setHearts(Number(savedHearts));
      const savedXP = localStorage.getItem("xp");
      const savedCoins = localStorage.getItem("coins");
      const savedAvatar = localStorage.getItem("avatar");
      if (savedXP) setXp(Number(savedXP));
      if (savedCoins) setCoins(Number(savedCoins));
      if (savedAvatar) setAvatar(savedAvatar);
      const savedInventory = localStorage.getItem("inventory");
      if (savedInventory) setInventory(JSON.parse(savedInventory));
      const savedWeapon = localStorage.getItem("weapon");
      if (savedWeapon) setWeapon(savedWeapon);
      const savedPet = localStorage.getItem("pet");
      if (savedPet) setPet(savedPet);
    }
  }, []);

  // Lưu state vào LocalStorage khi thay đổi
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem('daily_task_progress', dailyProgress.toString()); }, [dailyProgress]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem('subNodeProgress', JSON.stringify(subNodeProgress)); }, [subNodeProgress]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("bossHP", bossHP.toString()); }, [bossHP]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("hearts", hearts.toString()); }, [hearts]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("current", current.toString()); }, [current]);
  useEffect(() => { if (typeof window !== "undefined" && selectedWorld) localStorage.setItem("selectedWorld", selectedWorld.toString()); }, [selectedWorld]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("inventory", JSON.stringify(inventory)); }, [inventory]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("unlockedWorlds", JSON.stringify(unlockedWorlds)); }, [unlockedWorlds]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("xp", xp.toString()); }, [xp]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("pet", pet); }, [pet]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("coins", coins.toString()); }, [coins]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("weapon", weapon); }, [weapon]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("avatar", avatar); }, [avatar]);

  // Setup Boss khi tới stage 3
  useEffect(() => {
    if (selectedWorld && selectedWorld !== -1 && currentSubNode === 3 && current >= questions.length && !currentBoss) {
      const bossList = bosses[selectedWorld as keyof typeof bosses];
      if (bossList) {
        const randomBoss = bossList[Math.floor(Math.random() * bossList.length)];
        setCurrentBoss(randomBoss);
        const bossHPRequired = totalDamage * 3; 
        setBossHP(bossHPRequired);
        setMaxBossHP(bossHPRequired);
      }
    }
  }, [current, selectedWorld, currentSubNode, currentBoss, totalDamage, questions.length]);

  // Setup Boss chung
  useEffect(() => {
    if (!selectedWorld || selectedWorld === -1) return;
    const bossList = bosses[selectedWorld as keyof typeof bosses];
    if (!bossList) return;
    const randomBoss = bossList[Math.floor(Math.random() * bossList.length)];
    setCurrentBoss(randomBoss);
    const bossHPRequired = totalDamage * 3;
    setBossHP(bossHPRequired);
    setMaxBossHP(bossHPRequired);
  }, [selectedWorld, totalDamage]);

  // ==========================================
  // 4. CÁC HÀM XỬ LÝ SỰ KIỆN (Functions)
  // ==========================================
  const onLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const onLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  function showShopMessage(text: string) {
    setShopMessage(text);
    setTimeout(() => { setShopMessage(""); }, 2000);
  }

  async function checkAnswer(value: number | string) {
    if (value === question?.answer) {
      setCorrectAnswers(prev => prev + 1);
      setDailyProgress(prev => (prev < 5 ? prev + 1 : prev));
      const newXP = xp + 10;

setXp(newXP);

await updateXP(newXP);

let reward = 5;

if (pet === "🐶") reward = 6;
if (pet === "🐱") reward = 7;
if (pet === "🐉") reward = 10;

const newCoins = coins + reward;

setCoins(newCoins);

await updateCoins(newCoins);

await fetchLeaderboard();
      setMessage("✅ Chính xác!");
    } else {
      setHearts(prev => prev - 1);
      setMessage("❌ Sai!");
    }

    setTimeout(() => { setMessage(""); }, 1200);

    const nextIndex = current + 1;
    if (nextIndex >= questions.length) {
      const currentMapId = selectedSubMap || 1;
      const currentWorldProgress = subNodeProgress[currentMapId] || 1;

      if (currentSubNode === currentWorldProgress && currentWorldProgress < 3) {
        setSubNodeProgress(prev => ({ ...prev, [currentMapId]: currentWorldProgress + 1 }));
        setCurrentSubNode(null);
        setSelectedWorld(null);
        setCurrent(0);
      } else if (currentSubNode === 3) {
        setCurrent(nextIndex);
      } else {
        setCurrentSubNode(null);
        setSelectedWorld(null);
        setCurrent(0);
      }
    } else {
      setCurrent(nextIndex);
    }
  }

 // ==========================================
  // 5. GIAO DIỆN (Điều kiện hiển thị render)
  // ==========================================
  
  if (loadingAuth) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Đang tải...</div>;
  }

  // ĐÃ CẬP NHẬT ĐIỀU KIỆN: Nếu chưa bấm Start và CHƯA đăng nhập thì mới giữ chân ở StartScreen
  if (!started && !isLoggedIn) {
    return (
      <StartScreen 
        onStart={() => setStarted(true)} 
        onLogin={onLogin} 
        isLoggedIn={isLoggedIn} 
        onLogout={onLogout}
      />
    );
  }

  if (showInventory) {
  return (
    <Inventory
      inventory={inventory}
      weapon={weapon}
      pet={pet}
      avatar={avatar}
      onClose={() => setShowInventory(false)}
    />
  );
}

  if (showAchievements) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div
  className="
  bg-slate-100
  rounded-3xl
  shadow-2xl
  w-[900px]
  max-w-full
  max-h-[90vh]
  overflow-y-auto
  p-10
  "
>
          <TopBar hearts={hearts} coins={coins} xp={xp} level={level} />
          <AchievementList achievements={achievements} xp={xp} />
          <button
onClick={() => setShowAchievements(false)}
className="
mt-8
w-full
bg-red-500
hover:bg-red-600
text-white
font-bold
py-4
rounded-2xl
transition
"
>
Đóng
</button>
        </div>
      </main>
    );
  }

  if (gameCompleted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white">
        <h1 className="text-7xl font-bold">👑 CHÚC MỪNG</h1>
        <p className="text-4xl">Bạn đã hoàn thành</p>
        <p className="text-6xl font-bold">MATH QUEST THPT</p>
        <p className="text-2xl">🌟 60 World đã chinh phục</p>
        <p className="text-2xl">🏆 Danh hiệu:</p>
        <p className="text-4xl font-bold">Chúa Tể Toán Học 👑</p>
        <p className="text-xl">XP: {xp}</p>
        <p className="text-xl">Coin: {coins}</p>
        <button onClick={() => { setGameCompleted(false); setSelectedWorld(null); setSelectedSubMap(null); setCurrentSubNode(null); }} className="bg-white text-black px-8 py-4 rounded-xl font-bold text-xl">
          🌍 Về Map
        </button>
      </main>
    );
  }

  if (newWorldUnlocked) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 text-white">
        <div className="text-8xl animate-bounce">🔓</div>
        <h1 className="text-6xl font-bold mt-4">World Mới!</h1>
        <p className="text-3xl mt-4">🌍 World {newWorldUnlocked} đã được mở khóa</p>
        <button onClick={() => { setNewWorldUnlocked(null); setBossVictory(true); }} className="mt-8 bg-yellow-500 px-8 py-4 rounded-xl text-xl font-bold">
          Tiếp tục
        </button>
      </main>
    );
  }

  if (bossVictory) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">🏆 Đánh Bại Boss!</h1>
        <p className="text-2xl">+50 XP</p>
        <p className="text-2xl">+30 Coin</p>
        <button onClick={() => { setBossVictory(false); setCurrent(0); setCurrentBoss(null); setBossHP(0); setMaxBossHP(0); setSelectedWorld(null); setSelectedSubMap(null); setCurrentSubNode(null); }} className="bg-green-500 text-white px-6 py-3 rounded-xl">
          Tiếp tục
        </button>
      </main>
    );
  } 

  if (selectedSubMap !== null && currentSubNode === null) {
    const currentWorldProgress = subNodeProgress[selectedSubMap] || 1;
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <SubMap 
          worldId={selectedSubMap}
          currentProgress={currentWorldProgress}
          onSelectNode={(nodeId) => {
            setCurrentSubNode(nodeId);
            setSelectedWorld(selectedSubMap);
            setCurrent(0);
          }}
          onBack={() => { setSelectedSubMap(null); }}
        />
      </main>
    );
  }

  if (showLeaderboard) {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-3xl p-8 w-[600px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    🏆 Bảng Xếp Hạng
                </h1>

                {leaderboard.map((user, index) => (
                    <div
                        key={user.id}
                        className="flex justify-between border-b py-3"
                    >
                        <div>
                            {index + 1}. {user.display_name}
                        </div>

                        <div className="font-bold text-blue-600">
                            {user.xp} Điểm
                        </div>
                    </div>
                ))}

                <div className="mt-6 text-center">
                    <p className="font-bold">
                        Hạng của bạn: #{myRank}
                    </p>

                    <button
    onClick={() => setShowLeaderboard(false)}
    className="
        w-full
        mt-6
        bg-red-500
        hover:bg-red-600
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-red-500/40
        active:scale-95
        transition-all
        duration-300
        text-white
        py-3
        rounded-xl
        font-bold
        cursor-pointer
    "
>
    ❌ Đóng
</button>
                </div>

            </div>
        </main>
    );
}

  if (selectedWorld === null) {
    return (
      <>
        {shopMessage && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-xl animate-bounce z-[999]">
            {shopMessage}
          </div>
        )}

        {showShop && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center overflow-y-auto z-50">
            <Shop
              coins={coins}
              onBuyHeart={async () => {
    if (coins >= 20) {
        const newCoins = coins - 20;

        setCoins(newCoins);
        setHearts(prev => prev + 1);

        await updateCoins(newCoins);
        await fetchLeaderboard();

        showShopMessage("❤️ Mua tim thành công!");
    } else {
        showShopMessage("❌ Không đủ Coin!");
    }
}}
              onBuyDog={() => {
                if (coins >= 100) {
                  setCoins(prev => prev - 100);
                  setPet("🐶");
                  setInventory(prev => [...prev, "🐶"]);
                  showShopMessage("🐶 Đã mua Chó Toán Học!");
                }
              }}
              onBuyCat={() => {
                if (coins >= 200) {
                  setCoins(prev => prev - 200);
                  setPet("🐱");
                  setInventory(prev => [...prev, "🐱"]);
                  showShopMessage("🐱 Đã mua Mèo Toán Học!");
                }
              }}
              onBuyDragonPet={() => {
                if (coins >= 500) {
                  setCoins(prev => prev - 500);
                  setPet("🐉");
                  setInventory(prev => [...prev, "🐉"]);
                  showShopMessage("🐉 Đã mua Rồng Toán Học!");
                }
              }}
              onBuyWizard={() => {
                if (coins >= 50) {
                  setCoins(prev => prev - 50);
                  setAvatar("🧙");
                  showShopMessage("🧙 Đã mua Pháp Sư!");
                }
              }}
              onBuyHero={() => {
                if (coins >= 100) {
                  setCoins(prev => prev - 100);
                  setAvatar("🦸");
                  showShopMessage("🦸 Đã mua Siêu Anh Hùng!");
                }
              }}
              onBuyDragon={() => {
                if (coins >= 200) {
                  setCoins(prev => prev - 200);
                  setAvatar("🐉");
                  showShopMessage("🐉 Đã mở khóa Avatar Rồng!");
                }
              }}
              onBuyKing={() => {
                if (coins >= 500) {
                  setCoins(prev => prev - 500);
                  setAvatar("👑");
                  showShopMessage("👑 Đã mở khóa Vua Toán!");
                }
              }}
              onClose={() => setShowShop(false)}
            />
          </div>
        )}

        <main className="relative min-h-screen bg-black text-white flex flex-col items-center p-8">
          <WorldSelect
            worlds={getWorlds(unlockedWorlds)}
            onSelect={(worldId) => { setSelectedSubMap(worldId); }}
            level={level}
            rank={rank}
            coins={coins}
            onShop={() => setShowShop(true)}
            onInventory={() => setShowInventory(true)}
            onAchievements={() => setShowAchievements(true)}
            onLeaderboard={() => {
    fetchLeaderboard();
    setShowLeaderboard(true);
}}
            onExam={() => {
              const allQuestions: any[] = [];
              Object.values(worldQuestions).forEach((world: any) => {
                if (world.stage1) allQuestions.push(...world.stage1);
                if (world.stage2) allQuestions.push(...world.stage2);
                if (world.stage3) allQuestions.push(...world.stage3);
              });
              const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 50);
              setShuffledQuestions(shuffled);
              setCurrent(0);
              setCorrectAnswers(0);
              setExamMode(true);
              setSelectedWorld(-1); 
              setStarted(true);
            }}
          />
        </main>
      </>
    );
  }

  if (hearts <= 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">💀 Game Over</h1>
        <p>⭐ Điểm : {xp}</p>
        <p>🪙 Coin: {coins}</p>
        <button onClick={() => { setCurrent(0); setHearts(3); setSelectedWorld(null); setSelectedSubMap(null); setCurrentSubNode(null); }} className="bg-red-500 text-white px-6 py-3 rounded-xl">
          Chơi lại
        </button>
      </main>
    );
  }

  if (!examMode && current >= questions.length && currentBoss) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 bg-slate-900 text-white">
        <h1 className="text-5xl font-bold text-red-500">👹 BOSS WORLD {selectedWorld}</h1>
        <div className="w-[400px]">
          <p className="font-bold text-center">❤️ HP: {bossHP}/{maxBossHP}</p>
          <div className="bg-gray-700 h-6 rounded-full w-full overflow-hidden mt-1">
            <div className="bg-red-500 h-6 rounded-full transition-all duration-300" style={{ width: `${Math.max(0, (bossHP / maxBossHP) * 100)}%` }} />
          </div>
        </div>
        
        <div className="bg-slate-800 p-6 rounded-2xl max-w-xl text-center my-4 shadow-xl border border-slate-700">
          <p className="text-3xl font-semibold text-yellow-400">{currentBoss.question}</p>
        </div>

        <div className="relative w-[800px] h-[250px] border border-slate-700 rounded-xl bg-slate-950 overflow-hidden shadow-inner">
          <div className={`absolute bottom-5 text-7xl transition-all duration-500 ${attacking ? "left-[500px]" : "left-[50px]"}`}>
            {avatar}⚔️
          </div>
          <div className={`absolute bottom-5 text-7xl transition-all duration-500 ${bossAttack ? "right-[500px]" : "right-[50px]"}`}>
            {bossHP > maxBossHP * 0.7 ? "👹" : bossHP > maxBossHP * 0.3 ? "👺" : "😈"}
          </div>
        </div>

        {bossHit && (
          <p className="text-red-400 font-bold text-3xl animate-bounce">-{totalDamage} HP</p>
        )}

        <div className="grid grid-cols-2 gap-4 w-[600px] mt-4">
          {(currentBoss as any).options.map((option: any) => (
            <button
              key={String(option)}
              className="bg-red-600 hover:bg-red-700 active:scale-95 transition text-white px-6 py-4 rounded-xl font-bold text-xl shadow-lg"
              onClick={() => {
                if (option === currentBoss.answer) {
                  setAttacking(true);
                  setTimeout(async () => {
                    const newHP = bossHP - totalDamage;
                    setBossHP(newHP);
                    setBossHit(true);
                    setAttacking(false);
                    setTimeout(() => { setBossHit(false); }, 400);

                    if (newHP > 0) {
                      const bossList = bosses[selectedWorld as keyof typeof bosses];
                      if (bossList) setCurrentBoss(bossList[Math.floor(Math.random() * bossList.length)]);
                    } else {
                      if (selectedWorld === 20) {
                        const newXP = xp + 500;
setXp(newXP);
await updateXP(newXP);

const newCoins = coins + 1000;
setCoins(newCoins);
await updateCoins(newCoins);

await fetchLeaderboard();

                        confetti({ particleCount: 300, spread: 180 });
                        setGameCompleted(true);
                      } else {
                        const nextWorld = selectedWorld + 1;
                        if (nextWorld <= Object.keys(worldQuestions).length) {
                          setUnlockedWorlds(prev => [...new Set([...prev, nextWorld])]);
                          setNewWorldUnlocked(nextWorld);
                        }
                        setBossVictory(true);
                      }
                      setCurrentBoss(null);
                    }
                  }, 500);
                } else {
                  setBossAttack(true);
                  setTimeout(() => {
                    setHearts(prev => prev - 1);
                    setBossAttack(false);
                  }, 500);
                }
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </main>
    );
  }

  if (examMode && current >= questions.length) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">🎓 Hoàn Thành Bài Thi</h1>
        <p className="text-3xl">Điểm: {correctAnswers}/50</p>
        <button onClick={() => { setExamMode(false); setSelectedWorld(null); setSelectedSubMap(null); setCurrent(0); setShuffledQuestions([]); }} className="bg-green-500 text-white px-6 py-3 rounded-xl">
          Về Menu
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white text-black p-8 rounded-3xl shadow-2xl w-[600px] max-w-full">
        <h1 className="text-4xl font-bold text-center">🚀 Math Quest</h1>
        <p className="text-center font-bold">Pet Đồng Hành</p>
        <p className="text-center text-sm text-gray-500">
          {pet === "🐶" && "+1 Coin mỗi câu"}
          {pet === "🐱" && "+2 Coin mỗi câu"}
          {pet === "🐉" && "+5 Coin mỗi câu"}
        </p>
        

        <div className="mt-4">
          <StatusBar hearts={hearts} coins={coins} xp={xp} />
          
          <div className="mt-4 p-4 border rounded-xl">
            <h2 className="font-bold">🎯 Daily Quest</h2>
            <p>{dailyProgress >= 5 ? "✅" : "⬜"} Trả lời đúng 5 câu ({dailyProgress}/5)</p>
            <p>{xp >= 100 ? "✅" : "⬜"} Kiếm 100 XP ({xp}/100)</p>

            {dailyProgress >= 5 && !dailyRewardClaimed && (
              <button
  onClick={() => {
    const today = new Date().toDateString();

    setCoins(prev => prev + 50);

    setDailyRewardClaimed(true);

    // Lưu ngày đã nhận thưởng
    localStorage.setItem("dailyRewardDate", today);

    setMessage("🎁 Nhận 50 Coin!");
  }}
                className="bg-green-500 text-white px-4 py-2 rounded-xl mt-2 w-full font-bold"
              >
                Nhận thưởng Nhiệm Vụ
              </button>
            )}
          </div>
        </div>

        <p className="text-center mt-4 text-sm font-semibold text-indigo-600">
          {examMode ? "🎓 Chế độ Luyện Thi THPT" : `🌍 World ${selectedWorld} - Chặng ${currentSubNode}`}
        </p>
      
        {message && (
          <div className="bg-yellow-100 text-black p-3 rounded-xl mt-4 text-center">
            {message}
          </div>
        )}

        <p className="text-center mt-2">
          Câu {current + 1} / {questions.length}
        </p>

        <div className="w-full bg-gray-300 rounded-full h-4 mt-3">
          <div className="bg-green-500 h-4 rounded-full transition-all" style={{ width: `${questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0}%` }} />
        </div>

        <h2 className="text-2xl text-center mt-6">
          {question?.question}
        </h2>

        <div className="grid gap-3 mt-6">
          {question?.options?.map((option: string | number) => (
            <button
              key={String(option)}
              onClick={() => checkAnswer(option)}
              className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white py-4 rounded-2xl font-bold text-xl shadow-lg"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}