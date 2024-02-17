import { InputHTMLAttributes, PropsWithChildren } from "react";

export default function Input({ children, ...props }: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input
      {...props}
      autoComplete="off"
      className={`${props.className} py-1 px-2 bg-slate-100 border border-slate-200 rounded`}
    >
      {children}
    </input>
  );
}