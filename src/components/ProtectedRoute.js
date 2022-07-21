import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  //Navigate allows to return a component
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
}
