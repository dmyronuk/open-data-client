import { useState } from "react";
import { PackageMetadata } from "~/types";
import Pill from "~/components/pill";
import DatasetResources from "./dataset-resourses";

export default function DatasetCard({ dataset }: { dataset: PackageMetadata }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const lang = 'en';
  const keywords = dataset.keywords[lang] ?? [];
  const dateFormatted = new Intl.DateTimeFormat('en-US', { year: "numeric", month: "long", day: "numeric" })
    .format(new Date(dataset.date_published));

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-1 shadow border border rounded p-4 bg-white">
      <div className="flex gap-2 justify-between">
        <h6 className="text-lg font-medium">
          {dataset.title}
        </h6>
        <div className="whitespace-nowrap">
          {dateFormatted}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {keywords.slice(0, 3).map(keyword => (
          <Pill key={keyword} text={keyword} />
        ))}
      </div>
      <button onClick={toggleExpanded}>
        +
      </button>
      {isExpanded && (
        <>
          <div className="m-2 border-t border-slate-200" />
          <div className="flex flex-col gap-1">
            <DatasetResources resources={dataset.resources} />
          </div>
        </>
      )}
    </div>
  );
}