import { PackageResponse } from "~/types";
export const BASE_URL = 'https://open.canada.ca/data/en/api/3/action';

export async function fetchPackages({
  rows = 10,
  start = 0,
  q = '',
  sort = 'date_modified',
  sortDir = 'desc'
}): Promise<PackageResponse> {
  const params = new URLSearchParams({
    rows: `${rows}`,
    start: `${start}`,
    sort: `${sort} ${sortDir}`
  });

  if(q) {
    params.append('q', q);
  }
  const response = await fetch(`${BASE_URL}/package_search?${params.toString()}`);
  return response.json();
}
