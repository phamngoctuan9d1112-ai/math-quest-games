type Achievement = {
  id: number;
  name: string;
  description: string;
  xpRequired: number;
};

type Props = {
  achievements: Achievement[];
  xp: number;
};

export default function AchievementList({
  achievements,
  xp,
}: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">
        🏆 Thành Tựu
      </h2>

      {achievements.map((a) => (
        <div
          key={a.id}
          className="border p-3 rounded-xl mt-2"
        >
          <h3>{a.name}</h3>

          <p>{a.description}</p>

          <p>
            {xp >= a.xpRequired
              ? "✅ Đã mở khóa"
              : "🔒 Chưa mở khóa"}
          </p>
        </div>
      ))}
    </div>
  );
}