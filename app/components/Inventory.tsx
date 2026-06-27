type Props = {
  inventory: string[];
  weapon: string;
  pet: string;
  avatar: string;
  onClose: () => void;
};

export default function Inventory({
  inventory,
  weapon,
  pet,
  avatar,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-slate-900 rounded-3xl w-[700px] p-8 text-white">

        <h1 className="text-4xl font-bold text-center">
          🎒 Túi Đồ
        </h1>

        <div className="mt-8">

          <h2 className="text-2xl font-bold">
            👤 Avatar
          </h2>

          <div className="text-6xl mt-3">
            {avatar}
          </div>

          <h2 className="text-2xl font-bold mt-8">
            ⚔ Vũ khí
          </h2>

          <div className="text-6xl mt-3">
            {weapon}
          </div>

          <h2 className="text-2xl font-bold mt-8">
            🐾 Pet
          </h2>

          <div className="text-6xl mt-3">
            {pet}
          </div>

          <h2 className="text-2xl font-bold mt-8">
            📦 Vật phẩm đã mua
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-5">

            {inventory.map((item, index) => (

              <div
                key={index}
                className="
                bg-slate-800
                rounded-2xl
                p-4
                text-center
                text-5xl
                "
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <button
          onClick={onClose}
          className="
          w-full
          mt-10
          bg-red-500
          hover:bg-red-600
          py-4
          rounded-xl
          font-bold
          "
        >
          Đóng
        </button>

      </div>
    </div>
  );
}