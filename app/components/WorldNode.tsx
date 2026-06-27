type Props = {
  world: number;
  unlocked: boolean;
  completed: boolean;
  boss?: boolean;
  onClick: () => void;
};

export default function WorldNode({
  world,
  unlocked,
  completed,
  boss,
  onClick,
}: Props) {
  return (
    <button
  onClick={onClick}
  disabled={!unlocked}
  className={`
    w-28
    h-28
    rounded-full

    ring-4
    ring-white/30

    shadow-2xl

    hover:scale-110
    hover:-translate-y-2

    transition-all
    duration-300

    flex
    items-center
    justify-center
    flex-col

    ${
      completed
        ? "bg-green-500"
        : unlocked
        ? "bg-blue-500"
        : "bg-gray-500"
    }
  `}
>
      <div className="text-3xl">
        {boss ? "👹" : completed ? "✅" : unlocked ? "🌍" : "🔒"}
      </div>

      <p className="font-bold text-white">
        {world}
      </p>
    </button>
  );
}