// Top navigation + footer
const { useState, useEffect } = React;

// Toggle cuando exista zona privada / app de clientes
const SHOW_LOGIN = false;

function TopNav({ current }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú al pasar a desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const onChange = (e) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange); };
  }, []);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: scrolled || menuOpen ? 'rgba(244,241,234,0.96)' : 'transparent',
    backdropFilter: scrolled || menuOpen ? 'saturate(140%) blur(12px)' : 'none',
    borderBottom: scrolled || menuOpen ? '1px solid var(--line-soft)' : '1px solid transparent',
    transition: 'background 0.25s ease, border-color 0.25s ease',
  };

  const links = [
    { href: 'index.html#solutions', label: 'Soluciones' },
    { href: 'index.html#sectors',   label: 'Sectores' },
    { href: 'index.html#platform',  label: 'Plataforma' },
    { href: 'index.html#company',   label: 'Compañía' },
  ];

  return (
    <nav style={navStyle}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 76,
      }}>
        <a href="index.html" style={{
          display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none',
        }}>
          <img src={(window.__resources && window.__resources.logoLight) || "assets/ziglabit-light.png"} alt="Ziglabit" style={{ height: 28 }} />
        </a>

        <div className="rs-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--navy)',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.85,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
            >{l.label}</a>
          ))}
        </div>

        <div className="rs-nav-auth" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {SHOW_LOGIN && (
            <a href="#login" style={{
              color: 'var(--navy)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>Ingresar</a>
          )}
          <button className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 13 }}>
            Solicitar demo
            <Icon.ArrowRight size={14} />
          </button>
        </div>

        {/* Hamburguesa — visible solo en mobile vía responsive.css */}
        <button
          className="rs-nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: 2,
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            color: 'var(--navy)',
          }}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            {menuOpen ? (
              <React.Fragment>
                <path d="M3 3 L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M3 11 L17 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <path d="M2 2 H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M2 7 H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                <path d="M2 12 H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </React.Fragment>
            )}
          </svg>
        </button>
      </div>

      {/* Drawer mobile — renderizado vía portal al body para evitar que
          el `overflow-x: clip` de html/body o el sticky del <nav> creen
          un containing block que rompa el position: fixed del drawer. */}
      {menuOpen && ReactDOM.createPortal(
        <div style={{
          position: 'fixed',
          top: 76,
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(100vh - 76px)',
          background: 'var(--cream)',
          zIndex: 49,
          padding: '32px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          animation: 'rsDrawerIn 0.25s ease',
          overflowY: 'auto',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--navy)',
                  textDecoration: 'none',
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line-soft)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {l.label}
                <Icon.ArrowRight size={16} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SHOW_LOGIN && (
              <a href="#login" onClick={() => setMenuOpen(false)} className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                Ingresar
              </a>
            )}
            <button className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Solicitar demo
              <Icon.ArrowRight size={14} />
            </button>
          </div>

          <div className="mono" style={{
            marginTop: 'auto',
            paddingTop: 32,
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}>
            ISO 27001 · SOC 2 · PCI-DSS L1
          </div>

          <style>{`@keyframes rsDrawerIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>,
        document.body
      )}
    </nav>
  );
}

function Footer() {
  const cols = [
    {
      title: 'Productos',
      links: [
        { label: 'HSM Gateway',             href: 'hsm-gateway.html' },
        { label: 'Intercambio de Archivos', href: 'intercambio-archivos.html' },
        { label: 'ATM Keygen',              href: 'atm-keygen.html' },
        { label: 'ISO-8583 Proxy',          href: 'iso8583-proxy.html' },
        { label: 'PB Library',              href: '#' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Desarrollo seguro', href: 'desarrollo-seguro.html' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Acerca de', href: '#' },
        { label: 'Partners',  href: '#' },
        { label: 'Contacto',  href: '#' },
      ],
    },
  ];

  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 32px' }}>
      <div className="container">
        <div className="rs-footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 80,
        }}>
          <div>
            <img src={(window.__resources && window.__resources.logoDark) || "assets/ziglabit-dark.png"} alt="Ziglabit" style={{ height: 32, marginBottom: 24 }} />
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: 280,
              margin: '0 0 24px',
            }}>
              Integración avanzada para proteger los activos digitales de la banca, procesadores de pago y FinTech.
            </p>
            <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>
              ISO 27001 · SOC 2 · PCI-DSS L1
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontSize: 11,
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                marginBottom: 20,
              }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      fontSize: 13,
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rs-footer-bottom" style={{
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: 'rgba(255,255,255,0.55)',
        }}>
          <div className="mono">© 2026 Ziglabit S.A. · Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TopNav, Footer });
