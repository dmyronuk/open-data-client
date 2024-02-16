export interface PackageMetadata {
  association_type: unknown[];
  author: string | null;
  author_email: string;
  data_series_issue_identification: { [lang: string]: string };
  id: string;
  imso_approval: string;
  maintainer: null;
  contributor: { [lang: string]: string };
  creator: string;
  creator_user_id: string;
  digital_object_identifier: string;
  org_section: { [lang: string]: string };
  jurisdiction: string,
  private: boolean,
  maintainer_email: string;
  num_tags: 0;
  frequency: string;
  keywords:  { [lang: string]: string[] };
  ready_to_publish: string;
  metadata_created: string;
  notes_translated: { [lang: string]: string };
  subject: string[];
  spatial_representation_type: unknown[];
  metadata_modified: string;
  geographic_region: unknown[];
  position_name: unknown;
  portal_release_date: string;
  relationships_as_object: unknown[];
  state: string;
  title: string;
  title_translated: { [lang: string]: string };
  topic_category: string[];
  type: string;
  url: string | null;
  version: string | null;
}

export interface PackageResponse {
	help: string;
	success: boolean;
	result: {
    count: number;
    facets: unknown;
    results: PackageMetadata[];
    sort: string;
    search_facets: unknown;
  }
}