// src/app/components/SubmitButton.tsx

interface SubmitButtonProps {
    label: string;
  }
  
  export const SubmitButton = ({ label }: SubmitButtonProps) => {
    return (
      <button
        type="submit"
        className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        {label}
      </button>
    );
  };
  