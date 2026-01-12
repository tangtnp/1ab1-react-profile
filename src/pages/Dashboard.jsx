import { useSearchParams } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "all";

  const setFilter = (value) => {
    setSearchParams({ status: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard ({user.role})
      </h1>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {["all", "todo", "done"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded ${
              status === s
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {s.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="border p-4 rounded">
        Current filter: <strong>{status}</strong>
      </div>

      {/* Role-based UI */}
      {user.role === "admin" && (
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Delete Project
        </button>
      )}
    </div>
  );
};

export default Dashboard;
