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
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          Abdelrahman
          <span className="text-blue-600"> Eltabaa</span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">

          <li>
            <a href="#home" className="transition hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="transition hover:text-blue-600">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-blue-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="transition hover:text-blue-600">
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </li>

          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-xl border p-3 transition hover:bg-gray-100"
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