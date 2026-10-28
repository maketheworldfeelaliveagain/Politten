import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CalendarDays, ExternalLink } from 'lucide-react'
import { evidence, ILLUSTRATIVE_DATA_NOTICE, parties, promises } from '../data/parties'
import { StatusBadge } from '../components/PromiseCard'

export default function PromiseDetail() {
  const { promiseId } = useParams()
  const item = promises.find((entry) => entry.id === promiseId)
  if (!item) return <section className="section-width inner-page"><h1 className="page-title">Pažadas nerastas</h1><Link to="/promises" className="all-link">Grįžti į pažadus <ArrowUpRight size={14} /></Link></section>
  const party = parties.find((entry) => entry.id === item.partyId)
  const relatedEvidence = evidence.filter((entry) => entry.promiseId === item.id)
  return <section className="section-width inner-page promise-detail-page">
    <Link className="back-link" to={party ? `/parties/${party.id}` : '/promises'}><ArrowLeft size={14} /> {party?.name ?? 'Visi pažadai'}</Link>
    <div className="detail-layout"><main className="detail-main"><span className="section-kicker">PAŽADO KORTELĖ <span className="hero-divider">/</span> {item.topic}</span><h1 className="detail-title">{item.originalText}</h1><div className="detail-meta"><StatusBadge status={item.status} /><span><CalendarDays size={14} /> Atnaujinta {new Date(`${item.lastUpdated}T12:00:00`).toLocaleDateString('lt-LT')}</span></div>
      <section className="detail-block"><span className="section-kicker">PAŽADO STATUSAS</span><h2>{item.status === 'cannot_verify' ? 'Nepakanka duomenų patikrai' : 'Ką rodo vertinimas?'}</h2><p>{item.statusExplanation}</p></section>
      <section className="detail-block"><div className="block-title-row"><div><span className="section-kicker">PATVIRTINANTYS ŠALTINIAI</span><h2>Įrodymai</h2></div><span className="count-chip evidence-count">{relatedEvidence.length}</span></div>
        {relatedEvidence.length ? <div className="evidence-list">{relatedEvidence.map((source) => <article className="evidence-card" key={source.id}><div className="evidence-heading"><span className="evidence-type">{source.publisher}</span><span>{source.publicationDate ? new Date(`${source.publicationDate}T12:00:00`).toLocaleDateString('lt-LT') : 'Data nenurodyta'}</span></div><h3>{source.title}</h3><p className="evidence-excerpt">„{source.excerpt}“</p><div className="evidence-relevance"><strong>Ryšys su pažadu</strong><p>{source.relevanceExplanation}</p></div>{source.url ? <a className="source-link" href={source.url} target="_blank" rel="noreferrer">Atverti pirminį šaltinį <ExternalLink size={13} /></a> : <span className="source-unavailable">Tikra šaltinio nuoroda nepateikiama</span>}</article>)}</div> : <div className="no-evidence"><span className="disclosure-mark">i</span><div><strong>Patikrintų šaltinių nėra</strong><p>Šio pavyzdinio pažado įrodymai nebuvo tyrinėti. Nuorodos ar citatos neišgalvojame.</p></div></div>}
      </section>
    </main><aside className="detail-sidebar"><div className="sidebar-box"><span className="section-kicker">PAŽADĄ PATEIKĖ</span>{party && <Link to={`/parties/${party.id}`} className="detail-party-link"><span className="party-mark">{party.initials}</span><span><strong>{party.name}</strong><small>Rinkimų sąrašas nr. {party.number}</small></span><ArrowUpRight size={15} /></Link>}</div><div className="sidebar-box"><span className="section-kicker">POLITIKOS TEMA</span><span className="topic-tag sidebar-topic">{item.topic}</span></div><div className="sidebar-box"><span className="section-kicker">DUOMENŲ PASTABA</span><p>{ILLUSTRATIVE_DATA_NOTICE}</p></div><Link className="sidebar-method-link" to="/methodology">Kaip skaičiuojame? <ArrowUpRight size={14} /></Link></aside></div>
  </section>
}
