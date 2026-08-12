import FadeContent from '../components/FadeContent/FadeContent';
import Aurora from '../components/Aurora/Aurora';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="not-found-section">
      <div className="aurora-wrapper">
        <Aurora
          colorStops={['#3b0dbf', '#00d4ff', '#7c3aed']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div className="container">
        <div className="not-found-card">
          <FadeContent blur duration={800} delay={100}>
            <span className="not-found-badge">Errore 404</span>
          </FadeContent>

          <FadeContent blur duration={800} delay={250}>
            <h1 className="not-found-code">404</h1>
          </FadeContent>

          <FadeContent blur duration={800} delay={400}>
            <h2 className="not-found-title">Pagina Non Trovata</h2>
          </FadeContent>

          <FadeContent blur duration={800} delay={550}>
            <p className="not-found-desc">
              La pagina che stai cercando potrebbe essere stata rimossa, aver cambiato nome o essere temporaneamente non disponibile.
            </p>
          </FadeContent>

          <FadeContent blur duration={800} delay={700}>
            <div className="not-found-cta">
              <Link className="button" to="/">
                Torna alla Home
              </Link>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
