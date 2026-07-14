"use client";

type Chest = {
  id: number;
  type: string;
  opened: boolean;
};

type Props = {
  chests: Chest[];
  onOpen: (id: number) => void;
  onClose: () => void;
};

export default function ChestRoom({
  chests,
  onOpen,
  onClose,
}: Props) {
  return (
    <main className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">

      <div className="bg-white rounded-3xl w-[700px] max-w-[95%] p-8">

        <h1 className="text-4xl font-black text-center mb-8">
          🎁 Phòng Rương
        </h1>

        {chests.length === 0 ? (

          <div className="text-center text-gray-500 text-xl">
            Bạn chưa có rương nào.
          </div>

        ) : (

          <div className="space-y-4">

            {chests.map((chest) => (

              <div
                key={chest.id}
                className="
                flex
                justify-between
                items-center
                bg-slate-100
                rounded-2xl
                p-5
                "
              >

                <div>

                  <div className="text-2xl font-bold">

                    {chest.type === "bronze" && "🟫 Bronze Chest"}

                    {chest.type === "silver" && "⬜ Silver Chest"}

                    {chest.type === "gold" && "🟨 Gold Chest"}

                  </div>

                  <div className="text-gray-500">

                    {chest.opened
                      ? "Đã mở"
                      : "Chưa mở"}

                  </div>

                </div>

                {!chest.opened && (

                  <button
                     onClick={() => onOpen(chest.id)}
                    className="
                    bg-yellow-500
                    hover:bg-yellow-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-bold
                    "
                  >
                    Mở
                  </button>
                  

                )}

              </div>

            ))}

          </div>

        )}

        <button
          onClick={onClose}
          className="
          mt-8
          w-full
          bg-red-500
          text-white
          py-3
          rounded-xl
          "
        >
          Đóng
        </button>

      </div>

    </main>
  );
}