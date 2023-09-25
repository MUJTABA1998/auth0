import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Dashboard = () => {
  const { user, logout } = useAuth0();
  return (
    <div className="h-screen">
      <nav className="flex justify-between p-10">
        <div className="flex gap-2 items-center">
          <img
            src={user?.picture}
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-bold text-xs">{user?.name}</p>
            <p className="font-bold text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button onClick={logout} className="tracking-wide text-xs font-bold ">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
