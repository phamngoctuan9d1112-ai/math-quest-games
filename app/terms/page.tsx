export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Điều khoản sử dụng
      </h1>

      <div className="space-y-6">

        <section>
          <h2 className="text-2xl font-bold">
            1. Chấp nhận điều khoản
          </h2>

          <p>
            Khi sử dụng Math Quest, bạn đồng ý
            tuân thủ các điều khoản này.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">
            2. Hành vi người dùng
          </h2>

          <ul className="list-disc ml-6">
            <li>Không gian lận hệ thống.</li>
            <li>Không phá hoại dữ liệu.</li>
            <li>Không sử dụng công cụ tự động.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">
            3. Quyền thay đổi
          </h2>

          <p>
            Chúng tôi có thể cập nhật nội dung
            và tính năng của hệ thống bất kỳ lúc nào.
          </p>
        </section>

      </div>

    </main>
  );
}