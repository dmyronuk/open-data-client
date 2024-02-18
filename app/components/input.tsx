import { InputHTMLAttributes } from "react";

export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      autoComplete="off"
      className={`w-full py-1 px-2 bg-slate-100 border border-slate-200 rounded ${className}`}
    />
  );
}