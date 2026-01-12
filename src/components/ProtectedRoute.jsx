import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useAuthStore((state) => state.user);

  // ยังไม่ login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // login แล้ว แต่ role ไม่ผ่าน
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    alert("Access denied");
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
