import { Outlet, useLocation } from "react-router-dom";

const FormLayout = () => {
  const location = useLocation();

  const getProgress = () => {
    if (location.pathname.includes("step-1")) return "33%";
    if (location.pathname.includes("step-2")) return "66%";
    return "100%";
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-xl shadow-lg dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-6">
        <div
          className="bg-blue-600 h-full transition-all duration-500"
          style={{ width: getProgress() }}
        />
      </div>

      <Outlet />
    </div>
  );
};

export default FormLayout;
