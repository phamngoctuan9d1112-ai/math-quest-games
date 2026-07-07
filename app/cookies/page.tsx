export default function CookiesPage() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Chính sách Cookie
      </h1>

      <p>
        Math Quest sử dụng Cookie và LocalStorage
        để lưu:
      </p>

      <ul className="list-disc ml-6 mt-4">
        <li>Tiến trình học tập</li>
        <li>Cài đặt âm thanh</li>
        <li>Thông tin đăng nhập</li>
        <li>Streak hằng ngày</li>
      </ul>

    </main>
  );
}