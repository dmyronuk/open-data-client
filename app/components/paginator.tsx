import Button from './button';

interface PaginatorProps {
  isLoading: boolean;
  page: number;
  totalPages: number;
  onChange: ({ nextPage }: { nextPage: number }) => void;
}

export default function Paginator({ isLoading, page, totalPages, onChange }: PaginatorProps) {
  const handlePrev = () => {
    onChange({ nextPage: page - 1 });
  };

  const handleNext = () => {
    onChange({ nextPage: page + 1 });
  };

  return (
    <div className="flex gap-2">
      <Button disabled={page <= 1 || isLoading} onClick={handlePrev}>
        Prev
      </Button>
      <Button>Page {page}</Button>
      <Button disabled={page >= totalPages || isLoading} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}