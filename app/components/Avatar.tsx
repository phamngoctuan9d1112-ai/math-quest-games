import { avatars } from "../data/avatars";

type Props = {
  avatar: string;
  size?: number;
};

export default function Avatar({
  avatar,
  size = 90,
}: Props) {

  const current =
    avatars.find(
      a => a.id === avatar
    );

  return (

    <div
      style={{
        width: size,
        height: size,
      }}
      className="
      rounded-full
      flex
      items-center
      justify-center
      bg-yellow-400
      shadow-lg
      text-5xl
      "
    >

      {current?.icon ?? "🧑"}

    </div>

  );

}