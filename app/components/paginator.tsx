import Button from "./button";

interface PaginatorProps {
  isLoading: boolean;
  page: number;
  pageSize: number;
  resultCount: number;
  onChange: ({ nextPage }: { nextPage: number }) => void;
}

export default function Paginator({ isLoading, page, resultCount, pageSize, onChange }: PaginatorProps) {
  const totalPages = Math.ceil(resultCount / pageSize);

  const handlePrev = () => {
    onChange({ nextPage: page - 1 });
  };

  const handleNext = () => {
    onChange({ nextPage: page + 1 });
  };

  return (
    <div className="flex items-center gap-2">
      <div>
        Page {page}
      </div>
      <Button disabled={page <= 1 || isLoading} onClick={handlePrev}>
        Prev
      </Button>
      <Button disabled={page >= totalPages || isLoading} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}