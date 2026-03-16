import { useEffect, useState } from 'react';
import FadeContent from '../components/FadeContent/FadeContent';
import Aurora from '../components/Aurora/Aurora';
import BounceCards from '../components/BounceCards/BounceCards';
import { Link } from 'react-router-dom';

function getAge() {
  const birth = new Date(2006, 5, 8);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export default function HomePage() {
  const [eta, setEta] = useState(getAge());

  useEffect(() => {
    setEta(getAge());
  }, []);

  const bounceImages = [
    '/images/placeholder.jpg',
    '/images/placeholder.jpg',
    '/images/placeholder.jpg',
    '/images/placeholder.jpg',
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="aurora-wrapper">
          <Aurora
            colorStops={['#3b0dbf', '#00d4ff', '#7c3aed']}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
        <div className="container content hero-content">
          <div className="intro">
            <FadeContent blur duration={800} delay={200}>
              <span className="badge">Studente di informatica</span>
            </FadeContent>
            <FadeContent blur duration={800} delay={400}>
              <h1>Tommaso Spada</h1>
            </FadeContent>
            <FadeContent blur duration={800} delay={600}>
              <h2>Profilo tecnico con attitudine al problem solving</h2>
            </FadeContent>
            <FadeContent blur duration={800} delay={800}>
              <p>
                Ho {eta} anni e frequento l'ITIS "Mario Delpozzo" di Cuneo. Sono orientato ai
                risultati e motivato a trasformare idee in soluzioni concrete: sperimento con il
                codice, assemblo e diagnostico PC, approfondisco strumenti e metodologie per
                crescere in ambito IT.
                <br />
                Lavoro bene in autonomia e in team, con un approccio pratico e metodico. Questo
                spazio raccoglie formazione, competenze e alcuni progetti personali su cui sto
                costruendo il mio percorso.
              </p>
            </FadeContent>
            <FadeContent blur duration={800} delay={1000}>
              <div className="cta-group">
                <Link className="button" to="/contatti">Scrivimi</Link>
              </div>
            </FadeContent>
          </div>
          <FadeContent blur duration={1000} delay={600} className="avatar">
            <img src="/images/placeholder.jpg" alt="Tommaso Spada" />
          </FadeContent>
        </div>
      </section>

      {/* FORMAZIONE */}
      <section className="section" id="formazione">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Percorso</span>
              <h2 className="section-title">Formazione</h2>
              <p className="section-subtitle">
                Studio informatica all'ITIS "Mario Delpozzo" di Cuneo dal 2020. Gli anni
                vissuti tra laboratori, progetti e lavoro di squadra mi hanno insegnato a
                pensare in modo analitico, a comunicare con chiarezza e a cercare sempre la
                soluzione più efficace.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <ul className="skills-list">
              <li>
                Percorso di studi in Informatica all'ITIS "Mario Delpozzo" (2020 - oggi)
              </li>
              <li>Approccio pratico e laboratoriale a hardware e software</li>
              <li>
                Progetti scolastici e personali orientati alla risoluzione di problemi
              </li>
              <li>Certificazione Cambridge English C1 Advanced (score 181)</li>
            </ul>
          </FadeContent>
        </div>
      </section>

      {/* COMPETENZE */}
      <section className="section" id="competenze">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Competenze</span>
              <h2 className="section-title">Aree tecniche</h2>
              <p className="section-subtitle">
                Competenze operative su linguaggi, strumenti e ambienti usati nello studio e in
                progetti personali.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <ul className="skills-list">
              <li>
                Linguaggi: C, C++, C#, Python, Java; basi di web (HTML, CSS, JavaScript)
              </li>
              <li>
                Paradigmi e strumenti: OOP, Git e GitHub, Azure DevOps
              </li>
              <li>
                IDE: Visual Studio Code, Visual Studio 2022, JetBrains Suite
              </li>
              <li>Hardware: assemblaggio, diagnosi e upgrade PC</li>
              <li>Virtualizzazione: VMware, VirtualBox e Windows Sandbox</li>
              <li>
                Produttività: Microsoft Office (Word, Excel, PowerPoint, Access)
              </li>
              <li>
                Grafica/Design: basi di AutoCAD; video editing base (Wondershare Filmora)
              </li>
              <li>
                Sistemi operativi: uso avanzato di Windows e varie distribuzioni Linux
              </li>
            </ul>
          </FadeContent>
        </div>
      </section>

      {/* CHI SONO */}
      <section className="section" id="chi-sono">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Chi sono</span>
              <h2 className="section-title">Oltre la tastiera</h2>
              <p className="section-subtitle">
                La passione per l'informatica è nata da bambino: smontavo tutto ciò che aveva
                un cavo per capire come fosse costruito. Oggi quella curiosità è diventata
                metodo, studio e desiderio di condividere ciò che imparo.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <div className="card-grid">
              <article className="card">
                <h3>Orientamento tecnico</h3>
                <p>
                  Fin da piccolo ho sviluppato curiosità verso hardware e software. Questa
                  attitudine si è tradotta in un percorso strutturato: studio, pratica di
                  laboratorio e progetti personali per consolidare competenze tecniche e
                  metodo di lavoro.
                </p>
              </article>
              <article className="card">
                <h3>Percorso di studi</h3>
                <p>
                  Dal 2020 frequento l'ITIS "Mario Delpozzo" (indirizzo Informatica e
                  Telecomunicazioni). Ho svolto attività in ambito sviluppo software e
                  sistemi, con attenzione a analisi, risoluzione problemi e collaborazione
                  in team.
                </p>
              </article>
              <article className="card">
                <h3>Progetti e attività</h3>
                <p>
                  Sviluppo progetti personali (es. piccoli tool e prototipi), mi occupo di
                  configurazione/assemblaggio PC e partecipo ad attività di supporto tecnico
                  e alfabetizzazione digitale. Obiettivo: trasformare passione e studio in
                  soluzioni utili e ben documentate.
                </p>
              </article>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={400}>
            <div className="bounce-cards-wrapper">
              <BounceCards
                images={bounceImages}
                containerWidth={500}
                containerHeight={300}
                animationDelay={0.6}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.8)"
                transformStyles={[
                  'rotate(8deg) translate(-120px)',
                  'rotate(3deg) translate(-40px)',
                  'rotate(-2deg) translate(40px)',
                  'rotate(-8deg) translate(120px)',
                ]}
              />
            </div>
          </FadeContent>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="section" id="progetti">
        <div className="container">
          <FadeContent blur duration={800}>
            <div className="section-header">
              <span className="badge">Progetti</span>
              <h2 className="section-title">Selezione progetti</h2>
              <p className="section-subtitle">
                Alcuni esempi di attività personali e scolastiche che sintetizzano interessi e
                competenze tecniche.
              </p>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={200}>
            <div className="card-grid">
              <article className="card">
                <h3>Biblioteca Parrocchiale Madonna dell'Olmo</h3>
                <p>
                  Sito web istituzionale della Biblioteca Parrocchiale di Madonna dell'Olmo
                  (Cuneo), con sezioni informative, catalogo libri consultabile, orari e
                  contatti.
                </p>
                <p>
                  <a href="https://www.bibliotecaparrocchialemdo.it/" target="_blank" rel="noopener noreferrer">
                    <b>Visita il sito</b>
                  </a>
                </p>
              </article>
              <article className="card">
                <h3>Penguin Rush - Videogioco con AI (2025)</h3>
                <p>
                  Videogioco che converte movimenti fisici (micro:bit) in comandi di gioco.
                  Modello di riconoscimento con Python (scikit-learn, numpy, pandas, joblib).{' '}
                  <a href="https://github.com/DAriC5/Pinguini_Tattili_Artificiali" target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>.
                </p>
              </article>
              <article className="card">
                <h3>Alfabetizzazione digitale</h3>
                <p>
                  Tutoraggio per "Anziani a Scuola di Informatica": supporto settimanale su
                  competenze digitali di base (email, foto, app, risoluzione problemi su
                  dispositivi).
                </p>
              </article>
              <article className="card">
                <h3>Supporto tecnico e volontariato</h3>
                <p>
                  Recupero, manutenzione e assemblaggio PC per finalità sociali; gestione DB
                  con Microsoft Access per biblioteca parrocchiale; assistenza agli utenti.
                </p>
              </article>
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  );
}
