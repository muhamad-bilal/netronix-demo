// src/app/components/FormField.tsx

import { ChangeEvent } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  type: "text" | "select" | "textarea";
  options?: string[];
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const FormField = ({
  label,
  name,
  value,
  type,
  options,
  onChange,
  placeholder,
}: FormFieldProps) => {
  return (
    <div className="relative flex flex-col">
      <label htmlFor={name} className="font-medium mb-2 text-white">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="peer border-b-2 border-black bg-transparent focus:border-red-500 outline-none py-2 px-1 transition-all duration-300"
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="peer border-b-2 border-black bg-transparent focus:border-blue-500 outline-none py-2 px-1 transition-all duration-300"
          rows={4}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="peer border-b-2 border-black bg-transparent focus:border-blue-500 outline-none py-2 px-1 transition-all duration-300"
        />
      )}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transition-all duration-300 peer-focus:w-full peer-focus:bg-white"></div>
    </div>
  );
};
