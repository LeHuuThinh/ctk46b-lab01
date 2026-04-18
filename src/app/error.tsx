"use client";


import { useEffect } from "react";




type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="vi">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "#f8fafc",
            color: "#0f172a",
          }}
        >
          <div
            style={{
              maxWidth: 560,
              width: "100%",
              borderRadius: 16,
              background: "#ffffff",
              padding: 32,
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#dc2626" }}>
              Đã xảy ra lỗi
            </p>
            <h1 style={{ margin: "12px 0 16px", fontSize: 28, lineHeight: 1.2 }}>
              Không thể tải ứng dụng
            </h1>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>
              Hệ thống đã gặp sự cố khi xử lý yêu cầu. Vui lòng thử lại hoặc tải lại trang.
            </p>

            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => reset()}
                style={{
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 16px",
                  background: "#0f172a",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Thử lại
              </button>

              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{
                  border: "1px solid #cbd5e1",
                  borderRadius: 10,
                  padding: "12px 16px",
                  background: "#fff",
                  color: "#0f172a",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Tải lại
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}