import { Link } from 'react-router-dom'
import { ArrowRight, BadgeInfo, BookOpenCheck, CircleHelp, ExternalLink, Landmark, Search } from 'lucide-react'
import PromiseCard from '../components/PromiseCard'
import { parties, promises } from '../data/parties'
import { calculateProgress } from '../utils/calculateProgress'

const overall = calculateProgress(promises)

export default function Dashboard() {
  return <div className="dashboard-page">
    <section className="hero section-width">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot" /> Pilietinis pažadų stebėjimas <span className="hero-divider">/</span> Seimas 2024</div>
        <h1>Pažadai.<br /><span>Darbai. Įrodymai.</span></h1>
        <p className="hero-lead">Ką žadėjo Lietuvos partijos — ir ar pažadai virsta realiais darbais? Naršykite, lyginkite ir patikrinkite kiekvieną teiginį.</p>
        <div className="hero-actions"><Link to="/promises" className="primary-button">Naršyti pažadus <ArrowRight size={16} /></Link><Link to="/methodology" className="subtle-link">Kaip vertiname <span>↗</span></Link></div>
      </div>
      <aside className="hero-card">
        <div className="hero-card-heading"><span className="hero-card-icon"><Landmark size={18} /></span><span>Stebime 2024–2028 m. kadenciją</span></div>
        <div className="hero-number-row"><div><span>Vertinamas pažangumas</span><strong>{overall.percentage === null ? '—' : `${overall.percentage}%`}</strong></div><div className="hero-completion" aria-label="Bendras įgyvendinimas"><div style={{ width: `${overall.percentage ?? 0}%` }} /></div></div>
        <div className="hero-card-bottom"><span><b>{parties.length}</b> rinkimų sąrašų</span><span><b>{promises.length}</b> pavyzdinių pažadų</span></div>
        <div className="hero-data-note"><BadgeInfo size={14} /> Duomenys iliustraciniai, ne faktiniai vertinimai</div>
      </aside>
      <div className="hero-stamp" aria-hidden="true">2024<br /><span>LT</span></div>
    </section>

    <section className="section-width quick-stats" aria-label="Apžvalgos rodikliai">
      <div><span className="quick-icon red"><Landmark size={17} /></span><span><strong>{parties.length}</strong><small>Rinkimų sąrašų</small></span></div>
      <div><span className="quick-icon blue"><BookOpenCheck size={17} /></span><span><strong>{promises.length}</strong><small>Pažadų pavyzdžių</small></span></div>
      <div><span className="quick-icon yellow"><CircleHelp size={17} /></span><span><strong>{overall.assessable}</strong><small>Vertinamų pažadų</small></span></div>
      <Link to="/methodology" className="quick-note"><span className="info-mark">i</span><span>Procentas yra orientacinis įvertis,<br />o ne oficialus reitingas.</span><ArrowRight size={15} /></Link>
    </section>

    <section className="section-width party-section">
      <div className="section-heading"><div><span className="section-kicker">PARTIJOS IR SĄRAŠAI</span><h2>Žvilgsnis į pažadus</h2></div><Link to="/promises" className="all-link">Visi pažadai <ArrowRight size={15} /></Link></div>
      <div className="party-grid">{parties.map((party, index) => {
        const partyPromises = promises.filter((item) => item.partyId === party.id)
        const progress = calculateProgress(partyPromises)
        return <Link to={`/parties/${party.id}`} className="party-card" key={party.id}>
          <div className={`party-mark tone-${index % 5}`}>{party.initials}</div>
          <div className="party-card-main"><span className="party-number">SĄRAŠAS NR. {party.number}</span><h3>{party.name}</h3><span className="party-promises-count">{partyPromises.length} pažadai · {progress.assessable} vertinami</span></div>
          <div className="party-progress"><strong>{progress.percentage === null ? '—' : `${progress.percentage}%`}</strong><span className="mini-track"><i style={{ width: `${progress.percentage ?? 0}%` }} /></span></div>
          <ArrowRight className="party-arrow" size={16} />
        </Link>
      })}</div>
      <p className="party-source">Rinkimų sąrašų pavadinimai: <a href="https://www.vrk.lt/kandidatu-sarasu-igarsintos-rinkimu-programos-ir-kandidatu-sarasai-sei-2024" target="_blank" rel="noreferrer">Vyriausioji rinkimų komisija <ExternalLink size={12} /></a></p>
    </section>

    <section className="section-width recent-section"><div className="section-heading"><div><span className="section-kicker">PAŽADŲ PAIEŠKA</span><h2>Pažadai, kuriuos verta stebėti</h2></div><Link to="/promises" className="all-link">Atidaryti paiešką <Search size={15} /></Link></div><div className="recent-grid">{promises.slice(0, 3).map((item) => <PromiseCard key={item.id} item={item} />)}</div></section>
    <section className="section-width transparency-bar"><div><span className="transparency-icon"><BadgeInfo size={17} /></span><span><strong>Skaidrumas prasideda nuo šaltinių.</strong><small>Visi šioje versijoje rodomi pažadai ir jų būsenos yra išgalvoti, skirti tik prototipui pademonstruoti.</small></span></div><Link to="/methodology">Susipažinti su metodika <ArrowRight size={14} /></Link></section>
  </div>
}
