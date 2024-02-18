import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { fetchPackages } from "~/api/openDataAPI";
import Paginator from "~/components/paginator";
import type { PackageMetadata } from "~/types";
import { getPageParams, getPageStart } from "~/util/paging";
import DatasetCard from "./dataset-card";
import SearchForm from "./search-form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort') ?? 'date_modified';
  const q = url.searchParams.get('q') ?? '';
  const pageParams = getPageParams(url) ?? { page: 1, limit: 10 };

  const data = await fetchPackages({
    q,
    sort,
    rows: pageParams.limit,
    start: getPageStart(pageParams),
  });
  return json({ ...pageParams, q, sort, data });
};

export default function Index() {
  const [_, setSearchParams] = useSearchParams();
  const { data, page, limit, q, sort } = useLoaderData<typeof loader>();

  const handlePageChange = ({ nextPage }: { nextPage: number }) => {
    setSearchParams((prev) => {
      prev.set("limit", limit.toString());
      prev.set("page", nextPage.toString());
      return prev;
    });
  };

  if (!data.success) {
    return (
      <div>Error: {data.error.message}</div>
    );
  }

  console.log(data);

  return (
    <div className="flex justify-center">
      <div className="w-100 max-w-screen-xl grid xs:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="col-span-1">
          <div className="sticky top-4">
            <SearchForm
              searchTerm={q}
              limit={limit}
              sort={sort}
            />
          </div>
        </div>
        <div className="xs:col-span-1 lg:col-span-3 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div>
              {data.result.count} Results
            </div>
            <Paginator
              isLoading={false}
              page={page}
              pageSize={limit}
              resultCount={data.result.count}
              onChange={handlePageChange}
            />
          </div>
          {data.result.results.map((dataset) => (
            <DatasetCard key={dataset.id} dataset={dataset as PackageMetadata} />
          ))}
        </div>
      </div>
    </div>
  );
}
