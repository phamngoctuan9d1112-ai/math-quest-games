export const playSound = (
  soundFile: string
) => {
  const audio = new Audio(
    `/sounds/${soundFile}`
  );

  audio.volume = 0.8;

  audio.play().catch(() => {
    console.log(
      "Trình duyệt chặn autoplay"
    );
  });
};
