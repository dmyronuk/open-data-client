import { LabelHTMLAttributes, PropsWithChildren } from "react";

export default function Label({ children, className = '', ...props }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      {...props}
      className={`block text-sm font-medium leading-6 text-gray-900 ${className}`}
    >
      {children}
    </label>
  );
}