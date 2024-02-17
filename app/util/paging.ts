export function getPageParams(url: URL): { page: number, limit: number } {
  const page = parseInt(url.searchParams.get("page") as string);
  const limit = parseInt(url.searchParams.get("limit") as string);
  return {
    page: Number.isNaN(page) ? 1 : page,
    limit: Number.isNaN(limit) ? 10 : limit
  };
}

export function getPageStart({ page, limit }: { page: number; limit: number }): number {
  return (page - 1) * limit;
}