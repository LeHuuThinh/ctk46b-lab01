export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}
export const posts: Post[] = [
  {
    slug: "thiet-ke-responsive-web",
    title: "Thiết kế Responsive Web cho mọi kích thước màn hình",
    excerpt:
      "Cách xây dựng giao diện web hiển thị tốt trên điện thoại, máy tính bảng và desktop.",
    content: `Responsive Web Design giúp trang web tự động thích nghi với nhiều kích thước màn hình khác nhau.
  Một số nguyên tắc quan trọng:
  - Sử dụng layout linh hoạt với Flexbox và CSS Grid
  - Thiết kế mobile-first
  - Dùng media query để tinh chỉnh giao diện
  - Ảnh và font cần co giãn hợp lý
  - Tránh các phần tử cố định gây vỡ layout

  Khi làm web hiện đại, responsive là yêu cầu gần như bắt buộc để cải thiện trải nghiệm người dùng.`,
    date: "2025-02-10",
    category: "Web",
    author: "Nguyễn Văn A",
  },
  {
    slug: "toi-uu-seo-cho-website",
    title: "Tối ưu SEO cơ bản cho website hiện đại",
    excerpt:
      "Những kỹ thuật SEO nền tảng giúp website dễ được tìm thấy hơn trên công cụ tìm kiếm.",
    content: `SEO là quá trình tối ưu website để tăng khả năng xuất hiện trên các công cụ tìm kiếm.
  Một số bước cơ bản:
  - Đặt tiêu đề và mô tả trang rõ ràng
  - Sử dụng thẻ heading hợp lý
  - Tối ưu tốc độ tải trang
  - Đảm bảo nội dung có cấu trúc dễ đọc
  - Dùng đường dẫn thân thiện với người dùng
  - Thêm metadata phù hợp cho từng trang

  Một website đẹp thôi chưa đủ, mà còn cần được tối ưu để người dùng và công cụ tìm kiếm dễ tiếp cận.`,
    date: "2025-02-15",
    category: "Web",
    author: "Trần Thị B",
  },
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
 Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
 Static Site Generation (SSG), và App Router.
 Một số ưu điểm nổi bật của Next.JS:
 - Routing tự động dựa trên cấu trúc thư mục
 - Hỗ trợ Server Components và Client Components
 - Tối ưu hóa hình ảnh, font, và scripts tự động
 - API Routes tích hợp
 - Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Lê Văn C",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết
 CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.
 Ví dụ, thay vì viết:
 .card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px
rgba(0,0,0,0.1); }
Bạn viết trực tiếp trong HTML:
 <div class="p-4 rounded-lg shadow-md">...</div>
 Ưu điểm:
 - Không cần đặt tên class
 - Không cần chuyển qua lại giữa file HTML và CSS
 - File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Phạm Thị D",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh
 nghiệm quan trọng:
 1. Thực hành nhiều hơn đọc lý thuyết
 Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%,
 70% còn lại là viết code.
 2. Xây dựng dự án thực tế
 Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
 Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.
 3. Tham gia cộng đồng
 Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Hoàng Văn E",
  },
];
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
