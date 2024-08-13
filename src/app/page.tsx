
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { FormField } from "./components/FormField";
import { ErrorMessage } from "./components/ErrorMessage";
import { SubmitButton } from "./components/SubmitButton";
import { AdminLoginButton } from "./components/AdminLoginButton";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hostel: "",
    room: "",
    complaintType: "",
    complaint: "",
  });

  const [error, setError] = useState(""); // for  error message

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.hostel ||
      !formData.room ||
      !formData.complaintType ||
      !formData.complaint
    ) {
      setError("All fields must be filled out."); // errmessage
      return; // 
    }

    setError(""); // 
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Image
        src="/netronixLogo.png"
        alt="Netronix Logo"
        width={200}
        height={100}
        className="mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Complaint Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <ErrorMessage message={error} />}

        <FormField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          label="Phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
        />
        <FormField
          label="Hostel"
          name="hostel"
          type="select"
          value={formData.hostel}
          onChange={handleChange}
          options={["Select Your Hostel", "MC", ...Array.from({ length: 13 }, (_, i) => i + 1).map((number) => number.toString())]}
        />
        <FormField
          label="Room"
          name="room"
          type="text"
          value={formData.room}
          onChange={handleChange}
        />
        <FormField
          label="Complaint Type"
          name="complaintType"
          type="select"
          value={formData.complaintType}
          onChange={handleChange}
          options={["Select Complaint Type", "ethernet", "No Internet", "wifi Not Working", "others"]}
        />
        <FormField
          label="Complaint Description"
          name="complaint"
          type="textarea"
          value={formData.complaint}
          onChange={handleChange}
        />

        <div className="flex flex-col items-center space-y-4">
          <SubmitButton label="Submit Complaint" />
          <AdminLoginButton />
        </div>
      </form>
    </div>
  );
}
