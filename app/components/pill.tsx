
import { HTMLAttributes } from "react";

type PillProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & { text: string }

export default function Pill({ className, text }: PillProps) {
  return (
    <div className={`px-2 py-1 border border-green-400 bg-green-300 rounded text-sm ${className}`}>
      {text}
    </div>
  );
}