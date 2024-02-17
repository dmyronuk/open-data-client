export function getPageParams(url: URL): { page: number, limit: number } | null {
  const page = parseInt(url.searchParams.get("page") as string);
  const limit = parseInt(url.searchParams.get("limit") as string);
  return Number.isNaN(page) || Number.isNaN(limit) ? null : { page, limit };
}

export function getPageStart({ page, limit }: { page: number; limit: number }): number {
  return (page - 1) * limit;
}