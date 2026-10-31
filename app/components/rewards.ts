// Dùng chung cho rương quà, túi đồ và mini game

export type RewardKey = "shield" | "scroll" | "book" | "magicStone" | "potion";

export const REWARD_INFO: Record<RewardKey, { emoji: string; name: string }> = {
  shield: { emoji: "🛡️", name: "Khiên" },
  scroll: { emoji: "📜", name: "Cuộn giấy" },
  book: { emoji: "📘", name: "Sách" },
  magicStone: { emoji: "💎", name: "Đá ma thuật" },
  potion: { emoji: "🧪", name: "Bình thuốc" },
};

// Tỉ lệ rơi (tổng 100) theo loại rương. Rương bạc giữ đúng tỉ lệ cũ (20% mỗi món).
const DROP_TABLES: Record<string, [RewardKey, number][]> = {
  bronze: [["potion", 30], ["scroll", 30], ["shield", 20], ["book", 15], ["magicStone", 5]],
  silver: [["potion", 20], ["scroll", 20], ["shield", 20], ["book", 20], ["magicStone", 20]],
  gold: [["potion", 10], ["scroll", 10], ["shield", 20], ["book", 30], ["magicStone", 30]],
};

export function rollChestReward(type?: string): RewardKey {
  const table = DROP_TABLES[type ?? ""] ?? DROP_TABLES.silver;
  let roll = Math.random() * 100;
  for (const [key, weight] of table) {
    if (roll < weight) return key;
    roll -= weight;
  }
  return table[table.length - 1][0];
}

// Thưởng khi hoàn thành mini game (mỗi ngày nhận 1 lần)
export const MINIGAME_REWARD = { xp: 40, coins: 15 };
