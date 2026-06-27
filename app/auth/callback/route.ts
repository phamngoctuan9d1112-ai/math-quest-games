import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server' // Đường dẫn này sẽ khớp với file tạo ở Bước 2

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = await createClient()
    
    // Đổi authorization code lấy session của Supabase
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Nếu thất bại (hết hạn code hoặc lỗi cấu hình), quay về trang chủ kèm thông báo lỗi
  return NextResponse.redirect(`${origin}?error=auth_failed`)
}