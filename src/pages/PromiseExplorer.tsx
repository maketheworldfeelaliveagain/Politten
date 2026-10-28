import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { promises } from '../data/promises'
import { parties } from '../data/parties'

export default function PromiseExplorer() {
  return <section className="page-wrap inner-page">
    <Link className="back-link" to="/"><ArrowLeft size={15} /> Apžvalga</Link>
    <div className="eyebrow"><span className="eyebrow-line" /> Duomenų bazė</div>
    <h1 className="page-title">Pažadų <span>tyrinėtojas</span></h1>
    <p className="lead">Paieška po viešus partijų programų pažadus ir jų įgyvendinimo įrodymus.</p>
    <div className="search-box"><Search size={18} /><input aria-label="Pažadų paieška" placeholder="Ieškoti pagal pažadą, temą ar partiją" disabled /><span>Paieška netrukus</span></div>
    <div className="notice"><span className="status-dot" /><p><strong>Duomenų rengimas vyksta</strong><br />Šiuo metu turime {parties.length} rinkimų sąrašų įrašų ir {promises.length} aiškiai pažymėtus iliustracinius pavyzdžius. Jie nėra tikri partijų pažadai.</p></div>
    <p className="muted-note">Pažadų naršymo, filtravimo ir vertinimo funkcijos bus įgyvendintos kitame etape.</p>
  </section>
}
