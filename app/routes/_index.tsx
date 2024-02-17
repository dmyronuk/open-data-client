import { json } from "@remix-run/node";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { ChangeEvent } from "react";
import { fetchPackages } from "~/api/openDataAPI";
import DatasetCard from "~/components/DatasetCard";
import Input from "~/components/Input";
import Paginator from "~/components/Paginator";
import type { PackageMetadata } from "~/types";
import { getPageParams, getPageStart } from "~/util/paging";

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

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("q", event.target.value);
      return prev;
    });
  };

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
    <div className="w-100 flex flex-col items-center p-4">
      <div className="max-w-screen-md flex flex-col gap-3">
        <Input name="search" onChange={handleQueryChange} />
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
