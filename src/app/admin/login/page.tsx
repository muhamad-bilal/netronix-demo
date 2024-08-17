"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/app/utils/supabaseClient";
import { LoginForm } from "@/app/components/LoginForm";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Authenticate the user
      const { error } = await supabase.auth.signInWithPassword({
        email: username,
        password,
      });

      if (error) throw error;

      // Fetch the user's role from the users table
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role")
        .eq("email", username)
        .single();

      if (userError) throw userError;

      // Redirect based on role
      if (userData?.role === "admin") {
        router.push("/admin/dashboard");
      } else if (userData?.role === "head") {
        router.push("/head/dashboard");
      } else if (userData?.role === "subhead") {
        router.push("/subhead/dashboard");
      } else {
        throw new Error("Unauthorized role");
      }

      console.log("Logged in successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error logging in:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
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
