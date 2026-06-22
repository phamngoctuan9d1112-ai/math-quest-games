"use client";

import { useState, useEffect } from "react";

import StartScreen from "./components/StartScreen";
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

export default function Home() {
  const [started, setStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
const [pet, setPet] = useState("🥚");
const [dailyRewardClaimed, setDailyRewardClaimed] =
  useState(false);
  const [newWorldUnlocked, setNewWorldUnlocked] = useState<number | null>(null);
  const [unlockedWorlds, setUnlockedWorlds] = useState([1]);
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
  const [shuffledQuestions, setShuffledQuestions] =
  useState<any[]>([]);
  const [bossVictory, setBossVictory] = useState(false);
  const [bossHP, setBossHP] = useState(0);
  const [maxBossHP, setMaxBossHP] = useState(0);

  const [weapon, setWeapon] =
  useState("🪵");

const [attacking, setAttacking] =
  useState(false);

const [bossAttack, setBossAttack] =
  useState(false);

const [bossHit, setBossHit] =
  useState(false);
  const [message, setMessage] = useState("");
  const [shopMessage, setShopMessage] =
  useState("");
  function showShopMessage(
  text: string
) {

  setShopMessage(text);

  setTimeout(() => {

    setShopMessage("");

  }, 2000);

}
  const [current, setCurrent] = useState(0);
  const [avatar, setAvatar] = useState("🧑");
  const [currentBoss, setCurrentBoss] =
  useState<any>(null);
  const [xp, setXp] = useState(0);

  const [coins, setCoins] = useState(0);
  const [hearts, setHearts] = useState(3);
  
  const [showShop, setShowShop] = useState(false);
const [inventory, setInventory] =
  useState<string[]>([]);
  const [gameCompleted, setGameCompleted] =
  useState(false);
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

const totalDamage =
  petDamage + weaponDamage;

let rank = "🥉 Đồng";

if (level >= 5) rank = "🥈 Bạc";

if (level >= 10) rank = "🥇 Vàng";

if (level >= 20) rank = "💎 Kim Cương";

if (level >= 30) rank = "👑 Huyền Thoại";

  const [showAchievements, setShowAchievements] =
    useState(false);
     const dailyCompleted =
  correctAnswers >= 5 && xp >= 100;
  const questions =
  shuffledQuestions.length > 0
    ? shuffledQuestions
    : selectedWorld
    ? worldQuestions[
        selectedWorld as keyof typeof worldQuestions
      ] || []
    : [];
    function shuffleArray<T>(array: T[]) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}
function shuffleQuestion(question: any) {
  return {
    ...question,
    options: shuffleArray(
      question.options
    ),
  };
}
    useEffect(() => {

  if (
    selectedWorld &&
    current >= questions.length &&
    !currentBoss
  ) {

    const bossList =
      bosses[
        selectedWorld as keyof typeof bosses
      ];

    const randomBoss =
      bossList[
        Math.floor(
          Math.random() * bossList.length
        )
      ];

    setCurrentBoss(randomBoss);
    
  }

}, [
  current,
  selectedWorld,
  currentBoss,
  questions.length,
]);

useEffect(() => {

  const today =
    new Date().toDateString();

  const lastLogin =
    localStorage.getItem(
      "lastLogin"
    );

  if (lastLogin !== today) {

    setCoins(prev => prev + 50);

    localStorage.setItem(
      "lastLogin",
      today
    );

    setMessage(
      "🎁 Đăng nhập nhận 50 Coin"
    );
  }

}, []);

  // Load Save

  useEffect(() => {

  const savedBossHP =
    localStorage.getItem("bossHP");

  if (savedBossHP) {
    setBossHP(Number(savedBossHP));
  }

  const savedHearts =
    localStorage.getItem("hearts");

  if (savedHearts) {
    setHearts(Number(savedHearts));
  }

}, []);

  useEffect(() => {

  localStorage.setItem(
    "bossHP",
    bossHP.toString()
  );

}, [bossHP]);

  useEffect(() => {

  localStorage.setItem(
    "hearts",
    hearts.toString()
  );

}, [hearts]);

useEffect(() => {

  localStorage.setItem(
    "current",
    current.toString()
  );

}, [current]);

useEffect(() => {

  if (selectedWorld) {

    localStorage.setItem(
      "selectedWorld",
      selectedWorld.toString()
    );

  }

}, [selectedWorld]);

  useEffect(() => {
    const savedXP = localStorage.getItem("xp");
    const savedCoins = localStorage.getItem("coins");
    const savedAvatar = localStorage.getItem("avatar");
    

    if (savedXP) {
      setXp(Number(savedXP));
    }

    if (savedCoins) {
      setCoins(Number(savedCoins));
    }

    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);
 
  useEffect(() => {
  const saved =
    localStorage.getItem("inventory");

  if (saved) {
    setInventory(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  if (!selectedWorld) return;

  const bossList =
    bosses[
      selectedWorld as keyof typeof bosses
    ];

  if (!bossList) return;

  const randomBoss =
    bossList[
      Math.floor(
        Math.random() * bossList.length
      )
    ];

  setCurrentBoss(randomBoss);

}, [selectedWorld]);
useEffect(() => {
  const saved = localStorage.getItem("unlockedWorlds");

  if (saved) {
    setUnlockedWorlds(JSON.parse(saved));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "inventory",
    JSON.stringify(inventory)
  );
}, [inventory]);
useEffect(() => {
  localStorage.setItem(
    "unlockedWorlds",
    JSON.stringify(unlockedWorlds)
  );
}, [unlockedWorlds]);
  // Save XP
  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
  }, [xp]);
useEffect(() => {
  const savedPet = localStorage.getItem("pet");

  if (savedPet) {
    setPet(savedPet);
  }
}, []);
useEffect(() => {
  localStorage.setItem("pet", pet);
}, [pet]);
  // Save Coins
  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
  }, [coins]);

  useEffect(() => {
  localStorage.setItem(
    "weapon",
    weapon
  );
}, [weapon]);

useEffect(() => {

  const saved =
    localStorage.getItem(
      "weapon"
    );

  if(saved){
    setWeapon(saved);
  }

}, []);

  useEffect(() => {
    localStorage.setItem("avatar", avatar);
  }, [avatar]);

  
    if (showAchievements) {
      return (
        <main className="min-h-screen flex items-center justify-center">
          <div
  className="
    bg-white
    p-8
    rounded-3xl
    shadow-2xl
    w-[700px]
    max-w-full
    max-h-[80vh]
    overflow-y-auto
  "
>

            <TopBar
  hearts={hearts}
  coins={coins}
  xp={xp}
  level={level}
/>

            <AchievementList
              achievements={achievements}
              xp={xp}
            />

            <button
              onClick={() => setShowAchievements(false)}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-xl"
            >
              Đóng
            </button>

          </div>
        </main>
      );
    }

if (gameCompleted) {
  return (
    <main
  className="
    h-[90vh]
    flex
    items-center
    justify-center
    p-6
  "
>
      <h1 className="text-6xl font-bold">
        👑🏆 CHÚC MỪNG!
      </h1>

      <p className="text-3xl">
        Bạn đã hoàn thành
      </p>

      <p className="text-5xl font-bold">
        Math Quest
      </p>

      <p className="text-2xl">
        🎉 Đánh bại Final Boss
      </p>

      <p className="text-xl">
        ⭐ +500 XP
      </p>

      <p className="text-xl">
        🪙 +1000 Coin
      </p>

      <button
        onClick={() => {
          setGameCompleted(false);

          setSelectedWorld(null);

          setCurrent(0);

          setHearts(3);
        }}
        className="
        bg-white
        text-black
        px-6
        py-3
        rounded-xl
        font-bold
        "
      >
        🔄 Chơi lại
      </button>
    </main>
  );
}

if (newWorldUnlocked) {
  return (
    <main className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-gradient-to-br
      from-purple-700
      via-blue-600
      to-cyan-500
      text-white
    ">

      <div className="text-8xl animate-bounce">
        🔓
      </div>

      <h1 className="text-6xl font-bold mt-4">
        World Mới!
      </h1>

      <p className="text-3xl mt-4">
        🌍 World { newWorldUnlocked}  đã được mở khóa
      </p>

      <button
        onClick={() => {
          setNewWorldUnlocked(null);
          setBossVictory(true);
        }}
        className="
          mt-8
          bg-yellow-500
          px-8
          py-4
          rounded-xl
          text-xl
          font-bold
        "
      >
        Tiếp tục
      </button>

    </main>
  );
}
    if (bossVictory) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="text-5xl font-bold">
        🏆 Đánh Bại Boss!
      </h1>

      <p className="text-2xl">
        +50 XP
      </p>

      <p className="text-2xl">
        +30 Coin
      </p>

      <button
        onClick={() => {
  setBossVictory(false);

  setCurrent(0);

  setCurrentBoss(null);

  setBossHP(0);

  setMaxBossHP(0);

  setSelectedWorld(null);
}}
        className="bg-green-500 text-white px-6 py-3 rounded-xl"
      >
        Tiếp tục
      </button>

    </main>
  );
} 

    // Start Screen
    if (!started) {
      return (
        <StartScreen
          onStart={() => setStarted(true)}
        />
      );
    }

    // World Select
    if (selectedWorld === null) {
  return (
    <>
{shopMessage && (
  <div
    className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      bg-green-500
      text-white
      px-6
      py-3
      rounded-xl
      font-bold
      shadow-xl
      animate-bounce
      z-[999]
    "
  >
    {shopMessage}
  </div>
)}

{showShop && (
  <div
    className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      overflow-y-auto
      z-50
    "
  >
   <Shop
  coins={coins}

  onBuyHeart={() => {
    if (coins >= 20) {
      setCoins(prev => prev - 20);
      setHearts(prev => prev + 1);

      showShopMessage(
        "❤️ Mua tim thành công!"
      );
    } else {
      showShopMessage(
        "❌ Không đủ Coin!"
      );
    }
  }}

  onBuyDog={() => {
    if (coins >= 100) {
      setCoins(prev => prev - 100);

      setPet("🐶");

      setInventory(prev => [
        ...prev,
        "🐶"
      ]);

      showShopMessage(
        "🐶 Đã mua Chó Toán Học!"
      );
    }
  }}

  onBuyCat={() => {
    if (coins >= 200) {
      setCoins(prev => prev - 200);

      setPet("🐱");

      setInventory(prev => [
        ...prev,
        "🐱"
      ]);

      showShopMessage(
        "🐱 Đã mua Mèo Toán Học!"
      );
    }
  }}

  onBuyDragonPet={() => {
    if (coins >= 500) {
      setCoins(prev => prev - 500);

      setPet("🐉");

      setInventory(prev => [
        ...prev,
        "🐉"
      ]);

      showShopMessage(
        "🐉 Đã mua Rồng Toán Học!"
      );
    }
  }}

  onBuyWizard={() => {
    if (coins >= 50) {
      setCoins(prev => prev - 50);

      setAvatar("🧙");

      showShopMessage(
        "🧙 Đã mua Pháp Sư!"
      );
    }
  }}

  onBuyHero={() => {
    if (coins >= 100) {
      setCoins(prev => prev - 100);

      setAvatar("🦸");

      showShopMessage(
        "🦸 Đã mua Siêu Anh Hùng!"
      );
    }
  }}

  onBuyDragon={() => {
    if (coins >= 200) {
      setCoins(prev => prev - 200);

      setAvatar("🐉");

      showShopMessage(
        "🐉 Đã mở khóa Avatar Rồng!"
      );
    }
  }}

  onBuyKing={() => {
    if (coins >= 500) {
      setCoins(prev => prev - 500);

      setAvatar("👑");

      showShopMessage(
        "👑 Đã mở khóa Vua Toán!"
      );
    }
  }}

  onClose={() => setShowShop(false)}

/>
  </div>
)}

   <main
  className="
    relative
    min-h-screen
    bg-black
    text-white
    flex
    flex-col
    items-center
    p-8
  "
>
<div className="absolute top-5 right-5 flex gap-3">

  <button
    onClick={() => setShowAchievements(true)}
    className="
      bg-orange-500
      hover:bg-orange-600
      px-4
      py-2
      rounded-xl
      font-bold
      text-white
    "
  >
    🏆 Thành Tựu
  </button>

  <button
    onClick={() => setShowShop(true)}
    className="
      bg-yellow-500
      hover:bg-yellow-600
      px-4
      py-2
      rounded-xl
      font-bold
      text-white
    "
  >
    🛒 Shop
  </button>

</div>

      <h1 className="text-5xl font-bold mb-8">
        🌍 Chọn Thế Giới
      </h1>

      {/* Thông tin người chơi */}
      <div className="bg-gray-900 p-6 rounded-2xl w-[350px] mb-8">

        <div className="text-center text-6xl">
          {avatar}
        </div>

        <h2 className="
  text-4xl
  font-bold
  text-center
  mt-8
">
          {rank}
        </h2>

        <p className="text-center">
          ⭐ Level {level}
        </p>

        <p className="text-center">
          XP: {xp}
        </p>

        <p className="text-center">
          🪙 Coin: {coins}
        </p>

        <p className="text-center">
          🐾 Pet: {pet}
        </p>

      </div>
      


      {/* Danh sách World */}
      <WorldSelect
  worlds={getWorlds(unlockedWorlds)}

  level={level}
  rank={rank}
  coins={coins}

  onShop={() =>
    setShowShop(true)
  }

  onAchievements={() =>
    setShowAchievements(true)
  }

 onSelect={(id) => {

  const questions =
    worldQuestions[
      id as keyof typeof worldQuestions
    ] || [];

  const shuffled =
    shuffleArray(
      questions.map(
        shuffleQuestion
      )
    );

  setShuffledQuestions(
    shuffled
  );

  setCurrent(0);

  setSelectedWorld(id);

  setCurrentBoss(null);

  setHearts(3);

  let hp = id + 2;

  if (id >= 10)
    hp = id + 5;

  if (id >= 15)
    hp = id + 8;

  if (id === 20)
    hp = 50;

  setBossHP(hp);

  setMaxBossHP(hp);

  setBossVictory(false);

  setMessage("");
}}
/>

    </main>

    </>
  );
}
    


    // World chưa có dữ liệu
    if (questions.length === 0) {
      return (
        <main className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            🚧 World này chưa có câu hỏi
          </h1>
        </main>
      );
    }

    // Game Over
    if (hearts <= 0) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold">
            💀 Game Over
          </h1>
          <p className="text-2xl font-bold text-red-500">
  ❤️ Boss HP: {bossHP}
</p>

          <p>⭐ XP: {xp}</p>
          <p>🪙 Coin: {coins}</p>

          <button
  onClick={() => {
    setCurrent(0);
    setHearts(3);
    setSelectedWorld(null);
  }}
  className="bg-red-500 text-white px-6 py-3 rounded-xl"
>
  Chơi lại
</button>
        </main>
      );
    }

    



if (
  current >= questions.length &&
  currentBoss
) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">

      <h1 className="text-5xl font-bold">
        👹 BOSS WORLD {selectedWorld}
      </h1>

      <div className="w-[400px]">

        <p className="font-bold">
          ❤️ {bossHP}/{maxBossHP}
        </p>

        <div className="bg-gray-300 h-6 rounded-full">

          <div
            className="bg-red-500 h-6 rounded-full transition-all"
            style={{
              width: `${
                (bossHP / maxBossHP) * 100
              }%`,
            }}
          />

        </div>

      </div>

      <p className="text-2xl">
        {currentBoss.question}
      </p>

      <div
        className="
          relative
          w-[800px]
          h-[250px]
          border
          rounded-xl
          bg-green-100
          overflow-hidden
        "
      >

        <div
          className={`
            absolute
            bottom-5
            text-7xl
            transition-all
            duration-500
            ${
              attacking
                ? "left-[500px]"
                : "left-[50px]"
            }
          `}
        >
          🧍⚔️
        </div>

        <div
          className={`
            absolute
            bottom-5
            text-7xl
            transition-all
            duration-500
            ${
              bossAttack
                ? "right-[500px]"
                : "right-[50px]"
            }
          `}
        >
          {
bossHP > maxBossHP * 0.7
? "👹"
: bossHP > maxBossHP * 0.3
? "👺"
: "😈"
}
        </div>

      </div>

      {bossHit && (
        <p className="text-red-500 font-bold animate-bounce">
          -{petDamage} HP
        </p>
      )}

      <div className="grid gap-3">

        {currentBoss.options.map(
          (option: any) => (
            <button
              key={String(option)}
              className="bg-red-500 text-white px-6 py-3 rounded-xl"
              onClick={() => {

                if (option === currentBoss.answer) {

  setAttacking(true);

  setTimeout(() => {

    const newHP =
      bossHP - totalDamage;

    setBossHP(newHP);

    if (newHP > 0) {

      const bossList =
        bosses[
          selectedWorld as keyof typeof bosses
        ];

      const randomBoss =
        bossList[
          Math.floor(
            Math.random() *
            bossList.length
          )
        ];

      setCurrentBoss(randomBoss);
    }

    setBossHit(true);

    setAttacking(false);

    setTimeout(() => {
      setBossHit(false);
    }, 300);

    if (newHP <= 0) {

      if (selectedWorld === 20) {

        setXp(prev => prev + 500);
        setCoins(prev => prev + 1000);

        setGameCompleted(true);

      } else {

        const nextWorld =
          selectedWorld + 1;

        if (
          nextWorld <=
          Object.keys(
            worldQuestions
          ).length
        ) {

          setUnlockedWorlds(prev => [
            ...new Set([
              ...prev,
              nextWorld,
            ]),
          ]);

          setNewWorldUnlocked(
            nextWorld
          );
        }

        setBossVictory(true);
      }

      setCurrentBoss(null);
    }

  }, 500);

                
                } else {

                  setBossAttack(
                    true
                  );

                  setTimeout(() => {

                    setHearts(
                      prev =>
                        prev - 1
                    );

                    setBossAttack(
                      false
                    );

                  }, 500);

                }

              }}
            >
              {option}
            </button>
          )
        )}

      </div>

    </main>
  );
}



   const question =
  current < questions.length
    ? questions[current]
    : null;
  
  if (!question && current < questions.length) {
  return (
    <div className="p-10">
      Loading...
    </div>
  );
}

    console.log(
  "current",
  current,
  "questions.length",
  questions.length
);

    const progress =
  questions.length > 0
    ? ((current + 1) / questions.length) * 100
    : 0;
    function checkAnswer(value: number | string) {
  if (value === question?.answer) {

    setCorrectAnswers(prev => prev + 1);

    setXp(prev => prev + 10);

    let reward = 5;

    if (pet === "🐶") reward = 6;
    if (pet === "🐱") reward = 7;
    if (pet === "🐉") reward = 10;

    setCoins(prev => prev + reward);

    setMessage("✅ Chính xác!");

  } else {

    setHearts(prev => prev - 1);

    setMessage("❌ Sai!");

  }

  setTimeout(() => {
    setMessage("");
  }, 1200);

  setCurrent(prev => prev + 1);
}

  


    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">

        <div className="bg-white text-black p-8 rounded-3xl shadow-2xl w-[600px] max-w-full">

          <h1 className="text-4xl font-bold text-center">
            🚀 Math Quest
          </h1>
          

<p className="text-center font-bold">
  Pet Đồng Hành
</p>

<p className="text-center text-sm text-gray-500">
  {pet === "🐶" && "+1 Coin mỗi câu"}
  {pet === "🐱" && "+2 Coin mỗi câu"}
  {pet === "🐉" && "+5 Coin mỗi câu"}
</p>

          
<p>
⚔️ Damage: {totalDamage}
</p>

          <div className="mt-4">
            <StatusBar
              hearts={hearts}
              coins={coins}
              xp={xp}
            />
            <div className="mt-4 p-4 border rounded-xl">

  <h2 className="font-bold">
    🎯 Daily Quest
  </h2>

  <p>
    {correctAnswers >= 5 ? "✅" : "⬜"}
    Trả lời đúng 5 câu
  </p>

  <p>
    {xp >= 100 ? "✅" : "⬜"}
    Kiếm 100 XP
  </p>

  {dailyCompleted && !dailyRewardClaimed && (
    <button
      onClick={() => {
        setCoins((prev) => prev + 50);
        setDailyRewardClaimed(true);

        setMessage("🎁 Nhận 50 Coin!");
      }}
      className="bg-green-500 text-white px-4 py-2 rounded-xl mt-2"
    >
      Nhận thưởng
    </button>
  )}

</div>

            
          </div>

          <p className="text-center mt-4">
            🌍 World {selectedWorld}
          </p>

        
          {message && (
  <div className="bg-yellow-100 text-black p-3 rounded-xl mt-4 text-center">
    {message}
  </div>
)}

{shopMessage && (
  <div
    className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      bg-green-500
      text-white
      px-6
      py-3
      rounded-xl
      font-bold
      shadow-xl
      animate-bounce
      z-[999]
    "
  >
    {shopMessage}
  </div>
)}

          <p className="text-center mt-2">
            Câu {current + 1} / {questions.length}
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4 mt-3">
  <div
    className="bg-green-500 h-4 rounded-full transition-all"
    style={{ width: `${progress}%` }}
  />
</div>

          <h2 className="text-2xl text-center mt-6">
            {question?.question}
          </h2>

          <div className="grid gap-3 mt-6">
  {question?.options?.map((option: string | number) => (
    <button
      key={String(option)}
      onClick={() => checkAnswer(option)}
      className="
bg-blue-500
hover:bg-blue-600
active:scale-95
transition
text-white
py-4
rounded-2xl
font-bold
text-xl
shadow-lg
"
    >
      {option}
    </button>
  ))}
</div>

        </div>

      </main>
    );
}