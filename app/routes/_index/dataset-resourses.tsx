import { Fragment } from "react";
import type { PackageResource } from "~/types";

export default function DatasetResources({ resources }: { resources: PackageResource[] }) {
  const lang = 'en';

  return (
    <div className="grid grid-cols-5">
      <div>name</div>
      <div>type</div>
      <div>format</div>
      <div>language</div>
      <div>link</div>
      {resources.map((resource) => (
        <Fragment key={resource.id}>
          <div>{resource.name_translated[lang] ?? ''}</div>
          <div>{resource.format}</div>
          <div>{resource.resource_type}</div>
          <div>{resource.language}</div>
          <a href={resource.url} target="_blank" rel="noreferrer">
            link
          </a>
        </Fragment>
      ))}
    </div>
  );
}