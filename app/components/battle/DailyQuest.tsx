"use client";

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
    mt-3
    p-3
    md:p-4

    border
    rounded-xl
  "
>
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
        

    );
}