import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="section-width inner-page"><span className="section-kicker">404 · PUSLAPIS NERASTAS</span><h1 className="page-title">Šio puslapio <span>nėra.</span></h1><p className="page-lead">Nuoroda gali būti pasenusi arba neteisinga.</p><Link className="primary-button not-found-button" to="/">Grįžti į apžvalgą</Link></section>
}
