export interface PackageResource {
  cache_last_updated: string | null;
  cache_url: string | null;
  character_set: string;
  created: string; // ISO timestamp
  data_quality: unknown[];
  datastore_active: boolean;
  datastore_contains_all_records_of_source_file: boolean;
  date_published: string;
  description: string | null;
  format: string; // "XML"
  hash: string;
  id: string;
  language: string[];
  last_modified: string; // ISO timestamp
  metadata_modified: string; // ISO timestamp
  mimetype: string | null;
  mimetype_inner: string | null;
  name: string;
  name_translated: { [lang: string]: string };
  package_id: string;
  position: number;
  resource_type: string;
  state: string;
  unique_identifier: string;
  url: string;
  url_type: string;
  validation_options: {
    row_limit: string; // numeric string eg '100'
  },
  validation_status: string;
  validation_timestamp: string;
}

export interface PackageMetadata {
  association_type: unknown[];
  author: string | null;
  author_email: string;
  collection: string;
  contributor: { [lang: string]: string };
  creator: string;
  creator_user_id: string;
  date_modified: string;
  date_published: string;
  data_series_name: { [lang: string]: string };
  data_series_issue_identification: { [lang: string]: string };
  digital_object_identifier: string;
  frequency: string;
  geographic_region: unknown[];
  id: string;
  isopen: boolean;
  imso_approval: string;
  jurisdiction: string,
  keywords:  { [lang: string]: string[] };
  license_id: string;
  license_url: string;
  maintainer: null;
  maintainer_email: string;
  notes: string;
  num_resources: number;
  num_tags: 0;
  org_section: { [lang: string]: string };
  org_title_at_publication: { [lang: string]: string };
  position_name: unknown;
  portal_release_date: string;
  place_of_publication: string[];
  private: boolean,
  metadata_created: string;
  metadata_modified: string;
  notes_translated: { [lang: string]: string };
  ready_to_publish: string;
  relationships_as_object: unknown[];
  relationships_as_subject: unknown[];
  resources: PackageResource[];
  restrictions: string;
  revision_id: string;
  subject: string[];
  spatial_representation_type: unknown[];
  state: string;
  title: string;
  title_translated: { [lang: string]: string };
  topic_category: string[];
  type: string;
  url: string | null;
  version: string | null;
}

export interface PackageSuccessResponse {
	help: string;
	success: true;
	result: {
    count: number;
    facets: unknown;
    results: PackageMetadata[];
    sort: string;
    search_facets: unknown;
  }
}

export interface PackageErrorResponse {
  error: {
    message: string;
    __type: string;
  };
	help: string;
	success: false
}

export type PackageResponse = PackageSuccessResponse | PackageErrorResponse;