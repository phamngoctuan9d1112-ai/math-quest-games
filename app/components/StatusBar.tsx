import Image from "next/image";
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
     <Image
    src="/icons/coin.png"
    alt="Coin"
    width={24}
    height={24}
/>
      <p>⭐ {xp}</p>
      </div>
  );

}
