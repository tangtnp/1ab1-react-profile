import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Hi, I’m <span className="text-blue-500">Your Name</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        I build modern web apps using React, Tailwind, and clean UX.
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          to="/projects"
          className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
