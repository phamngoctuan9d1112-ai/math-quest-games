"use client";

import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import XPBar from "./components/XPBar";
import { playSound } from "./lib/sound";
import LoadingScreen from "./components/LoadingScreen";
import StatusBar from "./components/StatusBar";
import { motion } from "framer-motion";
import WorldSelect from "./components/WorldSelect";
import Mascot from "./components/Mascot";
import TopBar from "./components/TopBar";
import AchievementList from "./components/AchievementList";
import TermsModal from "./components/TermsModal";
import { achievements } from "./data/achievements";
import { getWorlds } from "./data/worlds";
import { propositionQuestions }
from "./data/questions";
console.log(propositionQuestions);
console.log(Object.keys(propositionQuestions));
import Shop from "./components/Shop";
import StartScreen from "./components/StartScreen";
import Confetti from "react-confetti";
import MathText from "./components/MathText";
import { BlockMath } from "react-katex";
import Inventory from "./components/Inventory";
import SubMap from "./components/SubMap"; 
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


function VictoryModal({
  reward,
  onClose,
}: {
  reward: {
    xp: number;
    coins: number;
    shards: number;
  };
  onClose: () => void;
}) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-[9999]
      "
    >
      <Confetti
  recycle={false}
  numberOfPieces={400}
/>
      <motion.div
      
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
        bg-white
        rounded-3xl
        p-8
        w-[420px]
        max-w-[95%]
        text-center
        shadow-2xl
        "
      >
        <div className="text-7xl">
          🎉
        </div>

        <motion.h2
  initial={{
    y: -100,
    opacity: 0,
  }}
  animate={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.5,
  }}
  className="
  text-4xl
  font-black
  mt-4
  text-orange-500
  "
>
  🎉 WORLD HOÀN THÀNH
</motion.h2>

        <div className="mt-6 space-y-3">

          <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: [1, 1.3, 1] }}
  transition={{
    duration: 0.6,
    delay: 0.3,
  }}
  className="
  text-4xl
  font-black
  text-yellow-500
  "
>
  ⭐ +{reward.xp} XP
</motion.div>

          <motion.div
  initial={{
    x: -100,
    opacity: 0,
  }}
  animate={{
    x: 0,
    opacity: 1,
  }}
  transition={{
    delay: 0.8,
    duration: 0.6,
  }}
  className="
  text-4xl
  font-black
  text-yellow-600
  "
>
  🪙 +{reward.coins} Coin
</motion.div>

          <motion.div
  initial={{
    rotate: -360,
    scale: 0,
  }}
  animate={{
    rotate: 0,
    scale: 1,
  }}
  transition={{
    delay: 1.3,
    duration: 0.8,
  }}
  className="
  text-4xl
  font-black
  text-purple-600
  "
>
  🧩 +{reward.shards}
</motion.div>
        </div>

        <button
          onClick={onClose}
          className="
          mt-8
          w-full
          bg-orange-500
          hover:bg-orange-600
          text-white
          py-3
          rounded-xl
          font-bold
          "
        >
          Tiếp tục
        </button>
      </motion.div>
    </div>
  );
}


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
  const [showTFAnswer, setShowTFAnswer] = useState(false);
  const [weapon, setWeapon] = useState("🪵");
  const [attacking, setAttacking] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [streak, setStreak] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [message, setMessage] = useState("");
  const [shopMessage, setShopMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [avatar, setAvatar] = useState("🧑");
  const [formulaShards, setFormulaShards] = useState(0);
  const [showVictory, setShowVictory] =
  useState(false);

  const [mascotState, setMascotState] =
useState<
  "idle"
  | "happy"
  | "sad"
  | "celebrate"
  | "thinking"
>("idle");

const [mascotMessage, setMascotMessage] =
useState("");

const [victoryReward, setVictoryReward] =
  useState({
    xp: 0,
    coins: 0,
    shards: 0,
  });
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
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const startBackgroundMusic = async () => {
  if (!bgmRef.current) return;

  try {
    await bgmRef.current.play();

    localStorage.setItem(
      "musicUnlocked",
      "true"
    );
  } catch (err) {
    console.error(err);
  }
};

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
  const [musicOn, setMusicOn] = useState(true);
  const [selectedSubMap, setSelectedSubMap] = useState<number | null>(null);
  const [currentSubNode, setCurrentSubNode] = useState<number | null>(null);
  const [subNodeProgress, setSubNodeProgress]
= useState<Record<number, number>>({
  1: 1,
  27: 1,
  62: 1
});
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


  async function syncData() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setDataLoaded(true);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    console.log("PROFILE DATA =", data);
    console.log("PROFILE ERROR =", error);

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setXp(Number(data.xp || 0));
      setCoins(Number(data.coins || 0));

      setUnlockedWorlds(
        data.unlocked_worlds || [1, 27, 62]
      );

      setSubNodeProgress(
        data.sub_node_progress || {
          1: 1,
          27: 1,
          62: 1,
        }
      );

      setAvatar(data.avatar || "🧑");
      setWeapon(data.weapon || "🪵");
      setPet(data.pet || "🥚");
      setHearts(data.hearts || 3);

      console.log("PROFILE FOUND");
    }
  } catch (err) {
    console.error(err);
  } finally {
    setDataLoaded(true);
  }
}
  

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
    sub_node_progress: subNodeProgress,
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

  if (!currentUserId) return;

  localStorage.setItem(
    `game_state_${currentUserId}`,
    JSON.stringify({
      selectedWorld,
      selectedSubMap,
      currentSubNode,

      current,

      xp,
      coins,
      hearts,

      unlockedWorlds,

      subNodeProgress,
    })
  );

}, [
  selectedWorld,
  selectedSubMap,
  currentSubNode,

  current,

  xp,
  coins,
  hearts,

  unlockedWorlds,

  subNodeProgress,

  currentUserId
]);

const prevLevel = useRef(level);

useEffect(() => {
  if (level > prevLevel.current) {

    setMascotState("celebrate");

    setMascotMessage(
      `🎉 Level ${level}!`
    );

    setTimeout(() => {
      setMascotState("idle");
      setMascotMessage("");
    }, 3000);
  }

  prevLevel.current = level;

}, [level]);

useEffect(() => {
  const saved =
  localStorage.getItem(
    `game_state_${currentUserId}`
  );
  if (!saved) return;

  const data = JSON.parse(saved);

  setSelectedWorld(data.selectedWorld);
  setSelectedSubMap(data.selectedSubMap);
  setCurrentSubNode(data.currentSubNode);

  setCurrent(data.current || 0);

  setXp(data.xp || 0);
  setCoins(data.coins || 0);
  setHearts(data.hearts || 3);

  setUnlockedWorlds(
    data.unlockedWorlds || [1,27,62]
  );

  setSubNodeProgress(
    data.subNodeProgress || {
      1:1,
      27:1,
      62:1
    }
  );
}, []);

useEffect(() => {
  if (selectedWorld !== null) return;

  const unlocked =
    localStorage.getItem(
      "musicUnlocked"
    );

  if (
    unlocked === "true" &&
    musicOn
  ) {
    bgmRef.current?.play()
      .catch(() => {});
  }
}, [
  selectedWorld,
  musicOn
]);

useEffect(() => {
  if (!bgmRef.current) return;

  if (musicOn) {
    bgmRef.current.play().catch(console.error);
  } else {
    bgmRef.current.pause();
  }
}, [musicOn]);

useEffect(() => {
  if (started && bgmRef.current) {
    bgmRef.current.play().catch(console.error);
  }
}, [started]);

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
  bgmRef.current = new Audio("/sounds/bgm.mp3");
  bgmRef.current.loop = true;
  bgmRef.current.volume = 0.2;
}, []);

useEffect(() => {
  if (
    isLoggedIn &&
    selectedWorld === null &&
    bgmRef.current
  ) {
    bgmRef.current.play().catch(console.error);
  }
}, [isLoggedIn, selectedWorld]);

useEffect(() => {
  if (!bgmRef.current) return;

  if (selectedWorld === null) {
    bgmRef.current.currentTime = 0;
    bgmRef.current.play().catch(() => {});
  } else {
    bgmRef.current.pause();
  }
}, [selectedWorld]);

  useEffect(() => {
    console.log(
    "CURRENT USER ID EFFECT =",
    currentUserId
  );

  if (!currentUserId) return;

   console.log("CALLING SYNC DATA");


  syncData();
}, [currentUserId]);

  useEffect(() => {
  const checkUser = async () => {

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  console.log("USER =", user);

  if (user) {
    setCurrentUserId(user.id);
      console.log("USER FOUND", user);
      setCurrentUserId(user.id);
      console.log("SET CURRENT USER ID", user.id);
      await updateStreak(user.id);

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
      setDataLoaded(true);
    }
     


    setLoadingAuth(false);
  };

  checkUser();

  console.log("CHECK USER START");

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

async function updateStreak(userId: string) {

  const { data: profile } = await supabase
    .from("profiles")
    .select(
  "streak,last_played,best_streak,formula_shards"
)
    .eq("id", userId)
    .single();

  if (!profile) return;

  const today = new Date();
  const todayStr =
    today.toISOString().split("T")[0];

  let newStreak =
    profile.streak || 0;

  if (!profile.last_played) {

  newStreak = 1;

  await supabase
    .from("profiles")
    .update({
      formula_shards:
        (profile.formula_shards || 0) + 1
    })
    .eq("id", userId);

  setFormulaShards(
    (profile.formula_shards || 0) + 1
  );
} else {

    const lastDate =
      new Date(profile.last_played);

    const diffDays = Math.floor(
      (
        today.getTime() -
        lastDate.getTime()
      ) /
      (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {

  newStreak++;

  await supabase
    .from("profiles")
    .update({
      formula_shards:
        (profile.formula_shards || 0) + 1
    })
    .eq("id", userId);

  setFormulaShards(
    (profile.formula_shards || 0) + 1
  );

}else if (diffDays > 1) {
      newStreak = 1;
    }
  }

  await supabase
    .from("profiles")
    .update({
      streak: newStreak,
      best_streak: Math.max(
        profile.best_streak || 0,
        newStreak
      ),
      last_played: todayStr,
    })
    .eq("id", userId);

  setStreak(newStreak);
}
  // Các useEffect đồng bộ LocalStorage
  useEffect(() => {
    if (!currentUserId) return;
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
  );

if (!lastLogin) {

  localStorage.setItem(
    `lastLogin_${currentUserId}`,
    today
  );

}
else if (lastLogin !== today) {

  setCoins(prev => prev + 50);

  setDailyProgress(0);

  setDailyRewardClaimed(false);

  localStorage.removeItem(
    `dailyRewardDate_${currentUserId}`
  );

  localStorage.setItem(
    `lastLogin_${currentUserId}`,
    today
  );
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
  }, [currentUserId]);

  

  // Lưu state vào LocalStorage khi thay đổi
  useEffect(() => {
  if (!currentUserId) return;

  const savedSubNodes =
    localStorage.getItem(
      `subNodeProgress_${currentUserId}`
    );

  if (savedSubNodes) {
    setSubNodeProgress(
      JSON.parse(savedSubNodes)
    );
  }
}, [currentUserId]);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("hearts", hearts.toString()); }, [hearts]);
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
  if (!currentUserId) return;

  localStorage.setItem(
    `daily_task_progress_${currentUserId}`,
    dailyProgress.toString()
  );
}, [dailyProgress, currentUserId]);

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

  const isCorrect = value === question?.answer;

  if (isCorrect) {
    console.log("PLAY CORRECT");
    playSound("/sounds/correct.mp3");

    setMascotState("happy");

setMascotMessage("🔥 Chính xác!");

setTimeout(() => {
  setMascotState("idle");
  setMascotMessage("");
}, 2000);

    setCorrectAnswers(prev => prev + 1);

    setDailyProgress(prev =>
      prev < 5 ? prev + 1 : prev
    );

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

    setTimeout(() => {
      moveToNextQuestion();
    }, 800);

  } else {
    playSound("/sounds/wrong.mp3");

    setMascotState("sad");

    setMascotMessage(
      "💡 Đọc kỹ đề nhé!"
    );

  setTimeout(() => {
  setMascotState("idle");
  setMascotMessage("");
  }, 2000);

    setHearts(prev => prev - 1);

    setMessage("❌ Sai rồi!");

    setShowCorrectAnswer(true);

    setTimeout(() => {
      setShowCorrectAnswer(false);
      moveToNextQuestion();
    }, 5000);
  }
}



function getNextUnlockWorld(
  worldId: number
) {
  if (
    worldId >= 1 &&
    worldId < 26
  ) {
    return worldId + 1;
  }

  if (
    worldId >= 27 &&
    worldId < 61
  ) {
    return worldId + 1;
  }

  if (
    worldId >= 62 &&
    worldId < 79
  ) {
    return worldId + 1;
  }

  return null;
}

async function moveToNextQuestion() {

  setMessage("");

  const nextIndex = current + 1;

  if (nextIndex >= questions.length) {

    const currentMapId =
  selectedWorld!;

    const currentWorldProgress =
      subNodeProgress[currentMapId] || 1;

    if (
      currentSubNode === currentWorldProgress &&
      currentWorldProgress < 3
    ) {

      const updatedProgress = {
  ...subNodeProgress,
  [currentMapId]:
    currentWorldProgress + 1,
};

setSubNodeProgress(updatedProgress);

await supabase
  .from("profiles")
  .update({
    sub_node_progress: updatedProgress,
  })
  .eq("id", currentUserId);
      setCurrentSubNode(null);
      setSelectedWorld(null);
      setCurrent(0);

    } else if (currentSubNode === 3) {
      const rewardXP = 50;
const rewardCoins = 20;
const rewardShards = 1;

setXp(prev => prev + rewardXP);
setCoins(prev => prev + rewardCoins);

setVictoryReward({
  xp: rewardXP,
  coins: rewardCoins,
  shards: rewardShards,
});

setMascotState("celebrate");

setMascotMessage(
  "🏆 Bạn đã hoàn thành World!"
);

setShowVictory(true);


      console.log("selectedWorld =", selectedWorld);
console.log("selectedSubMap =", selectedSubMap);
console.log("currentMapId =", currentMapId);

     const nextWorld =
  getNextUnlockWorld(
    currentMapId
  );
      if (
  nextWorld &&
  !unlockedWorlds.includes(nextWorld)
) {

        setUnlockedWorlds(prev => [
          ...new Set([
            ...prev,
            nextWorld,
          ]),
        ]);

        const updatedWorlds = [
  ...new Set([
    ...unlockedWorlds,
    nextWorld,
  ]),
];

setUnlockedWorlds(updatedWorlds);

await supabase
  .from("profiles")
  .update({
    unlocked_worlds:
      updatedWorlds,
  })
  .eq(
    "id",
    currentUserId
  );

        setNewWorldUnlocked(nextWorld);
        playSound("/sounds/unlock.mp3");
      }

      setSelectedWorld(null);
      setCurrentSubNode(null);
      setCurrent(0);

    } else {

      setCurrentSubNode(null);
      setSelectedWorld(null);
      setCurrent(0);
    }

  } else {

    setCurrent(nextIndex);
  }
}
    



  
  // HÀM XỬ LÝ NỘP BÀI CHẶNG 2: ĐÚNG / SAI
  const checkTrueFalseAnswer = () => {
  if (!question?.subQuestions) return;

  let correctCount = 0;

  question.subQuestions.forEach((sub: any) => {
    if (
      tfAnswers[sub.label] ===
      sub.correctAnswer
    ) {
      correctCount++;
    }
  });

  // Đúng hết
  if (
    correctCount ===
    question.subQuestions.length
  ) {
    setCorrectAnswers(prev => prev + 1);

    setXp(prev => prev + 15);

    let reward = 10;

    if (pet === "🐶") reward += 1;
    if (pet === "🐱") reward += 2;
    if (pet === "🐉") reward += 5;

    setCoins(prev => prev + reward);

    setMessage("✅ Chính xác!");

    setTimeout(() => {
      setMessage("");
      setTfAnswers({});

      const nextIndex = current + 1;

      if (nextIndex >= questions.length) {
        moveToNextQuestion();
      } else {
        setCurrent(nextIndex);
      }
    }, 1000);

  } else {

    // Sai ít nhất 1 ý
    setHearts(prev =>
      Math.max(0, prev - 1)
    );

    setMessage(
      `❌ Sai (${correctCount}/${question.subQuestions.length})`
    );

    setShowTFAnswer(true);
  }
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

  const handleNextShortQuestion = async () => {
  setShowExplanation(false);
  setShortAnswer("");
  setMessage("");

  const nextIndex = current + 1;

  if (nextIndex >= questions.length) {
    await moveToNextQuestion();
  } else {
    setCurrent(nextIndex);
  }
};

 // ==========================================
  // 5. GIAO DIỆN (Điều kiện hiển thị render)
  // ==========================================
console.log("loadingAuth =", loadingAuth);
console.log("dataLoaded =", dataLoaded);
  
console.log({
  loadingAuth,
  dataLoaded,
  currentUserId,
  isLoggedIn
});
  
  if (
  loadingAuth ||
  (isLoggedIn && !dataLoaded)
) {
  return <LoadingScreen />;
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

  startBackgroundMusic();

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

  if (showVictory) {
  return (
    <VictoryModal
      reward={victoryReward}
      onClose={() => {
        setShowVictory(false);

        setSelectedWorld(null);
        setSelectedSubMap(null);
        setCurrentSubNode(null);
        setCurrent(0);
      }}
    />
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
    const medals = ["🥇", "🥈", "🥉"];
    return (
        <main className="min-h-screen flex items-center justify-center bg-black/60">
            <div className="
bg-slate-900
text-white
rounded-3xl
p-8
w-[700px]
max-w-full
shadow-2xl
border
border-slate-700
">

                <h1 className="
text-4xl
font-bold
text-center
mb-8
text-yellow-400
">
  🏆 Bảng Xếp Hạng
</h1>

                {leaderboard.map((user, index) => (
  <div
    key={user.id}
    className="
    flex
    justify-between
    items-center
    py-4
    px-4
    rounded-xl
    mb-2
    bg-slate-800
    hover:bg-slate-700
    transition
    "
  >
    <div className="flex items-center gap-3">

      <div className="text-2xl">
        {index < 3
          ? medals[index]
          : `${index + 1}`}
      </div>

      <div>
        <div className="font-semibold">
          {user.display_name}
        </div>

        <div className="text-sm text-gray-400">
          Hạng {index + 1}
        </div>
      </div>

    </div>

    <div className="
      text-blue-400
      font-bold
      text-lg
    ">
      ⭐ {user.xp}
    </div>
  </div>
))}
                <div className="mt-6 text-center">
                    <p className="font-bold">
                        Hạng của bạn: {myRank}
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
      <button
  onClick={() => {
    if (!bgmRef.current) return;

    if (musicOn) {
      bgmRef.current.pause();
    } else {
      bgmRef.current.play();
    }

    setMusicOn(!musicOn);
  }}
  className="
    fixed
    top-4
    right-4
    z-50
    bg-black/70
    text-white
    px-4
    py-2
    rounded-xl
  "
>
  {musicOn ? "🔊" : "🔇"}
</button>
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

        <main className="w-full min-h-screen">
          <WorldSelect
            worlds={getWorlds(unlockedWorlds)}
            onSelect={(worldId) => { setSelectedSubMap(worldId); }}
            level={level}
            formulaShards={formulaShards}
            rank={rank}
            streak={streak}
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
      <div
  className="
    bg-white
    text-black
    p-6
    md:p-8
    rounded-3xl
    shadow-2xl
    w-full
    max-w-4xl
    mx-auto
  "
>
        <div className="flex justify-between items-center">
  <h1 className="text-4xl font-bold">
    🚀 Math Quest
  </h1>

  <button
    onClick={() => setMusicOn(!musicOn)}
    className="
      bg-slate-200
      hover:bg-slate-300
      px-3
      py-2
      rounded-xl
      text-xl
    "
  >
    {musicOn ? "🔊" : "🔇"}
  </button>
</div>
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

{showCorrectAnswer && (
  <div className="mt-4 bg-red-50 border-2 border-red-300 rounded-xl p-4">
    <h3 className="font-bold text-red-600">
      ❌ Đáp án đúng:
    </h3>

    <p className="text-lg font-bold text-slate-800 mt-2">
      {question?.answer}
    </p>

    {question?.explanation && (
      <div className="mt-3">
        <h4 className="font-bold text-amber-700">
          💡 Giải thích:
        </h4>

        <p className="text-slate-700 whitespace-pre-line">
          {question.explanation}
        </p>
      </div>
    )}
  </div>
)}

        <p className="text-center mt-2">
          Câu {current + 1} / {questions.length}
        </p>

        <div className="w-full bg-gray-300 rounded-full h-4 mt-3">
          <div className="bg-green-500 h-4 rounded-full transition-all" style={{ width: `${questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0}%` }} />
        </div>

       {/* Phần hiển thị nội dung câu hỏi chính */}
<div
  className="
    max-w-3xl
    mx-auto
    text-xl
    md:text-2xl
    text-center
    mt-6
    font-bold
    text-slate-800
  "
>
  <div className="whitespace-pre-line">
  <MathText text={question?.question || ""} />
</div>
</div>

{correctAnswer && (
  <div className="mt-3 text-center">
    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold">
      ✅ Đáp án đúng: {correctAnswer}
    </span>
  </div>
)}

{/* ---------------- CHẶNG 1: GIAO DIỆN TRẮC NGHIỆM ---------------- */}
{currentSubNode === 1 && (
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    {question?.options?.map((option: string | number) => (
  <button
    key={String(option)}
    onClick={() => checkAnswer(option)}
    className="
bg-white
border-2
border-slate-300
rounded-3xl
p-6
text-lg
font-bold
shadow-lg
hover:shadow-xl
hover:border-indigo-500
hover:bg-indigo-50
active:scale-95
transition-all
duration-200
min-h-[90px]
flex
items-center
justify-center
text-center
"
  >
    <div className="text-center">
  <MathText text={String(option)} />
</div>
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
          <strong className="text-indigo-600 font-bold">{sub.label}</strong> <MathText text={sub.text} />
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
      Nộp bài Đúng / Sai
    </button>
  </div>
)}
  {showTFAnswer && (
  <div className="mt-4 bg-red-50 border-2 border-red-300 rounded-xl p-4">

    <h3 className="font-bold text-red-600">
      Đáp án đúng
    </h3>

    {question?.subQuestions?.map(
      (sub: any) => (
        <div
          key={sub.label}
          className="mt-2"
        >
          <strong>
            {sub.label}
          </strong>
          : {sub.correctAnswer}
        </div>
      )
    )}

    <button
      onClick={() => {
        setShowTFAnswer(false);
        setTfAnswers({});

        const nextIndex =
          current + 1;

        if (
          nextIndex >=
          questions.length
        ) {
          moveToNextQuestion();
        } else {
          setCurrent(nextIndex);
        }
      }}
      className="
      mt-4
      w-full
      bg-blue-500
      text-white
      py-2
      rounded-xl
      "
    >
      Tiếp tục
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
          <MathText
  text={question?.explanation || ""}
/>
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

      <Mascot
  state={mascotState}
  message={mascotMessage}
/>

    </main>
  );
}
