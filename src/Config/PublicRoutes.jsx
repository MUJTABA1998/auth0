import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PublicRoutes = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  console.log("Is Authenticated", isAuthenticated, user);

  return isAuthenticated ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Outlet>{children}</Outlet>
  );
};

export default PublicRoutes;
