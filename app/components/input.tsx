import { InputHTMLAttributes } from "react";

interface InputProps {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

export default function Input({ inputProps, label }: InputProps) {
  return (
    <div>
      <label htmlFor={inputProps.name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        {...inputProps}
        autoComplete="off"
        className={`${inputProps.className ?? ''} w-full py-1 px-2 bg-slate-100 border border-slate-200 rounded`}
      />
    </div>
  );
}