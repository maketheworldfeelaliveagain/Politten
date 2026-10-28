import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PromiseCard from '../components/PromiseCard'
import { ILLUSTRATIVE_DATA_NOTICE, parties, promises } from '../data/parties'
import { calculateProgress } from '../utils/calculateProgress'

export default function PartyProfile() {
  const { partyId } = useParams()
  const party = parties.find((item) => item.id === partyId)
  if (!party) return <section className="section-width inner-page"><h1 className="page-title">Partija nerasta</h1><Link to="/promises" className="all-link">Grįžti į pažadus <ArrowRight size={14} /></Link></section>
  const partyPromises = promises.filter((item) => item.partyId === party.id)
  const progress = calculateProgress(partyPromises)
  return <section className="section-width inner-page party-profile">
    <Link className="back-link" to="/"><ArrowLeft size={14} /> Visos partijos</Link>
    <div className="profile-heading"><span className="party-mark profile-mark">{party.initials}</span><div><span className="section-kicker">2024 M. RINKIMŲ SĄRAŠAS NR. {party.number}</span><h1 className="page-title">{party.name}</h1></div></div>
    <div className="profile-stats"><div><span>Pažadų pavyzdžiai</span><strong>{partyPromises.length}</strong></div><div><span>Vertinami pažadai</span><strong>{progress.assessable}</strong></div><div><span>Įgyvendinimo rodiklis</span><strong>{progress.percentage === null ? 'Insufficient data' : `${progress.percentage}%`}</strong><small>{progress.percentage === null ? 'Nepakanka vertinamų duomenų' : 'Iliustracinis įvertis'}</small></div></div>
    <div className="profile-disclaimer"><span className="disclosure-mark">i</span>{ILLUSTRATIVE_DATA_NOTICE}</div>
    <div className="section-heading profile-section-heading"><div><span className="section-kicker">TEMOS, BŪSENOS, PAŽADAI</span><h2>Šio sąrašo pažadai</h2></div></div>
    <div className="promise-list">{partyPromises.map((item) => <PromiseCard key={item.id} item={item} />)}</div>
  </section>
}
