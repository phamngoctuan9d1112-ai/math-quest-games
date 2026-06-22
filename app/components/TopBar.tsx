type Props = {
  hearts: number;
  coins: number;
  xp: number;
  level: number;
};

export default function TopBar({
  hearts,
  coins,
  xp,
  level,
}: Props) {
  return (
    <div className="
      flex
      justify-center
      gap-8
      bg-black/30
      text-white
      p-3
      rounded-xl
      mb-4
    ">
      <span>❤️ {hearts}</span>
      <span>🪙 {coins}</span>
      <span>⭐ {xp}</span>
      <span>🏆 Lv {level}</span>
    </div>
  );
}