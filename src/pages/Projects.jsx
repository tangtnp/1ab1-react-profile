const projects = [
  { id: 1, name: "Web A", desc: "Landing page with Tailwind" },
  { id: 2, name: "Web B", desc: "React Router SPA" },
  { id: 3, name: "Web C", desc: "Dark mode with Context API" },
  { id: 4, name: "Web D", desc: "Responsive grid cards" },
  { id: 5, name: "Web E", desc: "Form validation UI" },
  { id: 6, name: "Web F", desc: "Simple portfolio design" },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Some things I’ve built recently.
      </p>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-xl border border-gray-200 dark:border-gray-700
                       hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
            <button className="mt-4 text-blue-500 hover:text-blue-600">
              Learn more →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
