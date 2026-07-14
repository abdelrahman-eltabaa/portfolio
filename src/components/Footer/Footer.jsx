import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h3 className="text-2xl font-bold text-white">
          Abdelrahman <span className="text-blue-500">Eltabaa</span>
        </h3>

        <p className="mt-3 text-gray-400">
          Software QA Engineer | Manual • API • Database • Automation Testing
        </p>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          © {new Date().getFullYear()} Built with React & Tailwind
          <FaHeart className="text-red-500" />
        </p>

      </div>
    </footer>
  );
}

export default Footer;