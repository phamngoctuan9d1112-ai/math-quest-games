"use client";

type BattleScreenProps = {
  hearts: number;
  coins: number;
  xp: number;
};

export default function BattleScreen({
  hearts,
  coins,
  xp,
}: BattleScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Battle Screen</h1>

        <p className="mt-4">❤️ {hearts}</p>

        <p>🪙 {coins}</p>

        <p>⭐ {xp}</p>
      </div>
    </div>
  );
}