import { Form, useNavigation } from "@remix-run/react";
import Button from '~/components/button';
import Input from "~/components/input";
import Label from "~/components/label";
import Select from "~/components/select";

const SORT_OPTIONS = [
  { value: 'date_modified', label: 'Modified' },
  { value: 'date_published', label: 'Published' },
  { value: 'score', label: 'Best Match' }
];

const LIMIT_OPTIONS = [10, 50, 100];

interface SearchFormProps {
  searchTerm: string;
  limit: number;
  sort: string;
}

export default function SearchForm({ searchTerm, limit, sort }: SearchFormProps) {
  const navigation = useNavigation();

  return (
    <Form
      action='/'
      className="w-full h-full flex flex-col p-4 border border-slate-200 rounded bg-white"
      id="query-form"
      method="GET"
      role="search"
    >
      <Label htmlFor="q">
        Query
      </Label>
      <Input
        className="mb-3"
        defaultValue={searchTerm}
        id="search-term"
        name="q"
      />
      <Label htmlFor="limit">
        Limit
      </Label>
      <Select
        className="mb-3"
        defaultValue={limit}
        name="limit"
      >
        {LIMIT_OPTIONS.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </Select>
      <Label htmlFor="sort">
        Sort
      </Label>
      <Select
        className="mb-3"
        defaultValue={sort}
        name="sort"
      >
        {SORT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </Select>
      <Button
        className="mt-3"
        isLoading={navigation.state === 'loading'}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}