"use client";

import { useState } from "react";

export default function TermsModal({
  onAccept,
}: {
  onAccept: () => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4">
          Điều khoản sử dụng
        </h1>

        <div className="h-64 overflow-y-auto text-sm space-y-4 pr-2 text-gray-600 text-justify">
  <p className="font-semibold text-gray-800">
    Chào mừng bạn đến với Math Quest. Trước khi bắt đầu hành trình khám phá và học tập toán học cùng chúng tôi, xin vui lòng đọc kỹ các Điều khoản sử dụng dưới đây.
  </p>

  <div>
    <h3 className="font-bold text-gray-800 mb-1">1. Thu thập và Sử dụng Dữ liệu</h3>
    <p>
      Để tối ưu hóa trải nghiệm học tập và cá nhân hóa lộ trình phát triển, Math Quest thực hiện việc thu thập và lưu trữ một số thông tin cần thiết, bao gồm:
    </p>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Thông tin tài khoản:</strong> Tên hiển thị, địa chỉ email và các thông tin cơ bản được liên kết từ tài khoản Google khi bạn đăng nhập.</li>
      <li><strong>Tiến trình học tập:</strong> Lịch sử làm bài, các bài toán đã giải và thời gian hoàn thành các thử thách.</li>
      <li><strong>Thành tích:</strong> Điểm số, danh hiệu và các cột mốc thi đua đạt được trong suốt quá trình sử dụng ứng dụng.</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold text-gray-800 mb-1">2. Cam kết Bảo mật thông tin</h3>
    <p>
      Chúng tôi đặt sự an toàn thông tin cá nhân của bạn lên hàng đầu. Math Quest cam kết <strong>tuyệt đối không bán, không cho thuê và không trao đổi</strong> dữ liệu cá nhân của người dùng cho bất kỳ bên thứ ba nào vì mục đích thương mại. Toàn bộ dữ liệu thu thập chỉ được sử dụng nội bộ nhằm nâng cao chất lượng bài học và cải tiến hệ thống.
    </p>
  </div>

  <div>
    <h3 className="font-bold text-gray-800 mb-1">3. Trách nhiệm của Người dùng</h3>
    <p>
      Bạn có trách nhiệm bảo mật tài khoản cá nhân của mình và cam kết sử dụng ứng dụng đúng mục đích học tập. Nghiêm cấm mọi hành vi gian lận kết quả, can thiệp trái phép vào hệ thống hoặc sử dụng lại thương mại các nội dung bài toán thuộc quyền sở hữu trí tuệ của Math Quest.
    </p>
  </div>

  <div>
    <h3 className="font-bold text-gray-800 mb-1">4. Thay đổi Điều khoản</h3>
    <p>
      Math Quest có quyền cập nhật, sửa đổi nội dung các điều khoản này bất kỳ lúc nào để phù hợp với các tính năng mới của ứng dụng. Việc bạn tiếp tục sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận các điều khoản bổ sung đó.
    </p>
  </div>
  
  <p className="text-center font-medium text-blue-600 pt-2">
    Cảm ơn bạn đã đồng hành cùng Math Quest trên con đường chinh phục Toán học!
  </p>
</div>

        <label className="flex gap-2 mt-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) =>
              setChecked(e.target.checked)
            }
          />
          Tôi đồng ý với điều khoản sử dụng.
        </label>

        <button
          disabled={!checked}
          onClick={onAccept}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl"
        >
          Đồng ý
        </button>
      </div>
    </div>
  );
}