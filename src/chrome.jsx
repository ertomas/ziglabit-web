// Top navigation + footer
const { useState, useEffect } = React;

function TopNav({ current }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: scrolled ? 'rgba(244,241,234,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
    transition: 'all 0.25s ease',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#login" style={{
            color: 'var(--navy)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
          }}>Ingresar</a>
          <button className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 13 }}>
            Solicitar demo
            <Icon.ArrowRight size={14} />
          </button>
        </div>
      </div>
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
        { label: 'Desarrollo seguro',       href: 'desarrollo-seguro.html' },
        { label: 'PB Library',              href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { label: 'Algiz Platform',        href: 'index.html#platform' },
        { label: 'Centro de Operaciones', href: '#' },
        { label: 'API Reference',         href: '#' },
        { label: 'OpenAPI Specs',         href: '#' },
        { label: 'Estado del servicio',   href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Acerca de', href: '#' },
        { label: 'Carreras',  href: '#' },
        { label: 'Partners',  href: '#' },
        { label: 'Prensa',    href: '#' },
        { label: 'Contacto',  href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentación',     href: '#' },
        { label: 'Casos de estudio',  href: '#' },
        { label: 'Blog técnico',      href: '#' },
        { label: 'Whitepapers',       href: '#' },
        { label: 'Soporte',           href: '#' },
      ],
    },
  ];

  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
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

        <div style={{
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
