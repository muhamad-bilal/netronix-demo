// src/app/components/ErrorMessage.tsx

interface ErrorMessageProps {
    message: string;
  }
  
  export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
      <p className="text-red-500 text-center">
        {message}
      </p>
    );
  };
  