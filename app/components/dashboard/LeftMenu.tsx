type Props = {
  onShop: () => void;
  onAchievements: () => void;
  onChest: () => void;
  onChestInventory: () => void;
};

export default function LeftMenu({
  onShop,
  onAchievements,
  onChest,
  onChestInventory,
}: Props) {
    return (
        <>
            <div className="hidden md:flex gap-3 flex-wrap">
                        <button
                          onClick={onShop}
                          className="
                            bg-yellow-500
                            hover:bg-yellow-600
                            text-white
                            px-5
                            py-3
                            rounded-xl
                            font-bold
                            shadow-lg
                            transition
                          "
                        >
                          🛒 Shop
                        </button>
            
                        <button
                          onClick={onAchievements}
                          className="
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            px-5
                            py-3
                            rounded-xl
                            font-bold
                            shadow-lg
                            transition
                          "
                        >
                          🏆 Thành tích
                        </button>
                        <button
                onClick={onChest}
                className="
                bg-orange-500
                hover:bg-yellow-600
                text-white
                px-4
                py-2
                rounded-xl
                "
            >
                🎁 
            </button>
            <button
              onClick={onChestInventory}
              className="
              bg-yellow-500
              text-white
              px-4
              py-2
              rounded-xl
              "
            >
              🎒 
            </button>
            
                      </div>
        </>
    );
}