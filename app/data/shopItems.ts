export type ShopCategory =
  | "item"
  | "pet"
  | "avatar"
  | "weapon"
  | "bundle";

export type ShopAction =
  | "heart"
  | "dog"
  | "cat"
  | "dragonPet"
  | "wizard"
  | "hero"
  | "dragon"
  | "king"
  | "shield"
  | "book"
  | "scroll"
  | "magic"
  | "potion"
  | "phoenix"
  | "robot"
  | "sword"
  | "axe"
  | "staff"
  | "vip";

export type ShopItem = {
  id: string;
  category: ShopCategory;
  action: ShopAction;

  icon: string;
  title: string;
  description: string;

  price: number;

  rarity: "Common" | "Rare" | "Epic" | "Legendary";

  color: string;
};

export const shopItems: ShopItem[] = [
  //========================
  // ITEM
  //========================

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

  {
    id: "shield",
    category: "item",
    action: "shield",
    icon: "🛡️",
    title: "Khiên",
    description: "Chặn mất tim",
    price: 300,
    rarity: "Epic",
    color: "bg-indigo-500 hover:bg-indigo-600",
  },

  {
    id: "book",
    category: "item",
    action: "book",
    icon: "📚",
    title: "Sách",
    description: "+10 Formula",
    price: 250,
    rarity: "Rare",
    color: "bg-blue-500 hover:bg-blue-600",
  },

  {
    id: "scroll",
    category: "item",
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
    category: "item",
    action: "magic",
    icon: "✨",
    title: "Đá Ma Thuật",
    description: "+100 XP",
    price: 180,
    rarity: "Epic",
    color: "bg-pink-500 hover:bg-pink-600",
  },

  {
    id: "potion",
    category: "item",
    action: "potion",
    icon: "🧪",
    title: "Bình Hồi Máu",
    description: "+3 Tim",
    price: 350,
    rarity: "Epic",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },

  //========================
  // PET
  //========================

  {
    id: "dog",
    category: "pet",
    action: "dog",
    icon: "🐶",
    title: "Chó Toán",
    description: "+1 Coin",
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
    description: "+2 Coin",
    price: 200,
    rarity: "Epic",
    color: "bg-purple-500 hover:bg-purple-600",
  },

  {
    id: "dragonPet",
    category: "pet",
    action: "dragonPet",
    icon: "🐉",
    title: "Rồng",
    description: "+5 Coin",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },

  {
    id: "phoenix",
    category: "pet",
    action: "phoenix",
    icon: "🦅",
    title: "Phượng Hoàng",
    description: "+10 Coin",
    price: 1200,
    rarity: "Legendary",
    color: "bg-orange-500 hover:bg-orange-600",
  },

  {
    id: "robot",
    category: "pet",
    action: "robot",
    icon: "🤖",
    title: "Robot AI",
    description: "Tự động gợi ý",
    price: 900,
    rarity: "Legendary",
    color: "bg-slate-500 hover:bg-slate-600",
  },

  //========================
  // AVATAR
  //========================

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
    id: "dragon",
    category: "avatar",
    action: "dragon",
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
    description: "VIP",
    price: 500,
    rarity: "Legendary",
    color: "bg-yellow-600 hover:bg-yellow-700",
  },

  //========================
  // WEAPON
  //========================

  {
    id: "sword",
    category: "weapon",
    action: "sword",
    icon: "⚔️",
    title: "Kiếm Ánh Sáng",
    description: "+5 Attack",
    price: 400,
    rarity: "Rare",
    color: "bg-gray-500 hover:bg-gray-600",
  },

  {
    id: "axe",
    category: "weapon",
    action: "axe",
    icon: "🪓",
    title: "Rìu Khổng Lồ",
    description: "+8 Attack",
    price: 700,
    rarity: "Epic",
    color: "bg-orange-600 hover:bg-orange-700",
  },

  {
    id: "staff",
    category: "weapon",
    action: "staff",
    icon: "🪄",
    title: "Gậy Phép",
    description: "+10 Magic",
    price: 950,
    rarity: "Legendary",
    color: "bg-violet-600 hover:bg-violet-700",
  },

  //========================
  // BUNDLE
  //========================

  {
    id: "vip",
    category: "bundle",
    action: "vip",
    icon: "💎",
    title: "VIP Pack",
    description: "1000 Coin + Avatar",
    price: 2000,
    rarity: "Legendary",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },
];