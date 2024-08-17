

import React from "react";

interface LoginFormProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-white">
          Email:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-200 ease-in-out"
          placeholder="Enter your Email"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-200 ease-in-out"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-40 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          Log In
        </button>
      </div>
    </form>
  );
};
