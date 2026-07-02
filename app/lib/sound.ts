export function playSound(src: string) {
  const audio = new Audio(src);
  audio.volume = 0.5;

  audio.play().catch((err) => {
    console.log("Sound error:", err);
  });
}