type Props = {
  id: number;
  unlocked: boolean;
  name: string;
  onClick: () => void;
};

export default function WorldCard({
  id,
  unlocked,
  name,
  onClick,
}: Props) {
  return (
    <button
      disabled={!unlocked}
      onClick={onClick}
     className={`
world-card

${
  unlocked
    ? `
      w-[118px]
      h-[185px]

      sm:w-[145px]
      sm:h-[220px]

      md:w-[170px]
      md:h-[300px]
    `
    : `
      w-[118px]
      h-[155px]

      sm:w-[145px]
      sm:h-[185px]

      md:w-[170px]
      md:h-[250px]
    `
}

${
  unlocked
    ? id % 2 === 0
      ? "world-card-purple"
      : "world-card-blue"
    : ""
}
`}
    >
      
      <div className="card-galaxy" />

      
      {/* <div className="card-border-light" /> */}

    
      <div className="card-particles" />

      <div className="flex flex-col items-center justify-center h-full relative z-10">

        {unlocked ? (
          <>
            <div className="castle-glow" />

            <div
className="
text-4xl
sm:text-5xl
md:text-7xl

sm:text-6xl

md:text-7xl

mb-2
"
>
              🏰
            </div>
          </>
        ) : (
          <>
            <div className="lock-ring" />

            <div className="text-7xl mb-3">
              🔒
            </div>
          </>
        )}

        <div className="
text-lg
sm:text-xl
md:text-2xl
font-black
tracking-wide font-black">
          WORLD {id}
        </div>

        <div
className="
mt-2

px-3

text-center

text-yellow-100

text-xs

sm:text-sm

leading-4

line-clamp-3

min-h-[42px]
"
>
          {name}
        </div>

        {unlocked ? (
          <div
className="
card-button

mt-4

px-3
py-1.5
text-xs
sm:text-sm

sm:text-base
"
>
            ⚔️ Vào chơi
          </div>
        ) : (
          <div className="card-button-lock mt-6">
            Chưa mở
          </div>
        )}
      </div>
    </button>
  );
}