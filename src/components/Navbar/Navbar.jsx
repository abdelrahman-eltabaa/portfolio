import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white"
        >
          Abdelrahman
          <span className="text-blue-600"> Eltabaa</span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">

          <li>
            <a
              href="#home"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-700 transition hover:text-blue-600 dark:text-gray-300"
            >
              Contact
            </a>
          </li>

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

      </div>
    </nav>
  );
}

export default Navbar;