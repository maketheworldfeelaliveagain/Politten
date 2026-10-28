import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="page-wrap inner-page"><div className="eyebrow">404 · Puslapis nerastas</div><h1 className="page-title">Šio puslapio <span>nėra</span></h1><p className="lead">Nuoroda gali būti pasenusi arba neteisinga.</p><Link className="button-link" to="/">Grįžti į pradžią</Link></section>
}
