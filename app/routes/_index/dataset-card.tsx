import { useState } from "react";
import { PackageMetadata } from "~/types";
import Pill from "~/components/pill";
import DatasetResources from "./dataset-resourses";
import TextButton from "~/components/text-button";
import { defaultDateFormat } from "~/util/dates";

export default function DatasetCard({ dataset }: { dataset: PackageMetadata }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const lang = "en";
  const keywords = dataset.keywords[lang] ?? [];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-1 shadow border border rounded p-4 bg-white">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="mb-3">
            <h6 className="text-lg font-medium">
              {dataset.title}
            </h6>
            <p className="">
              {dataset.org_title_at_publication[lang]}
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {keywords.slice(0, 5).map(keyword => (
              <Pill key={keyword} text={keyword} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-gray-500 text-sm whitespace-nowrap">
            {dataset.date_modified != null && (
              <p>
                Modified: {defaultDateFormat.format(new Date(dataset.date_modified))}
              </p>
            )}
            {dataset.date_published != null && (
              <p>
                Published: {defaultDateFormat.format(new Date(dataset.date_published))}
              </p>
            )}
          </div>
          <TextButton
            onClick={toggleExpanded}
          >
            {isExpanded ? "Hide Resources" : "Show Resources"}
          </TextButton>
        </div>
      </div>
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