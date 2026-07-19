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
        w-[170px]
        h-[300px]

        ${
          unlocked
            ? id % 2 === 0
              ? "world-card-purple"
              : "world-card-blue"
            : ""
        }
      `}
    >
      {/* Galaxy Overlay */}
      <div className="card-galaxy" />

      {/* Border Light */}
      <div className="card-border-light" />

      {/* Particle */}
      <div className="card-particles" />

      <div className="flex flex-col items-center justify-center h-full relative z-10">

        {unlocked ? (
          <>
            <div className="castle-glow" />

            <div className="text-7xl mb-3">
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

        <div className="text-2xl font-black">
          WORLD {id}
        </div>

        <div className="mt-2 text-center text-yellow-100 text-sm px-3">
          {name}
        </div>

        {unlocked ? (
          <div className="card-button mt-6">
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