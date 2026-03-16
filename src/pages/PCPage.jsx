import FadeContent from '../components/FadeContent/FadeContent';

const specs = {
  main: [
    {
      img: '/images/cpu.png',
      name: 'CPU',
      desc: 'Intel Core i7-12700K 12 core / 20 thread a 3.6 GHz.',
      link: 'https://amazon.com/dp/B09FXNVDBJ',
      linkText: 'Scheda tecnica'
    },
    {
      img: '/images/gpu.png',
      name: 'GPU',
      desc: 'MSI RTX 3060 Ventus 3X OC da 12 GB per gaming fluido in 1080p/1440p.',
      link: 'https://amazon.com/dp/B08WTFG5BX',
      linkText: 'Specifiche complete'
    },
    {
      img: '/images/ram.png',
      name: 'RAM',
      desc: '32 GB (2×16 GB) Corsair Vengeance DDR5 6000 MHz CL36.',
      link: 'https://amazon.com/dp/B0B15DST2L',
      linkText: 'Dettagli prodotto'
    },
    {
      img: '/images/motherboard.png',
      name: 'Scheda madre',
      desc: 'Gigabyte Z790 Aorus Elite AX con Wi-Fi integrato e supporto DDR5.',
      link: 'https://amazon.com/dp/B0BH9DXY38',
      linkText: 'Scopri la scheda'
    }
  ],
  secondary: [
    {
      img: '/images/cooler.png',
      name: 'Raffreddamento',
      desc: 'Cooler Master MasterLiquid ML240L RGB V2 per temperature sempre sotto controllo.',
      link: 'https://amazon.com/dp/B086BYYFG5',
      linkText: 'Vai al prodotto'
    },
    {
      img: '/images/ssd.png',
      name: 'Storage',
      desc: 'Tre SSD NVMe Samsung 980 Pro da 2 TB ciascuno per un totale di 6 TB.',
      link: 'https://amazon.com/dp/B08RK2SR23',
      linkText: 'Scheda SSD'
    },
    {
      img: '/images/case.png',
      name: 'Case',
      desc: 'DeepCool CC560 ATX Mid Tower con flusso d\'aria ottimizzato e pannello in vetro.',
      link: 'https://amazon.com/dp/B09PMJX88Y',
      linkText: 'Dettagli case'
    },
    {
      img: '/images/psu.png',
      name: 'Alimentatore',
      desc: 'Kolink Modular Power 700W 80 Plus Bronze, cablaggio ordinato e affidabile.',
      link: 'https://amzn.eu/d/98lQnjk',
      linkText: 'Approfondisci'
    }
  ]
};

function SpecCard({ spec }) {
  return (
    <li className="spec-card">
      <figure>
        <img src={spec.img} alt={spec.name} />
      </figure>
      <div>
        <strong>{spec.name}</strong>
        <p>{spec.desc}</p>
        <a href={spec.link} target="_blank" rel="noopener noreferrer">
          {spec.linkText}
        </a>
      </div>
    </li>
  );
}

export default function PCPage() {
  return (
    <section className="section">
      <div className="container">
        <FadeContent blur duration={800}>
          <div className="section-header">
            <span className="badge">Setup</span>
            <h1 className="section-title">Il mio PC da lavoro e da gioco</h1>
            <p className="section-subtitle">
              Una configurazione pensata per sviluppo software, montaggio leggero e gaming
              competitivo. Ogni componente è stato scelto per garantire equilibrio tra
              prestazioni e affidabilità nel tempo.
            </p>
          </div>
        </FadeContent>
        <div className="spec-grid">
          <FadeContent blur duration={800} delay={200}>
            <div className="spec-group">
              <h3>Componenti principali</h3>
              <ul className="spec-list">
                {specs.main.map((spec, i) => (
                  <SpecCard key={i} spec={spec} />
                ))}
              </ul>
            </div>
          </FadeContent>
          <FadeContent blur duration={800} delay={400}>
            <div className="spec-group">
              <h3>Storage, raffreddamento e alimentazione</h3>
              <ul className="spec-list">
                {specs.secondary.map((spec, i) => (
                  <SpecCard key={i} spec={spec} />
                ))}
              </ul>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
