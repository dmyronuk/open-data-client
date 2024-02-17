import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export default function Button({ children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className="py-1 px-2 bg-green-300 border border-green-400 rounded"
    >
      {children}
    </button>
  );
}