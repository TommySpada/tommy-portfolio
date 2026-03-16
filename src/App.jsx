import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Dock from './components/Dock/Dock';
import BubbleMenu from './components/BubbleMenu/BubbleMenu';
import HomePage from './pages/HomePage';
import SocialPage from './pages/SocialPage';
import ContattiPage from './pages/ContattiPage';
import PCPage from './pages/PCPage';
import ClockPage from './pages/ClockPage';
import TurniPage from './pages/TurniPage';
import { useEffect, useRef } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const dockItems = [
    {
      icon: <span style={{ fontSize: '1.4rem' }}>🏠</span>,
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      icon: <span style={{ fontSize: '1.4rem' }}>📱</span>,
      label: 'Social',
      onClick: () => navigate('/social')
    },
    {
      icon: <span style={{ fontSize: '1.4rem' }}>✉️</span>,
      label: 'Contatti',
      onClick: () => navigate('/contatti')
    },
    {
      icon: <span style={{ fontSize: '1.4rem' }}>🖥️</span>,
      label: 'PC',
      onClick: () => navigate('/pc')
    }
  ];

  const bubbleMenuItems = [
    {
      label: 'Home',
      href: '#',
      onClick: (e) => { e.preventDefault(); navigate('/'); },
      bg: '#7c3aed',
      color: '#fff',
      hoverBg: '#6d28d9',
      hoverColor: '#fff',
      rotate: '-2deg'
    },
    {
      label: 'Social',
      href: '#',
      onClick: (e) => { e.preventDefault(); navigate('/social'); },
      bg: '#3b82f6',
      color: '#fff',
      hoverBg: '#2563eb',
      hoverColor: '#fff',
      rotate: '1deg'
    },
    {
      label: 'Contatti',
      href: '#',
      onClick: (e) => { e.preventDefault(); navigate('/contatti'); },
      bg: '#10b981',
      color: '#fff',
      hoverBg: '#059669',
      hoverColor: '#fff',
      rotate: '-1deg'
    },
    {
      label: 'PC',
      href: '#',
      onClick: (e) => { e.preventDefault(); navigate('/pc'); },
      bg: '#f59e0b',
      color: '#111',
      hoverBg: '#d97706',
      hoverColor: '#111',
      rotate: '2deg'
    }
  ];

  // Iubenda cookie consent
  useEffect(() => {
    // Cookie banner widget
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://embeds.iubenda.com/widgets/b0443bc4-6db6-11ee-8bfc-5ad8d8c564c0.js';
    widgetScript.type = 'text/javascript';
    document.body.appendChild(widgetScript);

    // Iubenda main script
    const iubendaScript = document.createElement('script');
    iubendaScript.type = 'text/javascript';
    iubendaScript.src = 'https://cdn.iubenda.com/iubenda.js';
    document.body.appendChild(iubendaScript);

    return () => {
      document.body.removeChild(widgetScript);
      document.body.removeChild(iubendaScript);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <BubbleMenu
        items={bubbleMenuItems}
        onLogoClick={() => navigate('/')}
        logoSrc="/images/logo.png"
        logoContent={
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f0f5' }}>
            Tommaso Spada
          </span>
        }
      />
      <ScrollToTop />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/pc" element={<PCPage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/turni" element={<TurniPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Tommaso Spada
          <span style={{ margin: '0 0.5rem' }}>|</span>
          <a
            href="https://www.iubenda.com/privacy-policy/84994282/cookie-policy"
            className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </div>
      </footer>
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
