import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>

          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      <main className="p-8">
        <Outlet />
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio
      </footer>
    </div>
  );
}
