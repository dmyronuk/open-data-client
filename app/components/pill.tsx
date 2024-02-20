
import { HTMLAttributes } from "react";

type PillProps = Pick<HTMLAttributes<HTMLDivElement>, "className"> & { text: string }

export default function Pill({ className, text }: PillProps) {
  return (
    <div className={`px-2 py-1 border border-slate-300 bg-slate-100 rounded text-sm text-slate-600 ${className}`}>
      {text}
    </div>
  );
}