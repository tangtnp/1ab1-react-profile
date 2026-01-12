export default function Contact() {
  return (
    <section className="max-w-xl">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Leave a message and I’ll get back to you.
      </p>

      <form className="mt-6 space-y-4">
        <input
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
        />
        <input
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        <textarea
          rows="5"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message"
        />

        <button
          type="button"
          className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
