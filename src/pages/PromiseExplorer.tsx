import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Search, SlidersHorizontal, X } from 'lucide-react'
import { parties, promises } from '../data/parties'
import type { PromiseStatus } from '../types'
import PromiseCard, { statusLabels } from '../components/PromiseCard'
import { filterPromises } from '../utils/filterPromises'

export default function PromiseExplorer() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const partyFilter = params.get('party') ?? 'all'
  const statusFilter = params.get('status') ?? 'all'
  const topicFilter = params.get('topic') ?? 'all'
  const topics = [...new Set(promises.map((item) => item.topic))].sort((a, b) => a.localeCompare(b, 'lt'))
  const filtered = useMemo(() => {
    const textFiltered = filterPromises(promises, query).filter((item) => {
      const party = parties.find((entry) => entry.id === item.partyId)
      return !party || `${party.name} ${party.initials}`.toLocaleLowerCase('lt-LT').includes(query.trim().toLocaleLowerCase('lt-LT')) || item.originalText.toLocaleLowerCase('lt-LT').includes(query.trim().toLocaleLowerCase('lt-LT')) || item.topic.toLocaleLowerCase('lt-LT').includes(query.trim().toLocaleLowerCase('lt-LT'))
    })
    return textFiltered.filter((item) => (partyFilter === 'all' || item.partyId === partyFilter) && (statusFilter === 'all' || item.status === statusFilter) && (topicFilter === 'all' || item.topic === topicFilter))
  }, [query, partyFilter, statusFilter, topicFilter])
  const setFilter = (key: string, value: string) => setParams((current) => {
    if (value === 'all') current.delete(key)
    else current.set(key, value)
    return current
  })
  const hasFilters = query || partyFilter !== 'all' || statusFilter !== 'all' || topicFilter !== 'all'
  const reset = () => { setQuery(''); setParams({}) }

  return <section className="section-width inner-page explorer-page">
    <Link to="/" className="back-link"><ArrowLeft size={14} /> Apžvalga</Link>
    <div className="page-title-row"><div><span className="section-kicker">DUOMENŲ BAZĖ</span><h1 className="page-title">Pažadų <span>tyrinėtojas</span></h1><p className="page-lead">Ieškokite, filtruokite ir peržiūrėkite 2024 m. rinkimų sąrašų pažadų pavyzdžius.</p></div><div className="count-chip">{filtered.length} <span>iš {promises.length} pažadų</span></div></div>
    <div className="filter-panel"><label className="explorer-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ieškoti pažado, temos ar partijos" aria-label="Ieškoti pažado, temos ar partijos" />{query && <button type="button" aria-label="Išvalyti paiešką" onClick={() => setQuery('')}><X size={15} /></button>}</label><div className="filter-row"><span className="filter-label"><SlidersHorizontal size={14} /> FILTRUOTI</span><label><span className="sr-only">Partija</span><select aria-label="Filtruoti pagal partiją" value={partyFilter} onChange={(event) => setFilter('party', event.target.value)}><option value="all">Visos partijos</option>{parties.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label><label><span className="sr-only">Būsena</span><select aria-label="Filtruoti pagal įgyvendinimo būseną" value={statusFilter} onChange={(event) => setFilter('status', event.target.value)}><option value="all">Visos būsenos</option>{(Object.keys(statusLabels) as PromiseStatus[]).map((status) => <option value={status} key={status}>{statusLabels[status]}</option>)}</select></label><label><span className="sr-only">Tema</span><select aria-label="Filtruoti pagal temą" value={topicFilter} onChange={(event) => setFilter('topic', event.target.value)}><option value="all">Visos temos</option>{topics.map((topic) => <option value={topic} key={topic}>{topic}</option>)}</select></label>{hasFilters && <button className="reset-filters" type="button" onClick={reset}>Išvalyti <X size={13} /></button>}</div></div>
    <div className="results-caption"><span>{filtered.length ? 'Rasti pažadai' : 'Pagal pasirinktus kriterijus pažadų nerasta'}</span><span>PAŽADAI · STATUSAI ILIUSTRACINIAI</span></div>
    {filtered.length ? <div className="promise-list">{filtered.map((item) => <PromiseCard key={item.id} item={item} />)}</div> : <div className="empty-state"><Search size={24} /><strong>Paieška neatitiko nė vieno pažado</strong><p>Pabandykite pakeisti paieškos žodį arba išvalyti filtrus.</p><button type="button" onClick={reset}>Išvalyti filtrus</button></div>}
    <div className="data-disclosure"><span className="disclosure-mark">i</span><p><strong>Demonstraciniai duomenys.</strong> Visi pažadų tekstai ir jų įgyvendinimo būsenos sukurti tik prototipo veikimui parodyti. Tai nėra tikros citatos, įrodymai ar partijų reitingas.</p><a href="https://www.vrk.lt/kandidatu-sarasu-igarsintos-rinkimu-programos-ir-kandidatu-sarasai-sei-2024" target="_blank" rel="noreferrer">VRK sąrašai <ArrowUpRight size={12} /></a></div>
  </section>
}
