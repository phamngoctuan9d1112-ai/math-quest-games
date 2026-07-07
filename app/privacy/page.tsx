export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Chính sách bảo mật
      </h1>

      <div className="space-y-6">

        <section>
          <h2 className="text-2xl font-bold mb-2">
            1. Dữ liệu thu thập
          </h2>

          <p>
            Math Quest có thể lưu trữ:
          </p>

          <ul className="list-disc ml-6 mt-2">
            <li>Tên tài khoản</li>
            <li>Email đăng nhập</li>
            <li>Tiến trình học tập</li>
            <li>Điểm XP và Coin</li>
            <li>Thành tích và Streak</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">
            2. Mục đích sử dụng
          </h2>

          <p>
            Dữ liệu được sử dụng để lưu tiến trình,
            bảng xếp hạng và cá nhân hóa trải nghiệm học tập.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">
            3. Bảo mật
          </h2>

          <p>
            Dữ liệu được lưu trữ thông qua Supabase
            và các dịch vụ bảo mật tiêu chuẩn.
          </p>
        </section>

      </div>
    </main>
  );
}