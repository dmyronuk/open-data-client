import { SelectHTMLAttributes, PropsWithChildren } from "react";

interface SelectProps {
  label: string;
  selectProps: SelectHTMLAttributes<HTMLSelectElement>;
}

export default function Select({ children, ...props }: PropsWithChildren<SelectProps>) {
  return (
    <div>
      <label
        htmlFor={props.selectProps.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <select
        {...props.selectProps}
        className="w-full p-2 bg-slate-100 border border-slate-200 rounded"
      >
        {children}
      </select>
    </div>

  );
}