import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { parties } from '../data/parties'

export default function PartyProfile() {
  const { partyId } = useParams()
  const party = parties.find((item) => item.id === partyId)
  if (!party) return <section className="page-wrap inner-page"><h1 className="page-title">Partija nerasta</h1><Link to="/promises" className="text-link">Grįžti į pažadus</Link></section>
  return <section className="page-wrap inner-page"><Link className="back-link" to="/promises"><ArrowLeft size={15} /> Visos partijos</Link><div className="eyebrow">2024 m. rinkimų sąrašas</div><h1 className="page-title">{party.name}</h1><p className="lead">Partijos pažadų apžvalga bus pateikta tik surinkus ir patikrinus programos tekstus bei įrodymus.</p><div className="notice"><p><strong>Duomenų būsena: iliustracinė</strong><br />Rinkimų sąrašo pavadinimas paremtas VRK protokolu. Pažadų vertinimų dar nėra.</p></div></section>
}
