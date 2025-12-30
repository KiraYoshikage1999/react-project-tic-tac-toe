import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const side = localStorage.getItem("side");

  if (!side) {
    return <Navigate to="/SideChoice" replace />;
  }

  return children;
}

export default ProtectedRoute;