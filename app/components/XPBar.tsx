type Props = {
  xp: number;
};

export default function XPBar({ xp }: Props) {
  const percent = (xp % 50) * 2;

  return (
    <div className="w-80">
      <div className="bg-gray-200 h-4 rounded">
        <div
          className="bg-green-500 h-4 rounded"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>

      <p className="mt-2 text-center">
        {xp % 50}/50 XP
      </p>
    </div>
  );
}