"use client";

import Image from "next/image";

type DailyQuestProps = {
    dailyProgress: number;
    xp: number;
    dailyRewardClaimed: boolean;
    currentUserId: string | null;

    setCoins: React.Dispatch<React.SetStateAction<number>>;
    setDailyRewardClaimed: React.Dispatch<React.SetStateAction<boolean>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};
export default function DailyQuest({
    dailyProgress,
    xp,
    dailyRewardClaimed,
    currentUserId,
    setCoins,
    setDailyRewardClaimed,
    setMessage,
}: DailyQuestProps) {

    return (
                  
 <div
className="
flex

flex-col

sm:flex-row

justify-between

gap-4

rounded-2xl

border-2
border-yellow-500

bg-[#0d1b2d]

px-4
py-3

sm:px-6
sm:py-4
"
>

           <div className="flex justify-between items-center">

    <div>

        <div className="flex items-center gap-3">

            <Image
    src="/icons/scroll.png"
    alt="Scroll"
    width={28}
    height={28}
/>

            <h2
className="
text-lg

sm:text-xl

font-bold

text-yellow-300
"
>
                Daily Quest
            </h2>

        </div>

        <div className="mt-2 space-y-1">

            <div
className="
flex
justify-between
items-center
"
>

<p className="text-sm text-white">

{dailyProgress >= 5 ? "✅" : "⬜"}

Trả lời đúng 5 câu

</p>

<span className="text-yellow-300 text-sm">

{dailyProgress}/5

</span>

</div>

           <div
className="
flex
justify-between
items-center
"
>

<p className="text-sm text-white">

{xp >= 100 ? "✅" : "⬜"}

Kiếm 100 XP

</p>

<span className="text-cyan-300 text-sm">

{xp}/100

</span>

</div>

        </div>

    </div>

   
</div>
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
                className="
bg-green-500
text-white

px-4
py-2

rounded-lg

font-bold
"
              >
                Nhận thưởng Nhiệm Vụ
              </button>
            )}
          </div>
        

    );
}