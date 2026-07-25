"use client";

type Props = {
  x: number;
  y: number;
};

export default function Player({
  x,
  y,
}: Props) {
  return (
    <div
      className="
      absolute
      w-10
      h-10
      z-50
      pointer-events-none
      "
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src="/images/player.png"
        alt=""
        className="
        w-full
        h-full
        object-contain
        "
      />
    </div>
  );
}