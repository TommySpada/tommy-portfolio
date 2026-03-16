import { useState, useCallback } from 'react';
import FadeContent from '../components/FadeContent/FadeContent';

export default function ContattiPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('contatti@tommyspada.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <FadeContent blur duration={800}>
          <div className="section-header">
            <span className="badge">Parliamone</span>
            <h1 className="section-title">Contattami</h1>
            <p className="section-subtitle">
              Vuoi collaborare, fare una proposta o semplicemente parlare? Scrivimi
              direttamente via email e risponderò non appena possibile.
            </p>
          </div>
        </FadeContent>
        <FadeContent blur duration={800} delay={200}>
          <div className="contact-card">
            <p className="contact-intro">
              📧 Per qualsiasi richiesta puoi contattarmi all'indirizzo email qui sotto.
            </p>
            <div className="contact-email">
              <a
                href="mailto:contatti@tommyspada.com"
                className="email-link"
                id="emailLink"
              >
                contatti@tommyspada.com
              </a>
              <button
                className="button copy-button"
                type="button"
                onClick={copyEmail}
              >
                {copied ? '✅ Copiato!' : 'Copia indirizzo email'}
              </button>
              {copied && (
                <div className="copy-feedback" role="status" aria-live="polite">
                  ✅ Indirizzo copiato negli appunti!
                </div>
              )}
            </div>
            <p className="contact-tip">
              💡 Suggerimento: tocca il link per aprire la tua app email preferita oppure usa
              il pulsante «Copia» per salvare l'indirizzo negli appunti. Se preferisci i
              social, mi trovi anche su Instagram e Discord.
            </p>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
