// src/app/admin/login.tsx

import { useState } from "react";
import { LoginForm } from "@/app/components/LoginForm";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;

