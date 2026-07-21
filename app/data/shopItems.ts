export type ShopItem = {
  id: string;

  icon: string;

  title: string;

  description: string;

  price: number;

  rarity: "Common" | "Rare" | "Epic" | "Legendary";

  color: string;

 category:
  | "item"
  | "pet"
  | "avatar"
  | "weapon";
  action:
    | "heart"
    | "dog"
    | "cat"
    | "dragonPet"
    | "wizard"
    | "hero"
    | "dragon"
    | "king";
};

export const shopItems = [
  // Tim
  {
    id: "heart",
      category: "item",
  action: "heart",
    icon: "❤️",
    title: "Tim",
    description: "+1 mạng",
    price: 20,
    rarity: "Common",
    color: "bg-red-500 hover:bg-red-600",
  },

  // PET
  {
    id: "dog",
      category: "pet",
  action: "dog",
    icon: "🐶",
    title: "Chó Toán",
    description: "+1 Coin mỗi câu",
    price: 100,
    rarity: "Rare",
    color: "bg-blue-500 hover:bg-blue-600",
  },

  {
    id: "cat",
      category: "pet",
  action: "cat",
    icon: "🐱",
    title: "Mèo Toán",
    description: "+2 Coin mỗi câu",
    price: 200,
    rarity: "Epic",
    color: "bg-purple-500 hover:bg-purple-600",
  },

  {
    id: "dragonPet",
      category: "pet",
  action: "dragonPet",
    icon: "🐉",
    title: "Rồng Huyền Thoại",
    description: "+5 Coin mỗi câu",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },

  // Avatar
  {
    id: "wizard",
     category: "avatar",
  action: "wizard",
    icon: "🧙",
    title: "Pháp Sư",
    description: "Avatar",
    price: 50,
    rarity: "Common",
    color: "bg-green-500 hover:bg-green-600",
  },

  {
    id: "hero",
     category: "avatar",
  action: "hero",
    icon: "🦸",
    title: "Siêu Anh Hùng",
    description: "Avatar",
    price: 100,
    rarity: "Rare",
    color: "bg-cyan-500 hover:bg-cyan-600",
  },

  {
    id: "dragonAvatar",
     category: "avatar",
  action: "dragonAvatar",
    icon: "🐲",
    title: "Avatar Rồng",
    description: "Avatar",
    price: 200,
    rarity: "Epic",
    color: "bg-orange-500 hover:bg-orange-600",
  },

  {
    id: "king",
      category: "avatar",
  action: "king",
    icon: "👑",
    title: "Vua Toán",
    description: "Avatar VIP",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-600 hover:bg-yellow-700",
  },

  // ===========================
  // Thêm vật phẩm mới
  // ===========================

  {
    id: "shield",
      category: "weapon",
  action: "shield",
    icon: "🛡️",
    title: "Khiên Ma Thuật",
    description: "Không mất tim 1 lần",
    price: 300,
    rarity: "Epic",
    color: "bg-indigo-500 hover:bg-indigo-600",
  },

  {
    id: "book",
      category: "weapon",
  action: "book",
    icon: "📚",
    title: "Sách Công Thức",
    description: "+10 Formula Shards",
    price: 250,
    rarity: "Rare",
    color: "bg-blue-600 hover:bg-blue-700",
  },

  {
    id: "scroll",
      category: "weapon",
  action: "scroll",
    icon: "📜",
    title: "Cuộn Bí Kíp",
    description: "Hiển thị gợi ý",
    price: 150,
    rarity: "Rare",
    color: "bg-sky-500 hover:bg-sky-600",
  },

  {
    id: "magic",
      category: "weapon",
  action: "wizard",
    icon: "✨",
    title: "Đá Ma Thuật",
    description: "+100 XP",
    price: 180,
    rarity: "Epic",
    color: "bg-pink-500 hover:bg-pink-600",
  },

  {
    id: "crown",
      category: "weapon",
  action: "crown",
    icon: "💎",
    title: "Kim Cương",
    description: "Tiền tệ cao cấp",
    price: 1000,
    rarity: "Legendary",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },

  {
    id: "potion",
      category: "weapon",
  action: "potion",
    icon: "🧪",
    title: "Bình Hồi Máu",
    description: "+3 Tim",
    price: 350,
    rarity: "Epic",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },

  {
    id: "phoenix",
      category: "weapon",
  action: "phoenix",
    icon: "🦅",
    title: "Phượng Hoàng",
    description: "+10 Coin mỗi câu",
    price: 1200,
    rarity: "Legendary",
    color: "bg-orange-600 hover:bg-orange-700",
  },

  {
    id: "robot",
      category: "weapon",
  action: "robot",
    icon: "🤖",
    title: "Robot AI",
    description: "Tự động gợi ý",
    price: 800,
    rarity: "Legendary",
    color: "bg-slate-500 hover:bg-slate-600",
  }
];