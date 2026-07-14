type Props = {
  userName: string;
  email: string;
  level: number;
  rank: string;
  coins: number;
  formulaShards: number;
  streak: number;
};

export default function PlayerCard({
  userName,
  email,
  level,
  rank,
  coins,
  formulaShards,
  streak,
}: Props) {
  return (
    <div
      className="
      relative
      w-full
      max-w-5xl
      mx-auto

      rounded-[36px]
      border
      border-indigo-400/40

      bg-gradient-to-br
      from-[#0d1b5d]
      via-[#111f6b]
      to-[#341a88]

      shadow-[0_0_60px_rgba(90,70,255,.35)]

      p-8
      text-white
      "
    >
      Player Card
    </div>
  );
}