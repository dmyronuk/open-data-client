import type { PackageResource } from "~/types";

export default function DatasetResources({ resources }: { resources: PackageResource[] }) {
  const lang = 'en';

  return (
    <table>
      <thead>
        <tr className="text-sm font-medium">
          <td className="p-2">Name</td>
          <td className="p-2">Type</td>
          <td className="p-2">Format</td>
          <td className="p-2">Language</td>
          <td className="p-2">Link</td>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource) => (
          <tr
            key={resource.id}
            className="border-t border-slate-200 text-gray-500"
          >
            <td className="p-2 text-black">
              {resource.name_translated[lang] ?? ''}
            </td>
            <td className="p-2">
              {resource.resource_type}
            </td>
            <td className="p-2">
              {resource.format}
            </td>
            <td className="p-2">
              {resource.language.join(', ')}
            </td>
            <td className="p-2">
              <a href={resource.url} target="_blank" rel="noreferrer">
                link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}