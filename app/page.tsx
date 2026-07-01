"use client";

import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import XPBar from "./components/XPBar";
import StatusBar from "./components/StatusBar";
import WorldSelect from "./components/WorldSelect";
import TopBar from "./components/TopBar";
import AchievementList from "./components/AchievementList";
import TermsModal from "./components/TermsModal";
import { achievements } from "./data/achievements";
import { getWorlds } from "./data/worlds";
import { propositionQuestions } from "./data/questions";
console.log(propositionQuestions);
console.log(Object.keys(propositionQuestions));
import Shop from "./components/Shop";
import StartScreen from "./components/StartScreen";
import Inventory from "./components/Inventory";
import SubMap from "./components/SubMap"; 
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);



export default function Home() {

  // ==========================================
  // 1. KHAI BÁO TẤT CẢ STATE Ở TRÊN CÙNG
  // ==========================================
  const [userName, setUserName] = useState("");
  const [started, setStarted] = useState<boolean>(false);
  const [showInventory, setShowInventory] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [pet, setPet] = useState("🥚");
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState<boolean>(false);
  const [newWorldUnlocked, setNewWorldUnlocked] = useState<number | null>(null);
  const [unlockedWorlds, setUnlockedWorlds] = useState([1, 27, 62]);
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
 
  const [weapon, setWeapon] = useState("🪵");
  const [attacking, setAttacking] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
 
  const [message, setMessage] = useState("");
  const [shopMessage, setShopMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [avatar, setAvatar] = useState("🧑");
// Thay vì: const [currentBoss, setCurrentBoss] = useState(null);
// Hãy sửa thành:

  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [showShop, setShowShop] = useState(false);
  const [inventory, setInventory] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [dailyProgress, setDailyProgress] = useState<number>(0);

  // State lưu kết quả chọn Đúng/Sai cho 4 ý của Chặng 2. Ví dụ: { a: "Đúng", b: "Sai" }
const [tfAnswers, setTfAnswers] = useState<Record<string, "Đúng" | "Sai">>({});

// State lưu chữ người dùng nhập vào ô văn bản ở Chặng 3
const [shortAnswer, setShortAnswer] = useState<string>("");

// State kiểm soát việc hiển thị/ẩn bảng giải thích chi tiết ở Chặng 3
const [showExplanation, setShowExplanation] = useState<boolean>(false);


  const [myRank, setMyRank] = useState<number>(0);
  
  // Đã sửa Type cho biến Auth
  const [showTerms, setShowTerms] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);

  const [selectedSubMap, setSelectedSubMap] = useState<number | null>(null);
  const [currentSubNode, setCurrentSubNode] = useState<number | null>(null);
  const [subNodeProgress, setSubNodeProgress] = useState<Record<number, number>>({ 1: 1 });
  const [dataLoaded, setDataLoaded] = useState(false);

  // Thêm State này vào cùng với các State khác trong page.tsx
const [leaderboard, setLeaderboard] = useState<any[]>([]);

const [currentUserId, setCurrentUserId] =
  useState<string | null>(null);
  // ==========================================
  // 2. BIẾN TÍNH TOÁN (Derived Variables)
  // ==========================================
  
  const level = Math.floor(xp / 50) + 1;
  
  
  let rank = "🥉 Đồng";
  if (level >= 5) rank = "🥈 Bạc";
  if (level >= 10) rank = "🥇 Vàng";
  if (level >= 20) rank = "💎 Kim Cương";
  if (level >= 30) rank = "👑 Huyền Thoại";

  

  const questions = (() => {

    

  if (
    selectedWorld === null ||
    currentSubNode === null
  ) {
    return [];
  }

  const worldData =
    propositionQuestions[
      selectedWorld as keyof typeof propositionQuestions
    ] as any;

  if (!worldData) return [];

  if (currentSubNode === 1)
    return worldData.stage1 || [];

  if (currentSubNode === 2)
    return worldData.stage2 || [];

  if (currentSubNode === 3)
    return worldData.stage3 || [];

  return [];


})();


  const syncData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (data && !error) {
    const profile = data as any;

    setXp(Number(profile.xp || 0));
    setCoins(Number(profile.coins || 0));
    setUnlockedWorlds(profile.unlocked_worlds || [1,27,62]);
    setAvatar(profile.avatar || "🧑");
    setWeapon(profile.weapon || "🪵");
    setPet(profile.pet || "🥚");
    setHearts(Number(profile.hearts || 3));
    setDataLoaded(true);
  }
}; // <-- THIẾU CÁI NÀY?
  

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

async function saveProgress() {



  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase
    .from("profiles")
    .update({
      xp,
      coins,
      unlocked_worlds: unlockedWorlds,
      avatar,
      weapon,
      pet,
      hearts,
    })
    .eq("id", user.id);
}

  const question = (current < questions.length ? questions[current] : null) as any;

  console.log("questions.length =", questions.length);
console.log("current =", current);
console.log("selectedWorld =", selectedWorld);
console.log("currentSubNode =", currentSubNode);
console.log(
  "selectedSubMap =",
  selectedSubMap
);

  // ==========================================
  // 3. TẤT CẢ USE EFFECT (Không được đặt dưới if return)
  // ==========================================


useEffect(() => {
  if (typeof window === "undefined") return;

  const savedWorld =
    localStorage.getItem("selectedWorld");

  const savedCurrent =
    localStorage.getItem("current");

  const savedSubMap =
    localStorage.getItem("selectedSubMap");

  const savedSubNode =
    localStorage.getItem("currentSubNode");

  if (savedWorld)
    setSelectedWorld(Number(savedWorld));

  if (savedCurrent)
    setCurrent(Number(savedCurrent));

  if (savedSubMap)
    setSelectedSubMap(Number(savedSubMap));

  if (savedSubNode)
    setCurrentSubNode(Number(savedSubNode));
}, []);



useEffect(() => {
  if (
    selectedWorld === null &&
    currentSubNode === null
  ) {
    
  }
}, [
  selectedWorld,
  currentSubNode
]);

useEffect(() => {
  if (selectedSubMap !== null) {
    localStorage.setItem(
      "selectedSubMap",
      selectedSubMap.toString()
    );
  }
}, [selectedSubMap]);

useEffect(() => {
  if (currentSubNode !== null) {
    localStorage.setItem(
      "currentSubNode",
      currentSubNode.toString()
    );
  }
}, [currentSubNode]);

  useEffect(() => {
  if (!currentUserId) return;

  syncData();
}, [currentUserId]);

  useEffect(() => {
  const checkUser = async () => {
    

    const {
      data: { user },
    } = await supabase.auth.getUser();

    
    if (user) {

setCurrentUserId(user.id);

      setUserName(
        user.user_metadata?.full_name ||
        user.email ||
        "Người chơi"
      );

      await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          display_name:
            user.user_metadata?.full_name ??
            user.user_metadata?.name ??
            user.email,
          avatar_url:
            user.user_metadata?.avatar_url ?? "",
        });

      const accepted =
  localStorage.getItem(
    `accepted_terms_${user.id}`
  );
      if (!accepted) {
        setShowTerms(true);
      } else {
        setIsLoggedIn(true);
      }
    }

    setLoadingAuth(false);
  };

  checkUser();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        setIsLoggedIn(true);
      } else if (event === "SIGNED_OUT") {

        

setSelectedWorld(null);

setCurrentSubNode(null);

setCurrent(0);

  setIsLoggedIn(false);

  setXp(0);
  setCoins(0);

  setUnlockedWorlds([1, 27, 62]);

  setAvatar("🧑");
  setWeapon("🪵");
  setPet("🥚");

  setHearts(3);

  setDataLoaded(false);

  setCurrentUserId(null);
}

      setLoadingAuth(false);
    }
  );

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
      const savedProgress = 
      localStorage.getItem(
  `daily_task_progress_${currentUserId}`
)
      if (savedProgress) setDailyProgress(parseInt(savedProgress, 10));
      const savedSubNodes = 
      localStorage.getItem(
  `subNodeProgress_${currentUserId}`
)
      if (savedSubNodes) {
        try { setSubNodeProgress(JSON.parse(savedSubNodes)); } catch(e){}
      }
      const today = new Date().toDateString();

      // Kiểm tra đã nhận thưởng Daily Quest hôm nay chưa
const rewardDate = 
localStorage.getItem(
  `dailyRewardDate_${currentUserId}`
)

if (rewardDate === today) {
  setDailyRewardClaimed(true);
} else {
  setDailyRewardClaimed(false);
}
      const lastLogin = 
      localStorage.getItem(
  `lastLogin_${currentUserId}`
)
      if (lastLogin !== today) {

  // Thưởng đăng nhập
  setCoins(prev => prev + 50);

  // Reset Daily Quest
  setDailyProgress(0);

  setDailyRewardClaimed(false);

  localStorage.removeItem(
  `dailyRewardDate_${currentUserId}`
);

  const key =
  `daily_task_progress_${currentUserId}`;

  localStorage.setItem(
  `lastLogin_${currentUserId}`,
  today
);

  setMessage("🎁 Đăng nhập nhận 50 Coin");
}

      
      try {
  const data = localStorage.getItem(
    `inventory_${currentUserId}`
  );

  if (data && data !== "undefined") {
    setInventory(JSON.parse(data));
  }
} catch (err) {
  console.error(err);
}
      
    }
  }, []);

  // Lưu state vào LocalStorage khi thay đổi
  useEffect(() => {
  if (!currentUserId) return;

  localStorage.setItem(
    `daily_task_progress_${currentUserId}`,
    dailyProgress.toString()
  );
}, [dailyProgress, currentUserId]);

  useEffect(() => {
  if (!currentUserId) return;

  localStorage.setItem(
    `subNodeProgress_${currentUserId}`,
    JSON.stringify(subNodeProgress)
  );
}, [subNodeProgress, currentUserId]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("hearts", hearts.toString()); }, [hearts]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("current", current.toString()); }, [current]);
  useEffect(() => { if (typeof window !== "undefined" && selectedWorld) localStorage.setItem("selectedWorld", selectedWorld.toString()); }, [selectedWorld]);
  useEffect(() => {
  if (!currentUserId) return;

  localStorage.setItem(
    `inventory_${currentUserId}`,
    JSON.stringify(inventory)
  );
}, [inventory, currentUserId]);
  
  // Setup Boss khi tới stage 3

const firstLoad = useRef(true);

useEffect(() => {
  if (!isLoggedIn) return;
  if (!dataLoaded) return;

  if (firstLoad.current) {
    firstLoad.current = false;
    return;
  }

  saveProgress();
}, [
  xp,
  coins,
  unlockedWorlds,
  avatar,
  weapon,
  pet,
  hearts,
]);

  // Setup Boss chung
  
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

let reward = 5;

if (pet === "🐶") reward = 6;
if (pet === "🐱") reward = 7;
if (pet === "🐉") reward = 10;

const newCoins = coins + reward;

setCoins(newCoins);

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

    setSubNodeProgress(prev => ({
      ...prev,
      [currentMapId]: currentWorldProgress + 1,
    }));

    setCurrentSubNode(null);
    setSelectedWorld(null);
    setCurrent(0);

  } else if (currentSubNode === 3) {

    const nextWorld = currentMapId + 1;

if (!unlockedWorlds.includes(nextWorld)) {
  setUnlockedWorlds(prev => [
    ...new Set([...prev, nextWorld]),
  ]);

  setNewWorldUnlocked(nextWorld);
}

    setSelectedWorld(null);
    setCurrentSubNode(null);
    setCurrent(0);

  } else {

    setCurrentSubNode(null);
    setSelectedWorld(null);
    setCurrent(0);
  } 
}else {
  setCurrent(nextIndex);
}

  }

  
  // HÀM XỬ LÝ NỘP BÀI CHẶNG 2: ĐÚNG / SAI
  const checkTrueFalseAnswer = () => {
    if (!question?.subQuestions) return;
    let correctCount = 0;
    question.subQuestions.forEach((sub: any) => {
      if (tfAnswers[sub.label] === sub.correctAnswer) correctCount++;
    });

    let scoreMultiplier = 0;
    if (correctCount === 1) scoreMultiplier = 0.10;
    if (correctCount === 2) scoreMultiplier = 0.25;
    if (correctCount === 3) scoreMultiplier = 0.50;
    if (correctCount === 4) scoreMultiplier = 1.00;

    if (scoreMultiplier > 0) {
      setCorrectAnswers((prev) => prev + 1);
      setXp((prev) => prev + Math.round(15 * scoreMultiplier));
      let reward = Math.round(10 * scoreMultiplier);
      if (pet === "🐶") reward += 1;
      if (pet === "🐱") reward += 2;
      if (pet === "🐉") reward += 5;
      setCoins((prev) => prev + reward);
      setMessage(`🎉 Đúng ${correctCount}/4 ý! Thưởng ${scoreMultiplier * 100}%.`);
    } else {
      setHearts((prev) => Math.max(0, prev - 1));
      setMessage("❌ Sai cả 4 ý!");
    }

    setTimeout(() => {
      setMessage("");
      setTfAnswers({});
      const nextIndex = current + 1;
      if (nextIndex >= questions.length) {
        setCurrentSubNode(null);
        setSelectedWorld(null);
        setCurrent(0);
      } else {
        setCurrent(nextIndex);
      }
    }, 2000);
  };

  // HÀM XỬ LÝ NỘP BÀI CHẶNG 3: TỰ LUẬN NGẮN
  const checkShortAnswer = () => {
    const userAns = shortAnswer.trim().toLowerCase();
    const correctAns = String(question?.answer).trim().toLowerCase();

    if (userAns === correctAns) {
      setCorrectAnswers((prev) => prev + 1);
      setXp((prev) => prev + 20);
      let reward = 15;
      if (pet === "🐶") reward += 1;
      if (pet === "🐱") reward += 2;
      if (pet === "🐉") reward += 5;
      setCoins((prev) => prev + reward);
      setMessage("✅ Chính xác! +2 điểm.");
    } else {
      setHearts((prev) => Math.max(0, prev - 1));
      setMessage("❌ Chưa chính xác!");
    }
    setShowExplanation(true);
  };

  const handleNextShortQuestion = () => {
    setShowExplanation(false);
    setShortAnswer("");
    setMessage("");
    const nextIndex = current + 1;
    if (nextIndex >= questions.length) {
      setCurrentSubNode(null);
      setSelectedWorld(null);
      setCurrent(0);
    } else {
      setCurrent(nextIndex);
    }
  };

 // ==========================================
  // 5. GIAO DIỆN (Điều kiện hiển thị render)
  // ==========================================

  
  
  if (loadingAuth) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Đang tải...</div>;
  }


  // ==========================
  // ĐIỀU KHOẢN VÀ DỊCH VỤ 
  // ==========================

  

  // ĐÃ CẬP NHẬT ĐIỀU KIỆN: Nếu chưa bấm Start và CHƯA đăng nhập thì mới giữ chân ở StartScreen


if (showTerms) {
  return (
    <TermsModal
      onAccept={() => {
        localStorage.setItem(
          `accepted_terms_${currentUserId}`,
          "true"
        );

        setShowTerms(false);
        setIsLoggedIn(true);
      }}
    />
  );
}


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
        <p className="text-2xl">🌟 79 World đã chinh phục</p>
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
        <button
  onClick={() => {
    setNewWorldUnlocked(null);

    setSelectedWorld(null);
    setSelectedSubMap(null);
    setCurrentSubNode(null);
    setCurrent(0);
  }}
  className="mt-8 bg-yellow-500 px-8 py-4 rounded-xl text-xl font-bold"
>
  Tiếp tục
</button>
      </main>
    );
  }

  console.log(
  "SHOW SUBMAP",
  selectedSubMap,
  currentSubNode
);

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
          onBack={() => {
  setSelectedSubMap(null);
  setSelectedWorld(null);
  setCurrentSubNode(null);
  setCurrent(0);
}}
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
            onLogout={onLogout}
            onShop={() => setShowShop(true)}
            onInventory={() => setShowInventory(true)}
            onAchievements={() => setShowAchievements(true)}
            onLeaderboard={() => {
    fetchLeaderboard();
    setShowLeaderboard(true);
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
            <p>{xp >= 100 ? "✅" : "⬜"} Kiếm 100 Điểm ({xp}/100)</p>

            {dailyProgress >= 5 && !dailyRewardClaimed && (
              <button
  onClick={() => {
    const today = new Date().toDateString();

    setCoins(prev => prev + 50);

    setDailyRewardClaimed(true);

    // Lưu ngày đã nhận thưởng
    localStorage.setItem(
  `dailyRewardDate_${currentUserId}`,
  today
);

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
  🌍 World {selectedWorld} - Chặng {currentSubNode}
</p>

<div className="flex justify-center mt-2">
  <button
    onClick={() => {
  setCurrent(0);

  setTfAnswers({});
  setShortAnswer("");
  setShowExplanation(false);

  setSelectedSubMap(selectedWorld);

  setCurrentSubNode(null);
}}
    className="
      bg-slate-600
      hover:bg-slate-700
      text-white
      px-4
      py-2
      rounded-xl
      text-sm
      font-bold
      transition
    "
  >
    ⬅️ Quay lại chọn chặng
  </button>
</div>
      
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

       {/* Phần hiển thị nội dung câu hỏi chính */}
<h2 className="text-xl md:text-2xl text-center mt-6 font-bold text-slate-800">
  {question?.question}
</h2>

{/* ---------------- CHẶNG 1: GIAO DIỆN TRẮC NGHIỆM ---------------- */}
{currentSubNode === 1 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
    {question?.options?.map((option: string | number) => (
      <button
        key={String(option)}
        onClick={() => checkAnswer(option)} // Gọi hàm trắc nghiệm cũ của bạn
        className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-4 px-4 rounded-xl font-bold transition shadow-md text-lg"
      >
        {option}
      </button>
    ))}
  </div>
)}

{/* ---------------- CHẶNG 2: GIAO DIỆN ĐÚNG / SAI ĐA NHÁNH ---------------- */}
{currentSubNode === 2 && (
  <div className="mt-6 space-y-4">
    {question?.subQuestions?.map((sub: any) => (
      <div key={sub.label} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <span className="text-slate-700 text-base">
          <strong className="text-indigo-600 font-bold">{sub.label}</strong> {sub.text}
        </span>
        
        {/* Cặp nút Đúng / Sai cho từng ý */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setTfAnswers(prev => ({ ...prev, [sub.label]: "Đúng" }))}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold border transition text-sm ${tfAnswers[sub.label] === "Đúng" ? "bg-green-500 text-white border-green-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`}
          >
            Đúng
          </button>
          <button
            onClick={() => setTfAnswers(prev => ({ ...prev, [sub.label]: "Sai" }))}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold border transition text-sm ${tfAnswers[sub.label] === "Sai" ? "bg-red-500 text-white border-red-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`}
          >
            Sai
          </button>
        </div>
      </div>
    ))}


    
    {/* Nút nộp bài, chỉ sáng lên khi người chơi tích đủ đáp án cho cả 4 ý a,b,c,d */}
    <button
      onClick={checkTrueFalseAnswer}
      disabled={Object.keys(tfAnswers).length < (question?.subQuestions?.length || 4)}
      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold mt-4 shadow-md transition text-lg"
    >
      Nộp bài Đọc / Sai
    </button>
  </div>
)}

{/* ---------------- CHẶNG 3: GIAO DIỆN TRẢ LỜI NGẮN + LỜI GIẢI ---------------- */}
{currentSubNode === 3 && (
  <div className="mt-6 space-y-4">
    {!showExplanation ? (
      // Khung nhập câu trả lời tự luận ngắn
      <>
        <input
          type="text"
          value={shortAnswer}
          onChange={(e) => setShortAnswer(e.target.value)}
          placeholder="Nhập đáp án số hoặc từ ngắn vào đây..."
          className="w-full border-2 border-slate-300 rounded-xl p-4 text-center text-xl font-bold focus:border-blue-500 outline-none text-black bg-slate-50 shadow-inner"
        />
        <button
          onClick={checkShortAnswer}
          disabled={!shortAnswer.trim()}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white py-4 rounded-xl font-bold text-lg shadow-md transition"
        >
          Kiểm tra đáp án
        </button>
      </>
    ) : (
      // Khung hiển thị phần Giải thích chi tiết sau khi người chơi bấm nộp bài
      <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-2xl space-y-3 animate-fade-in text-left">
        <h3 className="font-bold text-amber-800 text-lg flex items-center gap-2">
          💡 Lời giải chi tiết:
        </h3>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line font-medium text-base">
          {question?.explanation}
        </p>
        <button
          onClick={handleNextShortQuestion}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-lg transition mt-4 shadow-md"
        >
          Tiếp tục sang câu kế tiếp ➡️
        </button>
      </div>
    )}
  </div>
)}
      </div>
    </main>
  );
  }
