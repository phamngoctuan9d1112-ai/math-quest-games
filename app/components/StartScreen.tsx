export default function StartScreen({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        relative
      "
      style={{
        backgroundImage:
          "url('/images/math-bg.jpg')",
      }}
    >
      {/* lớp làm tối ảnh */}
      <div
  className="
    absolute
    inset-0
    bg-gradient-to-br
    from-black/80
    via-slate-900/80
    to-blue-950/80
  "
/>

<div className="
text-7xl
font-bold
animate-pulse
"></div>
      {/* nội dung */}
      <div
        className="
          relative
          z-10
          text-center
          text-white
        "
      >
       
        <h1
  className="
    text-7xl
    font-extrabold
    text-white
    drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]
    mb-6
  "
>
  ⚔️ Math Quest
</h1>

        




        <button
          onClick={onStart}
          className="
            bg-blue-500
            hover:bg-blue-600
            px-8
            py-4
            rounded-2xl
            text-xl
            font-bold
            transition
          "
        >
          Bắt đầu chơi
        </button>
      </div>
    </main>
  );
}