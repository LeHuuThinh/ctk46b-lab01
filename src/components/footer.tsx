export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>© 2026 — Lê Hữu Thịnh | CTK46 — Các công nghệ mới trong PTPM</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/LeHuuThinh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 underline"
          >
            GitHub
          </a>
          <a
            href="mailto:22122467@dlu.edu.vn"
            className="hover:text-gray-700 underline"
          >
            22122467@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
