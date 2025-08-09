import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add axios login API call here
    console.log("Login:", { email, password });
    // For now, navigate to dashboard directly
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-6 font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
        <button type="submit" className="bg-indigo-600 p-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-400 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

