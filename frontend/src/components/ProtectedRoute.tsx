import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminRoute, isAdmin }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  // Case 1: Not logged in → Login redirect
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Case 2: Admin route but not admin user → Unauthorized redirect
  if (adminRoute && !isAdmin) return <Navigate to="/unauthorized" replace />;

  // Case 3: All good → Show child routes
  return <Outlet />;
};

export default ProtectedRoute;