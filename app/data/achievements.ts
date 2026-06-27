export const achievements = [
  {
    id: 1,
    name: "Người Mới",
    description: "Đạt 50 XP",
    xpRequired: 50,
  },

  {
    id: 2,
    name: "Chiến Binh Toán Học",
    description: "Đạt 100 XP",
    xpRequired: 100,
  },

  {
    id: 3,
    name: "Bậc Thầy",
    description: "Đạt 200 XP",
    xpRequired: 200,
  },

  {
    id: 4,
    name: "Vua Toán Học",
    description: "Đạt 400 XP",
    xpRequired: 400,
  },


  {
    id: 5,
    name: "🎓 Hoàn Thành Toán 10",
    description: "Mở khóa World 20",
    xpRequired: 0,
    condition: (world: number) => world >= 19,
  },

  {
    id: 6,
    name: "🎓 Hoàn Thành Toán 11",
    description: "Mở khóa World 40",
    xpRequired: 0,
    condition: (world: number) => world >= 39,
  },

  {
    id: 7,
    name: "🎓 Hoàn Thành Toán 12",
    description: "Mở khóa World 60",
    xpRequired: 0,
    condition: (world: number) => world >= 59,
  },

  {
    id: 8,
    name: "👑 Chúa Tể Toán Học",
    description: "Phá đảo Math Quest",
    xpRequired: 0,
    condition: (world: number) => world >= 60,
  },
];