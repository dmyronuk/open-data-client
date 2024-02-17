import { ChangeEvent } from "react";
import { useSearchParams } from "@remix-run/react";
import Input from "~/components/input";

export default function SearchForm() {
  const [_, setSearchParams] = useSearchParams();

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("q", event.target.value);
      return prev;
    });
  };

  return (
    <div className="w-full h-full p-4 border border-slate-200 rounded bg-white">
      <Input
        label="search"
        inputProps={{
          autoFocus: true,
          name: "search",
          onChange: handleQueryChange
        }}
      />
    </div>
  );
}