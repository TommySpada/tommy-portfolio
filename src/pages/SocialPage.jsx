import FadeContent from '../components/FadeContent/FadeContent';

export default function SocialPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Resta in contatto</span>
              <h1 className="section-title">Dove puoi trovarmi online</h1>
              <p className="section-subtitle">
                Qui trovi i miei canali principali: social, community e profili tecnici.
                Seguimi o scrivimi sul canale che preferisci per rimanere in contatto o
                scoprire cosa sto facendo.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <div className="social-card-grid">
              <article className="social-card">
                <span className="social-icon" aria-hidden="true">📸</span>
                <h3>Instagram</h3>
                <p>
                  Condivido momenti, curiosità e aggiornamenti personali. Uno spazio più
                  informale dove racconto chi sono fuori dalla tastiera.
                </p>
                <a className="button" href="https://instagram.com/tommy.spadaa" target="_blank" rel="noopener noreferrer">
                  Vai al profilo
                </a>
              </article>
              <article className="social-card">
                <span className="social-icon" aria-hidden="true">💻</span>
                <h3>GitHub</h3>
                <p>
                  Il mio spazio dedicato al codice: progetti scolastici e personali,
                  esperimenti e repository open-source.
                </p>
                <a className="button" href="https://www.github.com/tommyplaysgames" target="_blank" rel="noopener noreferrer">
                  Vai su GitHub
                </a>
              </article>
              <article className="social-card">
                <span className="social-icon" aria-hidden="true">🌐</span>
                <h3>Linktree</h3>
                <p>
                  Tutti i miei link raccolti in un unico posto, sempre aggiornato. Il modo
                  più semplice per trovare tutto ciò che mi riguarda.
                </p>
                <a className="button" href="https://linktr.ee/Tommy.Spadaa" target="_blank" rel="noopener noreferrer">
                  Tutti i link
                </a>
              </article>
            </div>
          </FadeContent>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Affiliazioni</span>
              <h2 className="section-title">Link affiliati</h2>
              <p className="section-subtitle">
                Utilizzando questi link sostieni il mio lavoro senza costi aggiuntivi per te.
                I partner riconoscono una piccola percentuale sugli acquisti effettuati
                tramite i miei referral.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <div className="callout">
              * Acquistando tramite i link affiliati non pagherai sovrapprezzi.
            </div>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Affiliato</th>
                    <th scope="col">Link</th>
                    <th scope="col">Benefici</th>
                    <th scope="col">Attivo dal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amazon</td>
                    <td>
                      <a href="https://amzn.to/3sk5AnF" target="_blank" rel="noopener noreferrer">
                        amzn.to/3sk5AnF
                      </a>
                    </td>
                    <td>Ricevo una commissione sugli acquisti effettuati.</td>
                    <td>26 agosto 2023</td>
                  </tr>
                  <tr>
                    <td>Instant Gaming</td>
                    <td>
                      <a href="https://www.instant-gaming.com/?igr=TommyPlaysGames" target="_blank" rel="noopener noreferrer">
                        instant-gaming.com
                      </a>
                    </td>
                    <td>
                      Sconti su giochi digitali e una quota riconosciuta al creator.
                    </td>
                    <td>26 agosto 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  );
}
