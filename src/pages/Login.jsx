import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login({ name: "Demo User", role });
    navigate("/dashboard");
  };

  return (
    <div className="p-10 max-w-md mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-bold">Login</h1>

      <button
        onClick={() => handleLogin("admin")}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Login as Admin
      </button>

      <button
        onClick={() => handleLogin("user")}
        className="w-full bg-gray-600 text-white py-2 rounded"
      >
        Login as User
      </button>
    </div>
  );
};

export default Login;
