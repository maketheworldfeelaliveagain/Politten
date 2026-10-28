import { Link } from 'react-router-dom'
import { ArrowRight, BadgeInfo } from 'lucide-react'

export default function Dashboard() {
  return <section className="page-wrap">
    <div className="eyebrow"><span className="eyebrow-line" /> 2024–2028 m. kadencija</div>
    <h1>Rinkimų pažadai.<br /><span>Patikrinti darbai.</span></h1>
    <p className="lead">Supraskite, ką partijos žadėjo ir ką iš tiesų nuveikė. Kiekvienas vertinimas turi būti aiškus, patikrinamas ir paremtas šaltiniais.</p>
    <div className="notice"><BadgeInfo size={19} /><p><strong>Projekto pradžia</strong><br />Pažadų ir jų įgyvendinimo tyrimas dar rengiamas. Šiuo metu nerodome nepatikrintų politinių vertinimų.</p></div>
    <div className="stat-row">
      <div><span className="stat-label">Stebimos rinkimų programos</span><strong>15</strong><small>VRK registruoti 2024 m. sąrašai</small></div>
      <div><span className="stat-label">Patikrinti pažadai</span><strong>0</strong><small>Įrodymais pagrįstas vertinimas</small></div>
      <div><span className="stat-label">Vertinimo principas</span><strong className="stat-word">Skaidrumas</strong><small>Kiekvienas teiginys — su kontekstu</small></div>
    </div>
    <div className="section-head"><div><div className="eyebrow">Tyrimo eiga</div><h2>Pažadai, kuriuos dar tikrinsime</h2></div><Link className="text-link" to="/promises">Visi pažadai <ArrowRight size={16} /></Link></div>
    <div className="empty-card"><span className="empty-icon"><BadgeInfo size={21} /></span><div><strong>Patikimų vertinimų dar nėra</strong><p>Kol renkame programų tekstus ir šaltinius, šiame prototipe pateikiami tik aiškiai pažymėti demonstraciniai įrašai.</p></div></div>
    <p className="disclaimer">Ši svetainė nėra susijusi su politinėmis partijomis. Rinkimų sąrašo pavadinimai pateikiami informaciniais tikslais.</p>
  </section>
}
