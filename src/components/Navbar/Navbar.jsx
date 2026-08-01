import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Abdelrahman <span className="text-blue-600">Eltabaa</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">

          {[
            "Home",
            "About",
            "Experience",
            "Skills",
            "Projects",
            "Certificates",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
              >
                {item}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-xl border border-gray-300 p-3 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>

          <li>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Hire Me
            </a>
          </li>

        </ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 dark:border-gray-700 dark:text-white"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-gray-300 p-2 text-gray-700 dark:border-gray-700 dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white dark:border-gray-800 dark:bg-gray-950 lg:hidden">

          {[
            "Home",
            "About",
            "Experience",
            "Skills",
            "Projects",
            "Certificates",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="m-4 block rounded-lg bg-blue-600 py-3 text-center text-white transition hover:bg-blue-700"
          >
            Hire Me
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;