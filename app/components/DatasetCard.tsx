import { PackageMetadata } from "~/types";

export default function DatasetCard({ dataset }: { dataset: PackageMetadata }) {
  const keywords = dataset.keywords['en'] ?? [];
  return (
    <div className="shadow border border rounded p-2 bg-white">
      <div>
        title: {dataset.title}
      </div>
      <div>
        id: {dataset.id}
      </div>
      <div className="flex gap-1">
        keywords:
        {keywords.map(keyword => <span key={keyword}>{keyword}</span>)}
      </div>
    </div>
  );
}