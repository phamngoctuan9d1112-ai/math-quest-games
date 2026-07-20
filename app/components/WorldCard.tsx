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

    w-[145px]
    h-[220px]

    sm:w-[160px]
    sm:h-[250px]

    md:w-[170px]
    md:h-[300px]

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
text-5xl

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

        <div className="text-xl
sm:text-2xl
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

leading-5

line-clamp-3

min-h-[60px]
"
>
          {name}
        </div>

        {unlocked ? (
          <div
className="
card-button

mt-4

px-4

py-2

text-sm

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