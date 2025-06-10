export interface GlaDataJson {
  id: string
  site: string
  slug: string
  createdAt: string
  updatedAt: string
  london_smallest_geography: string
  descriptionIframe: string
  author: string
  author_email: string
  maintainer: string
  maintainer_email: string
  update_frequency: string
  licence: string
  description: string
  tags: string[]
  topics: string[]
  resources: Record<string,GlaDataResource>
  parent: string
  state: string
  title: string
  sharing: string
  shares: Shares
  readonly: Readonly
}

 export interface GlaDataResource {
  url: string
  order: number
  title: string
  format: string
  origin: string
  check_hash: string
  check_size: number
  description: string
  check_mimetype: string
  london_res_geo: any[]
  check_timestamp: string
  check_http_status: number
  temporal_coverage_to: string
  temporal_coverage_from: string
}

export interface Shares {
  orgs: any[]
  users: any[]
}

export interface Readonly {
  parent: Parent
  licence: Licence
  topics: Record<string,Topic>
}

export interface Parent {
  id: string
  slug: string
  title: string
  img: string
}

export interface Licence {
  title: string
  url: string
  is_okd_compliant: boolean
}

export interface Topic {
  img: string
  slug: string
  title: string
}