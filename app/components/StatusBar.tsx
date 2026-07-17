type Props = {
  hearts: number;
  coins: number;
  xp: number;
};

export default function StatusBar({
  hearts,
  coins,
  xp,
}: Props) {
  return (
    <div className="flex gap-6 text-xl">
      <p>❤️ {hearts}</p>
      <p>🪙 {coins}</p>
      <p>⭐ {xp}</p>
      </div>
  );

}
