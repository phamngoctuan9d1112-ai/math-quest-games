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
export default function QuestPanel({
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
relative

overflow-hidden

rounded-3xl

border-2
border-yellow-500

bg-gradient-to-br
from-[#122743]
to-[#0b1828]

shadow-[0_0_35px_rgba(255,210,70,.18)]

px-6
py-6

mb-8
"
>

    <div
className="
absolute
top-0
left-0
right-0
h-1

bg-gradient-to-r
from-yellow-300
via-yellow-100
to-yellow-300
"
/>

<div
className="
absolute
-right-10
-top-10

w-36
h-36

rounded-full

bg-yellow-300/10

blur-3xl
"
/>

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

            <div className="space-y-2">

<div className="flex justify-between">

<p className="text-white font-semibold text-sm">

⚔ Trả lời đúng 5 câu

</p>

<span className="text-yellow-300 text-sm">

{dailyProgress}/5

</span>

</div>

<div
className="
h-3

rounded-full

bg-slate-700

overflow-hidden
"
>

<div
className="
h-full

rounded-full

bg-gradient-to-r
from-green-400
to-lime-300

transition-all
duration-500
"
style={{

width: `${Math.min(dailyProgress / 5 * 100,100)}%`

}}
/>

</div>

</div>

           <div className="space-y-2 mt-4">

<div className="flex justify-between">

<p className="text-white font-semibold text-sm">

⭐ Kiếm 100 XP

</p>

<span className="text-cyan-300 text-sm">

{xp}/100

</span>

</div>

<div
className="
h-3

rounded-full

bg-slate-700

overflow-hidden
"
>

<div
className="
h-full

rounded-full

bg-gradient-to-r
from-cyan-400
to-blue-500

transition-all
duration-500
"
style={{

width:`${Math.min(xp/100*100,100)}%`

}}
/>

</div>

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
mt-6

w-full

flex
items-center
justify-center
gap-3

rounded-2xl

py-4

font-bold
text-lg

text-yellow-100

bg-gradient-to-b
from-yellow-400
via-yellow-500
to-yellow-700

border-2
border-yellow-200

shadow-[0_0_25px_rgba(255,220,120,.5)]

hover:scale-[1.02]
hover:shadow-[0_0_35px_rgba(255,220,120,.8)]

active:scale-95

transition-all
duration-300
"
              >
                Nhận thưởng Nhiệm Vụ
              </button>
            )}
          </div>
          
        

    );
}