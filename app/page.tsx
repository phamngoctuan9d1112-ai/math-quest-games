"use client";

import { useEffect, useState, useRef } from "react";
import StoryModal from "./components/StoryModal";
import confetti from "canvas-confetti";
import BattleScreen from "./components/battle/BattleScreen";
import { unlockAchievement } from "./lib/achievement";
import { trackEvent } from "./lib/analytics";
import BattleLayout from "./components/BattleUI/BattleLayout";
import XPBar from "./components/XPBar";
import { worldThemes } from "./data/worldThemes";
import { playSound } from "./lib/sound";
import { stories } from "./data/storyIndex";
import LoadingScreen from "./components/LoadingScreen";
import ChestInventory from "./components/ChestInventory";
import StatusBar from "./components/StatusBar";
import { motion } from "framer-motion";
import WorldSelect from "./components/WorldSelect";
import Mascot from "./components/Mascot";
import { APP_MODE } from "./lib/premium";
import TopBar from "./components/TopBar";
import AchievementList from "./components/AchievementList";
import TermsModal from "./components/TermsModal";
import { achievements } from "./data/achievements";
import { getWorlds } from "./data/worlds";
import { loadWorld } from "./data/questions/loader";
import Shop from "./components/Shop";
import StartScreen from "./components/StartScreen";
import Confetti from "react-confetti";
import Avatar from "./components/Avatar";
import MathText from "./components/MathText";
import PremiumModal from "./components/PremiumModal";
import { BlockMath } from "react-katex";
import Inventory from "./components/Inventory";
import SubMap from "./components/SubMap"; 
import { createBrowserClient } from '@supabase/ssr';
import ChestRoom from "./components/ChestRoom";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);



function VictoryModal({
  reward,
  chest,
  onClose,
}: {
  reward: {
    xp: number;
    coins: number;
    shards: number;
  };
  chest: string | null;
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

        {chest && (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.8 }}
    className="
      mt-6
      text-3xl
      font-black
      text-amber-500
    "
  >
    🎁 Nhận được {chest} Chest!
  </motion.div>
)}

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


  const [userName, setUserName] = useState("");
  const [started, setStarted] = useState<boolean>(false);
  const [showInventory, setShowInventory] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [pet, setPet] = useState("🥚");
  const [dailyRewardClaimed, setDailyRewardClaimed] = useState<boolean>(false);
  const [newWorldUnlocked, setNewWorldUnlocked] = useState<number | null>(null);
  const [unlockedWorlds, setUnlockedWorlds] = useState([1, 27, 62]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<number[]>([]);
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
  const [showTFAnswer, setShowTFAnswer] = useState(false);
  const [weapon, setWeapon] = useState("🪵");
  const [shieldActive, setShieldActive] = useState(false);
  const [magicStoneActive, setMagicStoneActive] = useState(false);
  const [showChestRoom, setShowChestRoom] =
useState(false);

const [shield, setShield] = useState(0);

const [scroll, setScroll] = useState(0);

const [book, setBook] = useState(0);
const [showPremiumModal, setShowPremiumModal] = useState(false);
const [magicStone, setMagicStone] = useState(0);

const [potion, setPotion] = useState(0);
const [remainingExplanations, setRemainingExplanations] = useState(10);
const [showStory, setShowStory] = useState(false);
const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
const [storyIndex, setStoryIndex] = useState(0);

const [dailyExplanationUsed, setDailyExplanationUsed] = useState(0);
const [storyData, setStoryData] = useState<any[]>([]);
const [itemUsedThisQuestion, setItemUsedThisQuestion] = useState(false);
const [storyMode, setStoryMode] = useState<"intro" | "ending">("intro");
const [chests, setChests] =
useState<any[]>([]);
  const [attacking, setAttacking] = useState(false);
  const initializedRef = useRef(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [streak, setStreak] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [message, setMessage] = useState("");
  const [shopMessage, setShopMessage] = useState("");
  const [current, setCurrent] = useState(0);
  const [showChestInventory, setShowChestInventory] =
useState(false);

const [chestItems, setChestItems] =
useState<string[]>([]);
  const [worldData, setWorldData] = useState<any>(null);
  const [showAuthModal,
setShowAuthModal] =
useState(false);
  const [showAuth,setShowAuth] =
useState(false);
  const [avatar, setAvatar] =
useState("default");
  const [formulaShards, setFormulaShards] = useState(0);
  const [showVictory, setShowVictory] =
  useState(false);

  const [newChest, setNewChest] = useState<string | null>(null);

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
 
  const [isPremium, setIsPremium] = useState(false);
const [premiumUntil, setPremiumUntil] = useState<string | null>(null);
  const [hearts, setHearts] = useState(3);
  const MAX_HEARTS = 3;
  const [showShop, setShowShop] = useState(false);
  const [inventory, setInventory] = useState<string[]>([]);
  const buyItem = (
    item: string,
    price: number
) => {

    if (coins < price) {

        showShopMessage("❌ Không đủ Coin!");

        return;
    }

    setCoins(prev => prev - price);

    switch (item) {

        case "heart":

            setHearts(prev => prev + 1);

            break;

        case "shield":

            setShield(prev => prev + 1);

            break;

        case "book":

            setBook(prev => prev + 1);

            break;

        case "scroll":

            setScroll(prev => prev + 1);

            break;

        case "magic":

            setMagicStone(prev => prev + 1);

            break;

        case "potion":

            setPotion(prev => prev + 1);

            break;

        default:

            setInventory(prev => [...prev, item]);

    }

    showShopMessage("✅ Mua thành công!");

};
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
  const [userEmail, setUserEmail] =
  useState("");
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
  const theme =
    selectedWorld
        ? worldThemes[selectedWorld]
        : worldThemes[1];
  
  // ==========================================
  // 2. BIẾN TÍNH TOÁN (Derived Variables)
  // ==========================================
  
  const level = Math.floor(xp / 50) + 1;
  
  
  let rank = "🥉 Đồng";
  if (level >= 5) rank = "🥈 Bạc";
  if (level >= 10) rank = "🥇 Vàng";
  if (level >= 20) rank = "💎 Kim Cương";
  if (level >= 30) rank = "👑 Huyền Thoại";

  

  


  async function syncData(userId: string) {

  console.log("SYNC DATA START");

  try {

    console.log(
      "LOADING PROFILE FOR",
      userId
    );

    const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", userId)
  .maybeSingle();

    console.log(
      "PROFILE DATA =",
      data
    );

    console.log("PROFILE ERROR =", JSON.stringify(error, null, 2))

    

    if (error) {
      console.error(error);
      return;
    }

    if (!data) return;

    setXp(data.xp || 0);
    setCoins(data.coins || 0);

    setUnlockedWorlds(
      data.unlocked_worlds || [1,27,62]
    );

    setSubNodeProgress(
      data.sub_node_progress || {
        1:1,
        27:1,
        62:1
      }
    );

    setStreak(data.streak || 1);

    setFormulaShards(
      data.formula_shards || 0
    );

    setAvatar(data.avatar || "default");
    setWeapon(data.weapon || "🪵");
    setPet(data.pet || "🥚");
    setHearts(data.hearts || 3);
    setShield(data.shield || 0);

setScroll(data.scroll || 0);

setBook(data.book || 0);

setMagicStone(data.magic_stone || 0);

setPotion(data.potion || 0);
setIsPremium(data.is_premium || false);

setDailyExplanationUsed(
    data.daily_explanation_used || 0
);
const today =
new Date().toISOString().split("T")[0];

if (
    data.last_explanation_date !== today
){

    await supabase
        .from("profiles")
        .update({

            daily_explanation_used: 0,

            last_explanation_date: today

        })
        .eq("id", userId);

    setDailyExplanationUsed(0);

    setRemainingExplanations(10);

}
else{

    const used =
        data.daily_explanation_used || 0;

    setDailyExplanationUsed(used);

    setRemainingExplanations(
        Math.max(0, 10 - used)
    );

}
setPremiumUntil(data.premium_until || null);

    initializedRef.current = true;

  } catch(err) {

    console.error(err);

  } finally {

    setDataLoaded(true);

  }
}

async function createProfileIfNeeded(user:any){

  
    console.log("===== CREATE PROFILE START =====");






    const { data: profile } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .maybeSingle();

console.log("PROFILE =", profile);


    if(profile?.terms_accepted){

    setShowTerms(false);

    setIsLoggedIn(true);

}else{

    setShowTerms(true);

}

    if(profile){

        if(!profile.terms_accepted){

            setShowTerms(true);

        }

        return;

    }

    console.log("===== BEFORE INSERT =====");

const {
  data: { session: insertSession },
} = await supabase.auth.getSession();

console.log("INSERT SESSION =", insertSession);
console.log("INSERT TOKEN =", insertSession?.access_token);

    const { data, error } = await supabase
  .from("profiles")
  .insert({
    id: user.id,
    display_name: user.user_metadata?.full_name ?? user.email,
    avatar_url: user.user_metadata?.avatar_url ?? "",
    xp: 0,
    coins: 0,
    hearts: 3,
    shield: 0,
scroll: 0,
book: 0,
magic_stone: 0,
potion: 0,
    is_premium: false,
    premium_until: null,
    streak: 1,
    best_streak: 1,
    formula_shards: 0,
    unlocked_worlds: [1,27,62],
    sub_node_progress: {
      1:1,
      27:1,
      62:1
    },
    terms_accepted: false
  })
  .select();

console.log("INSERT DATA =", data);
console.log("INSERT ERROR =", error);
    

    setShowTerms(true);

    console.log("SET SHOW TERMS TRUE");

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

async function createChest(type: string) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase
    .from("chests")
    .insert({
      user_id: user.id,
      type,
      opened: false,
    });

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

async function loadChests() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("chests")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  setChests(data || []);
}
async function activatePremium() {

    if (!currentUserId) return;

   await supabase
.from("profiles")
.update({
    is_premium: true,
    premium_until: null
})
.eq("id", currentUserId);

    setIsPremium(true);

    setShowPremiumModal(false);

}

async function consumeExplanation() {
  const today =
new Date().toISOString().split("T")[0];

const {
    data
} = await supabase
.from("profiles")
.select(
"last_explanation_date"
)
.eq("id", currentUserId)
.single();
if (data?.last_explanation_date !== today) {

    setDailyExplanationUsed(0);

    setRemainingExplanations(10);

}

    if (isPremium) {
    setShowPremiumModal(false);
    return true;
}

    if (remainingExplanations <= 0){

        setShowPremiumModal(true);

        return false;

    }

    const newUsed =
        dailyExplanationUsed + 1;

    setDailyExplanationUsed(newUsed);

    setRemainingExplanations(
        10 - newUsed
    );

    await supabase
        .from("profiles")
        .update({

            daily_explanation_used:
            newUsed,

            last_explanation_date:
            new Date()
            .toISOString()
            .split("T")[0]

        })
        .eq("id", currentUserId);

    return true;

}

async function saveProgress() {

  console.log("SAVE PROGRESS");

console.log({
  currentUserId,
  xp,
  coins,
  unlockedWorlds,
});

console.log("SAVE AVATAR =", avatar);

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
    shield,
scroll,
book,
magic_stone: magicStone,
potion,
    is_premium: isPremium,
    daily_explanation_used:
dailyExplanationUsed,
    premium_until: premiumUntil,
  })
  
  .eq("id", user.id);
}



async function loadAchievements() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("player_achievements")
    .select("achievement_id")
    .eq("user_id", user.id);

  setUnlockedAchievements(
    data?.map(
      (a) => a.achievement_id
    ) || []
  );
}

async function openChest(chest: any) {

  if (chest.opened) return;

  let reward = "";

  const random = Math.random();

if(random<0.2){

reward="shield";

}
else if(random<0.4){

reward="scroll";

}
else if(random<0.6){

reward="book";

}
else if(random<0.8){

reward="magicStone";

}
else{

reward="potion";

}

if(reward==="shield"){

setShield(prev=>prev+1);

}

if(reward==="scroll"){

setScroll(prev=>prev+1);

}

if(reward==="book"){

setBook(prev=>prev+1);

}

if(reward==="magicStone"){

setMagicStone(prev=>prev+1);

}

if(reward==="potion"){

setPotion(prev=>prev+1);

}
  await supabase
    .from("chests")
    .update({
      opened: true,
      reward
    })
    .eq("id", chest.id);

    

  alert("🎉 Bạn nhận được: " + reward);

  await loadChests();


}

async function checkAchievements(
  currentXP: number,
  currentWorld: number
) {
  for (const achievement of achievements) {

    // Achievement theo XP
    if (
      achievement.xpRequired &&
      currentXP >= achievement.xpRequired
    ) {
      await unlockAchievement(
        achievement.id
      );
    }

    // Achievement theo World
    if (
      achievement.condition &&
      achievement.condition(currentWorld)
    ) {
      await unlockAchievement(
        achievement.id
      );
    }
  }
}

const questions = (() => {

    if (
        !worldData ||
        currentSubNode === null
    ) {

        return [];

    }

    if (currentSubNode === 1)
        return worldData.stage1 || [];

    if (currentSubNode === 2)
        return worldData.stage2 || [];

    if (currentSubNode === 3)
        return worldData.stage3 || [];

    return [];

})();



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

    if (selectedWorld === null) {
        setWorldData(null);
        return;
    }

    const world = selectedWorld;

    async function load() {
        try {

            const data = await loadWorld(world);

            setWorldData(data);

        } catch (err) {
            console.error(err);
        }
    }

    load();

}, [selectedWorld]);





useEffect(() => {
  if (!currentUserId) return;

  const saved = localStorage.getItem(
    `game_state_${currentUserId}`
  );

  if (!saved) return;

  try {
    const state = JSON.parse(saved);

    setSelectedWorld(
      state.selectedWorld
    );

    setSelectedSubMap(
      state.selectedSubMap
    );

    setCurrentSubNode(
      state.currentSubNode
    );

    setCurrent(
      state.current || 0
    );

  } catch (err) {
    console.error(err);
  }

}, [currentUserId]);
const prevLevel = useRef(level);

useEffect(() => {
  if (currentUserId) {
    loadAchievements();
  }
}, [currentUserId]);

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
  console.log({
    loadingAuth,
    dataLoaded,
    isLoggedIn,
    currentUserId
  });
}, [
  loadingAuth,
  dataLoaded,
  isLoggedIn,
  currentUserId
]);

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

  if (!currentUserId) return;

  syncData(currentUserId);

}, [currentUserId]);

  useEffect(() => {
  const checkUser = async () => {

    console.log("========== CHECK USER START ==========");

  const {
  data: { session },
} = await supabase.auth.getSession();



console.log("SESSION =", session);
console.log("ACCESS TOKEN =", session?.access_token);
console.log("USER FROM SESSION =", session?.user?.id);
const user = session?.user;
console.log("GET USER =", user);


  console.log("===== CURRENT USER =====");
console.log(user);
console.log("EMAIL =", user?.email);
console.log("ID =", user?.id);
console.log("========================");
  
  console.log("USER =", user);

  if (user) {
    await createProfileIfNeeded(user);

    console.log("CREATE PROFILE FINISHED");
    const { data: profile } =
await supabase
.from("profiles")
.select("terms_accepted")
.eq("id",user.id)
.single();
console.log(profile);

    setUserEmail(user.email || "");
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

     



  

  

console.log(profile)


let finalProfile = profile;



if (!finalProfile) {

    console.log("Profile chưa tồn tại");

} else {

    console.log(
        "terms =",
        finalProfile.terms_accepted
    );

    if (finalProfile.terms_accepted) {

        setShowTerms(false);
        setIsLoggedIn(true);

    } else {

        setShowTerms(true);

    }
}



     
      setDataLoaded(true);
    }
     


    setLoadingAuth(false);
  };

  checkUser();

  console.log("CHECK USER START");

  const {
  data: { subscription },
} = 
supabase.auth.onAuthStateChange(async (event, session) => {

    console.log("AUTH EVENT =", event);

    if (session?.user) {

        console.log("SIGNED USER =", session.user.id);

        console.log("BEFORE CREATE PROFILE");

        createProfileIfNeeded(session.user);

        console.log("AFTER CREATE PROFILE");

        setCurrentUserId(session.user.id);

        setUserEmail(session.user.email ?? "");

        setIsLoggedIn(true);
    }

    if(event==="SIGNED_OUT"){

        setCurrentUserId(null);

        setIsLoggedIn(false);

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

  if (!initializedRef.current)
    return;

  saveProgress();

}, [
  xp,
  coins,
  unlockedWorlds,
  avatar,
  weapon,
  pet,
  hearts,
potion,
scroll,
book,
magicStone,
potion,
  isPremium,
  premiumUntil,
  dailyExplanationUsed
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

function useShield() {
  

    if (shield <= 0) return;

    if (itemUsedThisQuestion) {

    setMessage("⚠ Bạn đã dùng vật phẩm ở câu này!");

    return;

}

    if (shieldActive) return;

    setShield(prev => prev - 1);

    setShieldActive(true);
    setItemUsedThisQuestion(true);

    setMessage("🛡️ Khiên đã được kích hoạt!");

}

function usePotion() {

    if (potion <= 0) return;

    if (itemUsedThisQuestion) {

    setMessage("⚠ Đã dùng vật phẩm ở câu này!");

    return false;

}

    if (hearts >= MAX_HEARTS) {


        setMessage("❤️ Máu đã đầy!");

        return;
    }

    setPotion(prev => prev - 1);

    setHearts(MAX_HEARTS);

    setItemUsedThisQuestion(true);

    setMessage("🧪 Hồi đầy máu!");

}

function useScroll() {

    if (scroll <= 0) return false;

    if (itemUsedThisQuestion) {

    setMessage("⚠ Đã dùng vật phẩm ở câu này!");

    return false;

}

    if (!question?.options) return false;

    setScroll(prev => prev - 1);

    const wrongIndexes = question.options
        .map((_: any, index: number) => index)
        .filter((index: number) => question.options[index] !== question.answer);

    const shuffled = [...wrongIndexes].sort(() => Math.random() - 0.5);

    setHiddenOptions(shuffled.slice(0, 2));
    setItemUsedThisQuestion(true);

    setMessage("📜 Đã loại bỏ 2 đáp án sai!");

    return true;
}

function useBook() {

    if (book <= 0) return false;

    setBook(prev => prev - 1);

    setMessage("📖 Sách gợi ý đã được sử dụng!");

    return true;
}

function useMagicStone() {

    if (magicStone <= 0) return false;

    if (itemUsedThisQuestion) {

    setMessage("⚠ Đã dùng vật phẩm ở câu này!");

    return false;

}

    if (magicStoneActive) return false;

    setMagicStone(prev => prev - 1);

    setMagicStoneActive(true);

    setItemUsedThisQuestion(true);

    setMessage("💎 Đá phép đã kích hoạt!");

    return true;
}

  async function checkAnswer(value: number | string) {

  const isCorrect = value === question?.answer;

  if (isCorrect) {
    await trackEvent(
  "question_correct",
  selectedWorld || undefined
);
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

await checkAchievements(
  newXP,
  selectedWorld || 0
);

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
    await trackEvent(
  "question_wrong",
  selectedWorld || undefined
);
    playSound("/sounds/wrong.mp3");

    setMascotState("sad");

    setMascotMessage(
      "💡 Đọc kỹ đề nhé!"
    );

  setTimeout(() => {
  setMascotState("idle");
  setMascotMessage("");
  }, 2000);

 if (shieldActive) {

    setShieldActive(false);

    setMessage("🛡️ Khiên đã bảo vệ bạn!");

}
else if (magicStoneActive) {

    setMagicStoneActive(false);

    setMessage("💎 Đá phép đã bảo vệ bạn!");

}
else {

    setHearts(prev => Math.max(0, prev - 1));

}
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

  setHiddenOptions([]);

  setItemUsedThisQuestion(false);

setShieldActive(false);

setMagicStoneActive(false);

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

await trackEvent(
  "world_complete",
  selectedWorld || undefined
);

await checkAchievements(
  xp,
  selectedWorld || 0
);

setShowVictory(true);

setStoryMode("ending");

setStoryData(
    stories[`end_${selectedWorld}`] || []
);

setStoryIndex(0);



const random = Math.random();

if (random < 0.25) {

    await createChest("bronze");

    setNewChest("Bronze");

}


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

   if (shieldActive) {

    setShieldActive(false);

    setMessage("🛡️ Khiên bảo vệ bạn!");

} else {

    setHearts(prev => Math.max(0, prev - 1));

}
    setMessage(
      `❌ Sai (${correctCount}/${question.subQuestions.length})`
    );

    setShowTFAnswer(true);
  }
};

    

  // HÀM XỬ LÝ NỘP BÀI CHẶNG 3: TỰ LUẬN NGẮN
  const checkShortAnswer = async () => {
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
   if (shieldActive) {

    setShieldActive(false);

    setMessage("🛡️ Khiên đã bảo vệ bạn!");

} else {

    setHearts(prev => Math.max(0, prev - 1));

}
      setMessage("❌ Chưa chính xác!");
    }
    const canShow =
await consumeExplanation();

if(canShow){

    setShowExplanation(true);

}
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

  console.log("showTerms =", showTerms);
console.log("isLoggedIn =", isLoggedIn);
console.log("loadingAuth =", loadingAuth);
console.log("dataLoaded =", dataLoaded);

if (showTerms) {
  return (
    <TermsModal
      onAccept={async () => {

        if (!currentUserId) return;

        const { error } = await supabase
.from("profiles")
.update({
    terms_accepted: true,
})
.eq("id", currentUserId);

console.log(error);

const { data } = await supabase
.from("profiles")
.select("terms_accepted")
.eq("id", currentUserId)
.single();

console.log(data);

setShowTerms(false);
setIsLoggedIn(true);
      }}
    />
  );
}



  if (!started && !isLoggedIn) {
  return (
    <>
      <StartScreen
        onStart={() =>
          setShowAuthModal(true)
        }
        onLogin={onLogin}
        currentUserId={currentUserId}
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
      />

      
    </>
  );
}

if (showChestInventory) {
  return (
    <ChestInventory
      items={chestItems}
      onClose={() => setShowChestInventory(false)}
    />
  );
}

if (showChestRoom) {

  return (

    <ChestRoom
      chests={chests}
     onOpen={openChest}
      onClose={() => setShowChestRoom(false)}
    />

  );

}

if (showStory) {

    return (

        <StoryModal

            story={storyData[storyIndex]}

            onNext={() => {

                // còn đoạn truyện tiếp theo
                if (storyIndex < storyData.length - 1) {

                    setStoryIndex(prev => prev + 1);

                    return;

                }

                // đóng Story
                setShowStory(false);

                // Story mở đầu
                if (storyMode === "intro") {
                  setShowStory(false);

                    return;

                }

                // Story kết thúc
                setSelectedWorld(null);

                setSelectedSubMap(null);

                setCurrentSubNode(null);

                setCurrent(0);

            }}

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
relative

w-[980px]
max-w-[95vw]

max-h-[92vh]
overflow-y-auto

rounded-[32px]

bg-[#081223]

border
border-cyan-400/20

shadow-[0_0_60px_rgba(0,180,255,.15)]

p-8
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
    chest={newChest}
    reward={victoryReward}
   onClose={() => {

    setShowVictory(false);

    setNewChest(null);

    setShowStory(true);

}}
/>
  );
}

  if (gameCompleted) {
    return (
      <main
  className="relative min-h-screen overflow-hidden"
  style={{
    backgroundImage: `url(${theme.bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/45" />
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
    setSelectedSubMap(null);
   // setSelectedWorld(null);
   // setCurrentSubNode(null);
   // setCurrent(0);
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
              inventory={inventory}
             buyItem={buyItem}
              onClose={() => setShowShop(false)}
               onBuyPremium={() => setShowPremiumModal(true)}
            />
          </div>
        )}

        
        <main className="w-full min-h-screen">
          <WorldSelect
          key={avatar}
          avatar={avatar}
            worlds={getWorlds(unlockedWorlds)}
           onSelect={(worldId) => {

            setStoryMode("intro");

    setSelectedSubMap(worldId);

    setStoryData(
        stories[String(worldId)] || []
    );

    setStoryIndex(0);

    setShowStory(true);

}}
            level={level}
             dailyProgress={dailyProgress}

    dailyRewardClaimed={dailyRewardClaimed}

    currentUserId={currentUserId}

    xp={xp}

    setCoins={setCoins}

    setDailyRewardClaimed={setDailyRewardClaimed}

    setMessage={setMessage}
            formulaShards={formulaShards}
            onChestInventory={() =>
    setShowChestInventory(true)
}
            rank={rank}
            onChest={() => {

    loadChests();

    setShowChestRoom(true);

}}
            streak={streak}
            coins={coins}
            email={userEmail}
            userName={userName}
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


console.log("CURRENT AVATAR =", avatar);

 return (
<>
  <PremiumModal
    open={showPremiumModal}
    isPremium={isPremium}
    onClose={() => setShowPremiumModal(false)}
    onActivate={activatePremium}
/>
 

<BattleScreen
selectedWorld={selectedWorld}

shield={shield}
scroll={scroll}
book={book}
magicStone={magicStone}
potion={potion}
useShield={useShield}
useScroll={useScroll}
useBook={useBook}
useMagicStone={useMagicStone}
usePotion={usePotion}
setShield={setShield}
setScroll={setScroll}
setBook={setBook}
setMagicStone={setMagicStone}
setPotion={setPotion}

currentSubNode={currentSubNode}

setSelectedSubMap={setSelectedSubMap}

setCurrentSubNode={setCurrentSubNode}
hearts={hearts}
setHearts={setHearts}
    coins={coins}
    xp={xp}

    message={message}

    mascotState={mascotState}
mascotMessage={mascotMessage}

showCorrectAnswer={showCorrectAnswer} 

    dailyProgress={dailyProgress}

dailyRewardClaimed={dailyRewardClaimed}

currentUserId={currentUserId}
showExplanation={showExplanation}

setShowExplanation={setShowExplanation}
setCoins={setCoins}

setDailyRewardClaimed={setDailyRewardClaimed}

setMessage={setMessage}

    musicOn={musicOn}
    setMusicOn={setMusicOn}

    question={question}
    questions={questions}
    current={current}

    tfAnswers={tfAnswers}
    setTfAnswers={setTfAnswers}
    pet={pet}

options={question?.options ?? []}

hiddenOptions={hiddenOptions}

onAnswer={checkAnswer}
    checkTrueFalseAnswer={checkTrueFalseAnswer}

    showTFAnswer={showTFAnswer}
    setShowTFAnswer={setShowTFAnswer}

    setCurrent={setCurrent}

    moveToNextQuestion={moveToNextQuestion}

  

shortAnswer={shortAnswer}

setShortAnswer={setShortAnswer}


checkShortAnswer={checkShortAnswer}

handleNextShortQuestion={handleNextShortQuestion}

/>

</>

);
}
