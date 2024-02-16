import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchPackages } from "~/api/openDataAPI";
import DatasetCard from "~/components/DatasetCard";
import type { PackageResponse } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const data = await fetchPackages({ rows: 2, start: 10 });
  return json({ data });
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>() as { data: PackageResponse };
  return (
    <div className="flex flex-col gap-2 p-2 bg-slate-300">
      {data.result.results.map((dataset) => (
        <DatasetCard key={dataset.id} dataset={dataset} />
      ))}
    </div>
  );
}
