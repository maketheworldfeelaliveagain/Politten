import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { ArrowUpRight, Landmark } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import PartyProfile from './pages/PartyProfile'
import PromiseDetail from './pages/PromiseDetail'
import Methodology from './pages/Methodology'
import NotFound from './pages/NotFound'
import PromiseExplorer from './pages/PromiseExplorer'

const navigation = [
  { to: '/', label: 'Apžvalga', end: true },
  { to: '/promises', label: 'Pažadai' },
  { to: '/methodology', label: 'Metodika' },
]

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="brand" aria-label="Politten pradžia">
            <span className="brand-mark"><Landmark size={19} strokeWidth={2.1} /></span>
            <span>polit<span className="brand-dot">ten</span><small>Pilietiškas pažadų stebėjimas</small></span>
          </NavLink>
          <nav className="main-nav" aria-label="Pagrindinė navigacija">
            {navigation.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end}>{label}</NavLink>
            ))}
          </nav>
          <a className="edition-link" href="https://www.vrk.lt/" target="_blank" rel="noreferrer">
            2024 m. Seimas <ArrowUpRight size={14} />
          </a>
        </div>
      </header>
      <main className="main-content"><Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/promises" element={<PromiseExplorer />} />
        <Route path="/parties/:partyId" element={<PartyProfile />} />
        <Route path="/promises/:promiseId" element={<PromiseDetail />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="*" element={<NotFound />} />
      </Routes></main>
      <footer className="site-footer"><span>Politten <span aria-hidden="true">·</span> Nepriklausomas pilietinis projektas</span><span>Pažadai nėra faktai — vertinimai turi remtis įrodymais.</span></footer>
    </div>
  )
}

export default function App() {
  return <BrowserRouter><Layout /></BrowserRouter>
}
