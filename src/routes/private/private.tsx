import { Navigate, Outlet } from "react-router-dom";

export const Private: React.FC = () => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};
