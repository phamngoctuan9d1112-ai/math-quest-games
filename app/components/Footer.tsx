export default function Footer() {
  return (
   <footer
  className="
    mt-20

    bg-gradient-to-b
    from-slate-900
    to-slate-950

    text-white

    py-10
    px-5

    rounded-t-[32px]

    border-t
    border-blue-400/20

    shadow-[0_-10px_40px_rgba(0,0,0,.45)]
  "
>
      <div
  className="
    max-w-7xl
    mx-auto

    grid

    grid-cols-2
    md:grid-cols-4

    gap-6
    md:gap-10
  "
>
        {/* Thông tin */}
        <div>
          <h3 className="
font-bold

text-base
md:text-xl

mb-3
">
            📘 Math Quest
          </h3>

        <p
className="
text-slate-300

text-sm
md:text-base

leading-6
"
>
            Học Toán THPT thông qua trò chơi,
            nhiệm vụ và hệ thống thế giới.
          </p>
        </div>

        {/* Pháp lý */}
        <div>
          <h3 className="
font-bold

text-base
md:text-xl

mb-3
">
            📜 Pháp lý
          </h3>
<ul
className="
space-y-2

text-sm
md:text-base

text-slate-300
"
>
            <li>
              <a
  href="/terms"
  className="hover:text-white transition"
>
  Điều khoản
</a>
            </li>

            <li>
              <a
  href="/privacy"
  className="hover:text-white transition"
>
  Chính sách bảo mật
</a>
            </li>

            <li>
              <a
  href="/cookies"
  className="hover:text-white transition"
>
  Chính sách Cookie
</a>
            </li>
            <li>
              <a
  href="/report"
  className="hover:text-white transition"
>
  Báo cáo lỗi
</a>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h3 className="
font-bold

text-base
md:text-xl

mb-3
">
            🛠 Hỗ trợ
          </h3>

          <ul className="space-y-2 text-slate-300">
            <li>Email: mathquest.support@gmail.com</li>
            <li>SĐT: 0325 819 285 </li>

            <li>
              <a href="/report">
                Báo cáo lỗi
              </a>
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="
font-bold

text-base
md:text-xl

mb-3
">
            🌐 Liên hệ
          </h3>

          <ul className="space-y-2 text-slate-300">
            <li>Facebook</li>
            <li>Youtube</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      <div
        className="
          text-center
          mt-10
          text-slate-400
        "
      >
        © 2026 Math Quest. All rights reserved.
      </div>
    </footer>
  );
}