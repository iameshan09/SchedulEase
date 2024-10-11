import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const OfflineRoutes = () => {
  const { session } = useAuth();

  return session ? <Navigate to="/" replace={true} /> : <Outlet />;
};
export default OfflineRoutes;
