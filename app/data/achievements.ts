export const achievements = [
  {
    id: 1,
    name: "Người Mới",
    description: "Đạt 50 Điểm",
    xpRequired: 50,
  },

  {
    id: 2,
    name: "Chiến Binh Toán Học",
    description: "Đạt 100 Điểm",
    xpRequired: 100,
  },

  {
    id: 3,
    name: "Bậc Thầy",
    description: "Đạt 200 Điểm",
    xpRequired: 200,
  },

  {
    id: 4,
    name: "Vua Toán Học",
    description: "Đạt 400 Điểm",
    xpRequired: 400,
  },


  {
    id: 5,
    name: "🎓 Hoàn Thành Toán 10",
    description: "Mở khóa World 26",
    xpRequired: 0,
    condition: (world: number) => world >= 25,
  },

  {
    id: 6,
    name: "🎓 Hoàn Thành Toán 11",
    description: "Mở khóa World 60",
    xpRequired: 0,
    condition: (world: number) => world >= 60,
  },

  {
    id: 7,
    name: "🎓 Hoàn Thành Toán 12",
    description: "Mở khóa World 79",
    xpRequired: 0,
    condition: (world: number) => world >= 79,
  },

  {
    id: 8,
    name: "👑 Chúa Tể Toán Học",
    description: "Phá đảo Math Quest",
    xpRequired: 0,
    condition: (world: number) => world >= 79,
  },
];
