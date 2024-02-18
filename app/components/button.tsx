import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Spinner from "./spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean}

export default function Button({
  children,
  className = '',
  isLoading = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      className={`transition ease-in-out flex justify-center items-center py-1 px-2 bg-blue-500 hover:bg-blue-400 disabled:bg-gray-100 border border-blue-400 disabled:border-gray-200 rounded text-white disabled:text-gray-500 ${className}`}
    >

      {children}
      {isLoading && (
        <Spinner className="ml-2" />
      )}
    </button>
  );
}