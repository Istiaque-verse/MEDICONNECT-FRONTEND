import React from "react";

export default function AuthForm({ title, onSubmit, children }) {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold"
        >
          {title}
        </button>
      </form>
    </div>
  );
}
