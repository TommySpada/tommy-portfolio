import { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import './BubbleMenu.css';

export default function BubbleMenu({
  items = [],
  logoSrc,
  logoContent,
  onLogoClick,
  position = 'fixed',
  distanceBetweenItems = 8
}) {
  const [open, setOpen] = useState(false);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);
  const overlayRef = useRef(null);
  const itemsContainerRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      // Animate overlay in
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      // Animate items in
      bubblesRef.current.forEach((bubble, idx) => {
        if (bubble) {
          gsap.fromTo(bubble,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: 'back.out(1.7)',
              delay: idx * 0.05
            }
          );
        }
      });
      labelRefs.current.forEach((label, idx) => {
        if (label) {
          gsap.fromTo(label,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
              delay: 0.1 + idx * 0.05
            }
          );
        }
      });
    } else {
      // Animate out
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
      bubblesRef.current.forEach((bubble) => {
        if (bubble) {
          gsap.to(bubble, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in'
          });
        }
      });
    }
  }, [open]);

  return (
    <>
      <div className={`bubble-menu ${position}`}>
        {/* Logo bubble */}
        <div className="bubble logo-bubble" onClick={onLogoClick} style={{ cursor: onLogoClick ? 'pointer' : 'default' }}>
          {logoSrc && (
            <img src={logoSrc} alt="Logo" className="bubble-logo" />
          )}
          {logoContent && (
            <div className="logo-content">{logoContent}</div>
          )}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Toggle bubble */}
        <div className="bubble toggle-bubble" onClick={toggleMenu}>
          <button className={`menu-btn ${open ? 'open' : ''}`} aria-label="Toggle menu">
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`bubble-menu-overlay ${position}`}
        style={{
          opacity: 0,
          pointerEvents: open ? 'auto' : 'none',
          position: position,
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 97,
          transition: 'opacity 0.3s ease'
        }}
        onClick={toggleMenu}
      />

      {/* Menu items */}
      <div
        ref={itemsContainerRef}
        className={`bubble-menu-items ${position}`}
        style={{
          pointerEvents: open ? 'auto' : 'none',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <ul className="pill-list">
          {items.map((item, idx) => (
            <li key={idx} className="pill-col"
              style={{ '--item-rot': item.rotate || '0deg' }}
            >
              <a
                href={item.href}
                className="pill-link"
                ref={el => {
                  if (el) bubblesRef.current[idx] = el;
                }}
                onClick={(e) => {
                  if (item.onClick) item.onClick(e);
                  closeMenu();
                }}
                style={{
                  '--pill-bg': item.bg || '#ffffff',
                  '--pill-color': item.color || '#111',
                  '--hover-bg': item.hoverBg || '#f3f4f6',
                  '--hover-color': item.hoverColor || '#111'
                }}
              >
                <span
                  className="pill-label"
                  ref={el => {
                    if (el) labelRefs.current[idx] = el;
                  }}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
