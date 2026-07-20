export default function Footer() {
  return (
    <footer
      className="
        mt-20
        bg-gradient-to-b
        from-[#0b1736]
        to-[#060d20]

        border-t
        border-blue-400/20

        rounded-t-[28px]

        shadow-[0_-10px_40px_rgba(0,0,0,.45)]

        px-6
        py-10

        text-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-8
        "
      >
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            📘 Math Quest
          </h3>

          <p className="text-slate-300 text-sm leading-7">
            Học Toán THPT thông qua hệ thống thế giới,
            nhiệm vụ và các trận chiến hấp dẫn.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            📜 Pháp lý
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <a
                href="/terms"
                className="hover:text-blue-300 transition"
              >
                Điều khoản
              </a>
            </li>

            <li>
              <a
                href="/privacy"
                className="hover:text-blue-300 transition"
              >
                Chính sách bảo mật
              </a>
            </li>

            <li>
              <a
                href="/cookies"
                className="hover:text-blue-300 transition"
              >
                Chính sách Cookie
              </a>
            </li>

            <li>
              <a
                href="/report"
                className="hover:text-blue-300 transition"
              >
                Báo cáo lỗi
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🛠 Hỗ trợ
          </h3>

          <ul className="space-y-3 text-sm text-slate-300 break-all">
            <li>
              <span className="text-white font-semibold">
                Email
              </span>

              <br />

              mathquest.support@gmail.com
            </li>

            <li>
              <span className="text-white font-semibold">
                Hotline
              </span>

              <br />

              0325 819 285
            </li>

            <li>
              <a
                href="/report"
                className="hover:text-blue-300 transition"
              >
                Báo cáo lỗi
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🌐 Liên hệ
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                YouTube
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

     

      <div className="h-px bg-white/10 my-8" />

    

      <div
        className="
          text-center

          text-slate-400

          text-xs
          sm:text-sm
        "
      >
        © 2026 <span className="font-semibold text-white">Math Quest</span>.
        All rights reserved.
      </div>
    </footer>
  );
}