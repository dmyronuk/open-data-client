import { PackageResponse } from "~/types";
export const BASE_URL = 'https://open.canada.ca/data/en/api/3/action';

export async function fetchPackages({ rows = 10, start = 1 }): Promise<PackageResponse> {
  const params = new URLSearchParams({ rows: rows.toString(), start: start.toString() });
  const response = await fetch(`${BASE_URL}/package_search?${params.toString()}`);
  return response.json();
}