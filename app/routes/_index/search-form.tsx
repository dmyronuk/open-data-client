import { ChangeEvent } from "react";
import { useSearchParams } from "@remix-run/react";
import Input from "~/components/input";
import Select from "~/components/select";

const SORT_OPTIONS = [
  { value: 'date_modified', label: 'Modified' },
  { value: 'date_published', label: 'Published' },
  { value: 'score', label: 'Score' }
];

export default function SearchForm() {
  const [_, setSearchParams] = useSearchParams();

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("q", event.target.value);
      return prev;
    });
  };

  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set("limit", event.target.value);
      return prev;
    });
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set("sort", event.target.value);
      return prev;
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 border border-slate-200 rounded bg-white">
      <Input
        label="search"
        inputProps={{
          autoFocus: true,
          name: "search",
          onChange: handleQueryChange
        }}
      />
      <Select
        label="Limit"
        selectProps={{
          name: "Limit",
          onChange: handleLimitChange
        }}
      >
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
      <Select
        label="Sort"
        selectProps={{
          name: "Sort",
          onChange: handleSortChange
        }}
      >
        {SORT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </Select>
    </div>
  );
}