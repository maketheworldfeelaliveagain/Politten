import { Link } from 'react-router-dom'
import type { Promise, PromiseStatus } from '../types'
import { parties } from '../data/parties'

export const statusLabels: Record<PromiseStatus, string> = {
  fulfilled: 'Įvykdyta',
  partially_fulfilled: 'Iš dalies įvykdyta',
  in_progress: 'Vykdoma',
  not_fulfilled: 'Neįvykdyta',
  cannot_verify: 'Negalima patikrinti',
}

export function StatusBadge({ status }: { status: PromiseStatus }) {
  return <span className={`status-badge status-${status}`}>{statusLabels[status]}</span>
}

export default function PromiseCard({ item }: { item: Promise }) {
  const party = parties.find((entry) => entry.id === item.partyId)
  return <article className="promise-card">
    <div className="promise-card-top"><span className="topic-tag">{item.topic}</span><StatusBadge status={item.status} /></div>
    <Link className="promise-card-title" to={`/promises/${item.id}`}>{item.originalText}</Link>
    <div className="promise-card-bottom">
      {party ? <Link to={`/parties/${party.id}`} className="party-inline"><span className="party-mark mini">{party.initials}</span>{party.name}</Link> : null}
      <span>Atnaujinta {new Date(`${item.lastUpdated}T12:00:00`).toLocaleDateString('lt-LT')}</span>
    </div>
  </article>
}
