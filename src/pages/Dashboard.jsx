import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear auth tokens or session here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-6 font-bold">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 p-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
