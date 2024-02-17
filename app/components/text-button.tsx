import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export default function TextButton({ children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className="transition ease-in-out py-1 px-2 hover:bg-gray-100 rounded text-blue-700 font-medium"
    >
      {children}
    </button>
  );
}