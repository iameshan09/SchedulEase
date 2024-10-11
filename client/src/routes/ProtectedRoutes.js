import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SignIn from "../components/SignIn";

const ProtectedRoutes = () => {
  const { session, loading } = useAuth();

  return loading ? null : session ? <Outlet /> : <SignIn />;
};
export default ProtectedRoutes;
