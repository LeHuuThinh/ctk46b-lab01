"use client";
import { useState, useEffect } from "react";
import { GuestbookEntry } from "@/data/guestbook";
export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State cho form
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(entries.length / itemsPerPage);
  const currentEntries = entries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Fetch danh sách lời nhắn
  async function fetchEntries() {
    try {
      const res = await fetch("/api/guestbook");
      if (!res.ok) throw new Error("Lỗi khi tải dữ liệu");
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      setError("Không thể tải sổ lưu bút. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }
  // Gọi fetchEntries khi component mount
  useEffect(() => {
    fetchEntries();
  }, []);
  // Xử lý gửi lời nhắn mới
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Lỗi khi gửi lời nhắn");
      }

      // Reset form và tải lại danh sách
      setName("");
      setMessage("");
      await fetchEntries();

      // Quay về trang 1 để xem tin nhắn mới
      setCurrentPage(1);
    } catch (err: any) {
      alert(err.message || "Không thể gửi lời nhắn. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }
  // Xử lý xóa lời nhắn
  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/guestbook/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Lỗi khi xóa");
      await fetchEntries();

      // Xử lý lùi trang nếu trang hiện tại bị trống sau khi xóa
      if (currentEntries.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      alert("Không thể xóa lời nhắn. Vui lòng thử lại.");
    } finally {
      setDeletingId(null);
    }
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-gray-500 mb-8">Hãy để lại lời nhắn cho tôi nhé!</p>
      {/* Form gửi lời nhắn */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 rounded-lg p-6 mb-8 space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tên của bạn
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none
focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Lời nhắn
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Viết lời nhắn của bạn..."
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none
focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={submitting || !name.trim() || !message.trim()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700
transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Đang gửi..." : "Gửi lời nhắn"}
        </button>
      </form>
      {/* Danh sách lời nhắn */}
      {loading && (
        <div className="text-center py-8 text-gray-500">
          Đang tải sổ lưu bút...
        </div>
      )}
      {error && <div className="text-center py-8 text-red-500">{error}</div>}
      {!loading && !error && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">{entries.length} lời nhắn</p>

          {currentEntries.map((entry) => (
            <div
              key={entry.id}
              className="border rounded-lg p-4 hover:shadow-sm transition-shadow bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">
                  {entry.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">
                    {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="text-xs text-red-400 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deletingId === entry.id ? "Đang xóa..." : "Xóa"}
                  </button>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">
                {entry.message}
              </p>
            </div>
          ))}

          {entries.length === 0 && (
            <p className="text-center text-gray-400 py-8">
              Chưa có lời nhắn nào. Hãy là người đầu tiên!
            </p>
          )}

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-8 pt-4 border-t">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trang trước
              </button>
              <span className="text-sm text-gray-500">
                Trang {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trang sau
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
