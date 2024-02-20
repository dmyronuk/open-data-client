import { SelectHTMLAttributes, PropsWithChildren } from "react";

export default function Select({ children, className = "", ...props }: PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>) {
  return (
    <select
      {...props}
      className={`w-full p-2 bg-slate-100 border border-slate-200 rounded ${className}`}
    >
      {children}
    </select>
  );
}