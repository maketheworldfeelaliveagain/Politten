export type PromiseStatus = 'fulfilled' | 'partially_fulfilled' | 'in_progress' | 'not_fulfilled' | 'cannot_verify'
export type DataSourceType = 'real' | 'illustrative' | 'unverified'
export type EvidenceType = 'official' | 'news' | 'illustrative'

export interface Party {
  id: string
  name: string
  slug: string
  initials: string
  number: number
  dataSourceType: DataSourceType
}

export interface Promise {
  id: string
  partyId: string
  originalText: string
  topic: string
  status: PromiseStatus
  statusExplanation: string
  lastUpdated: string
  dataSourceType: DataSourceType
  evidenceIds: string[]
}

export interface Evidence {
  id: string
  promiseId: string
  title: string
  publisher: string
  publicationDate?: string
  excerpt: string
  url?: string
  evidenceType: EvidenceType
  relevanceExplanation: string
}
