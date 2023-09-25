import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Outlet>{children}</Outlet> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
