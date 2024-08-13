// src/app/components/AdminLoginButton.tsx
import Link from "next/link";

export const AdminLoginButton = () => {
  return (
    <Link href="/admin/login">
      <button
        type="button"
        className="bg-gray-700 text-white rounded py-2 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
      >
        Admin Login
      </button>
    </Link>
  );
};
