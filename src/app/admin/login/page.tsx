// src/app/admin/login/page.tsx

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { supabase } from "@/app/utils/supabaseClient";
import { LoginForm } from "@/app/components/LoginForm";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize useRouter for redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password,
      });

      if (error) throw error;

      // Redirect to the dashboard on successful login
      router.push("/admin/dashboard");

    } catch (error) {
      console.error("Error logging in:", (error as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-slate-900">
      <div className="max-w-lg w-full p-6">
        <img
          src="/netronixLogo.png"
          alt="Netronix Logo"
          className="mx-auto mb-6"
          width={200}
          height={100}
        />
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
