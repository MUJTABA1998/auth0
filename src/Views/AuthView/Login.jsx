import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

  console.log("Data....", isLoading, isAuthenticated, user);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-center font-bold tracking-widest text-2xl">
          Welcome Back!
        </h1>
        <button
          onClick={loginWithRedirect}
          className="px-10 py-3 tracking-wide bg-black text-white rounded-lg text-base font-semibold"
        >
          Login Here
        </button>
      </div>
    </div>
  );
};

export default Login;
