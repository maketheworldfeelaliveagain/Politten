import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { promises } from '../data/promises'
import { parties } from '../data/parties'

export default function PromiseDetail() {
  const { promiseId } = useParams()
  const promise = promises.find((item) => item.id === promiseId)
  if (!promise) return <section className="page-wrap inner-page"><h1 className="page-title">Pažadas nerastas</h1><Link to="/promises" className="text-link">Grįžti į pažadus</Link></section>
  const party = parties.find((item) => item.id === promise.partyId)
  return <section className="page-wrap inner-page"><Link className="back-link" to="/promises"><ArrowLeft size={15} /> Visi pažadai</Link><div className="eyebrow">{promise.topic} · Iliustracinis įrašas</div><h1 className="page-title">Pažado <span>detalės</span></h1><div className="empty-card detail-card"><div><span className="stat-label">Pažado tekstas</span><p>{promise.originalText}</p><span className="stat-label">Partija</span><p>{party ? <Link to={`/parties/${party.id}`}>{party.name}</Link> : 'Partija nenurodyta'}</p><span className="stat-label">Vertinimo būsena</span><p>{promise.statusExplanation}</p><span className="stat-label">Įrodymai</span><p>Patikrintų šaltinių dar nėra.</p></div></div></section>
}
