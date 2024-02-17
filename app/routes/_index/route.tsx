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
  const pageParams = getPageParams(url) ?? { page: 1, limit: 10 };
  const data = await fetchPackages({
    q: url.searchParams.get('q') ?? '',
    rows: pageParams.limit,
    start: getPageStart(pageParams)
  });
  return json({ ...pageParams, data });
};

export default function Index() {
  const [_, setSearchParams] = useSearchParams();
  const { data, page, limit } = useLoaderData<typeof loader>();

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

  return (
    <div className="w-100 grid xs:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="col-span-1">
        <div className="sticky top-4">
          <SearchForm />
        </div>
      </div>
      <div className="xs:col-span-1 md:col-span-3 flex flex-col gap-3">
        <Paginator
          isLoading={false}
          page={page}
          totalPages={data.result.count}
          onChange={handlePageChange}
        />
        {data.result.results.map((dataset) => (
          <DatasetCard key={dataset.id} dataset={dataset as PackageMetadata} />
        ))}
      </div>
    </div>
  );
}
