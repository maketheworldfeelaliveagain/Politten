import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { ArrowUpRight, Landmark } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import PartyProfile from './pages/PartyProfile'
import PromiseDetail from './pages/PromiseDetail'
import Methodology from './pages/Methodology'
import NotFound from './pages/NotFound'
import PromiseExplorer from './pages/PromiseExplorer'

function Layout() {
  return <div className="app-shell"><header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="Politten pradžia"><span className="brand-mark"><Landmark size={19} strokeWidth={2} /></span><span>polit<span className="brand-dot">ten</span><small>Pilietiškas pažadų stebėjimas</small></span></Link>
    <nav className="main-nav" aria-label="Pagrindinė navigacija"><NavLink to="/" end>Apžvalga</NavLink><NavLink to="/promises">Pažadai</NavLink><NavLink to="/methodology">Metodika</NavLink></nav>
    <a className="edition-link" href="https://www.vrk.lt/2024-seimo/rezultatai" target="_blank" rel="noreferrer">Seimas 2024 <ArrowUpRight size={14} /></a>
  </div></header><main className="main-content"><Routes><Route path="/" element={<Dashboard />} /><Route path="/promises" element={<PromiseExplorer />} /><Route path="/parties/:partyId" element={<PartyProfile />} /><Route path="/promises/:promiseId" element={<PromiseDetail />} /><Route path="/methodology" element={<Methodology />} /><Route path="*" element={<NotFound />} /></Routes></main><footer className="site-footer"><div><span className="footer-brand">polit<span>ten</span></span><span>Nepriklausomas pilietinis projektas</span></div><span>Pažadai yra teiginiai. Vertinimai turi būti paremti įrodymais.</span></footer></div>
}
export default function App() { return <BrowserRouter><Layout /></BrowserRouter> }
