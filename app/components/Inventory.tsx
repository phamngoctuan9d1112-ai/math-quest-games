type Props = {
  inventory: string[];
  onClose: () => void;
};

export default function Inventory({
  inventory,
  onClose,
}: Props) {
  return (
    <main className="
    min-h-screen
    flex
    items-center
    justify-center
    ">
      <div className="
      bg-white
      p-8
      rounded-3xl
      w-[500px]
      ">
        <h1 className="text-3xl font-bold">
          🎒 Túi Đồ
        </h1>

        <div className="
        grid
        grid-cols-4
        gap-4
        mt-4
        ">
          {inventory.map(item => (
            <div
              key={item}
              className="
              text-5xl
              border
              p-4
              rounded-xl
              "
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="
          mt-6
          bg-red-500
          text-white
          px-4
          py-2
          rounded-xl
          "
        >
          Đóng
        </button>
      </div>
    </main>
  );
}