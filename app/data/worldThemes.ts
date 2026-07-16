export interface WorldTheme {
  name: string;
  bg: string;
  panel: string;
  button: string;
  enemy: string;
  music: string;
}
export const worldThemes: Record<number, WorldTheme> = {
  1: {
    name: "Rừng Khởi Nguyên",
    bg: "/worlds/world1/bg.jpg",
    panel: "from-green-900 to-green-700",
    button: "from-green-500 to-green-700",
    enemy: "👹",
    music: "/music/world1.mp3"
  },

  2: {
    name: "Sa Mạc Logic",
    bg: "/worlds/world2/bg.jpg",
    panel: "from-yellow-900 to-orange-700",
    button: "from-yellow-500 to-orange-600",
    enemy: "🦂",
    music: "/music/world2.mp3"
  },

  3: {
    name: "Thư Viện Cổ",
    bg: "/worlds/world3/bg.jpg",
    panel: "from-purple-900 to-indigo-700",
    button: "from-purple-500 to-indigo-700",
    enemy: "📖",
    music: "/music/world3.mp3"
  },

  4: {
    name: "Lâu Đài Quỷ Công Thức",
    bg: "/worlds/world4/bg.jpg",
    panel: "from-red-900 to-black",
    button: "from-red-500 to-red-700",
    enemy: "😈",
    music: "/music/world4.mp3"
  }
};