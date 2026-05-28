const { useState: useStateHome, useEffect: useEffectHome, useRef: useRefHome } = React;

// A live telemetry/security feed component — adds technical credibility to the hero
function LiveTelemetry() {
  useLang();

  const seedLinesEs = [
    { type: 'TOKEN', msg: 'PAN tokenizado · vault-mx-04 · 1,247 ops', sev: 'ok'   },
    { type: 'ISO',   msg: 'Trama 0200 · MAC validado · response 00',   sev: 'info' },
    { type: 'HSM',   msg: 'PIN block traducido · ZPK→ZMK · 11ms',      sev: 'ok'   },
  ];
  const seedLinesEn = [
    { type: 'TOKEN', msg: 'PAN tokenized · vault-mx-04 · 1,247 ops',   sev: 'ok'   },
    { type: 'ISO',   msg: '0200 message · MAC verified · response 00', sev: 'info' },
    { type: 'HSM',   msg: 'PIN block translated · ZPK→ZMK · 11ms',     sev: 'ok'   },
  ];
  const lang = window.I18N.get();
  const seedLines = lang === 'en' ? seedLinesEn : seedLinesEs;

  const [events, setEvents] = useStateHome(() =>
    seedLines.map((l, i) => ({ ...l, id: i + 1, t: ['14:32:08','14:32:06','14:32:02'][i] }))
  );
  const [counter, setCounter] = useStateHome(184729);

  useEffectHome(() => {
    const linesEs = [
      { type: 'TOKEN', msg: 'PAN tokenizado · vault-core-01 · batch 4,820',  sev: 'ok'   },
      { type: 'DETOK', msg: 'Detokenización autorizada · merchant-co-44',    sev: 'info' },
      { type: 'ISO',   msg: 'Trama 0200 · MTI auth · acquirer-mx-02',        sev: 'ok'   },
      { type: 'ISO',   msg: 'Trama 0420 reversal · acquirer-pe-01',          sev: 'info' },
      { type: 'CIFRA', msg: 'AES-256 batch EOD · 8,420 registros · 62ms',    sev: 'ok'   },
      { type: 'DESC',  msg: 'Descifrado autorizado · audit-trail-07',        sev: 'info' },
      { type: 'HSM',   msg: 'DUKPT derivada · pos-terminal-9847',            sev: 'ok'   },
      { type: 'HSM',   msg: 'Llave de zona rotada · hsm-cluster-mx',         sev: 'info' },
      { type: 'EMV',   msg: 'Criptograma ARQC validado · issuer-co-12',      sev: 'ok'   },
      { type: 'DENY',  msg: 'Detokenización denegada · scope inválido',      sev: 'high' },
      { type: 'PIN',   msg: 'Translate PIN · TPK→ZPK · acquirer-mx-07',      sev: 'ok'   },
      { type: 'ISO',   msg: 'Trama 0800 network mgmt · echo 14ms',           sev: 'info' },
    ];
    const linesEn = [
      { type: 'TOKEN', msg: 'PAN tokenized · vault-core-01 · batch 4,820',   sev: 'ok'   },
      { type: 'DETOK', msg: 'Detokenization authorized · merchant-co-44',    sev: 'info' },
      { type: 'ISO',   msg: '0200 message · MTI auth · acquirer-mx-02',      sev: 'ok'   },
      { type: 'ISO',   msg: '0420 reversal · acquirer-pe-01',                sev: 'info' },
      { type: 'CIPHR', msg: 'AES-256 batch EOD · 8,420 records · 62ms',      sev: 'ok'   },
      { type: 'DECR',  msg: 'Decryption authorized · audit-trail-07',        sev: 'info' },
      { type: 'HSM',   msg: 'DUKPT derived · pos-terminal-9847',             sev: 'ok'   },
      { type: 'HSM',   msg: 'Zone key rotated · hsm-cluster-mx',             sev: 'info' },
      { type: 'EMV',   msg: 'ARQC cryptogram verified · issuer-co-12',       sev: 'ok'   },
      { type: 'DENY',  msg: 'Detokenization denied · invalid scope',         sev: 'high' },
      { type: 'PIN',   msg: 'Translate PIN · TPK→ZPK · acquirer-mx-07',      sev: 'ok'   },
      { type: 'ISO',   msg: '0800 network mgmt · echo 14ms',                 sev: 'info' },
    ];

    const interval = setInterval(() => {
      const lines = window.I18N.get() === 'en' ? linesEn : linesEs;
      const next = lines[Math.floor(Math.random() * lines.length)];
      const now = new Date();
      const t = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      setEvents((prev) => [{ ...next, id: Math.random(), t }, ...prev].slice(0, 5));
      setCounter((c) => c + Math.floor(Math.random() * 47 + 12));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const sevColor = (sev) => ({ high: '#FF6B5B', ok: 'var(--teal)', info: '#9FB4CC' })[sev];

  return (
    <div className="rs-telemetry" style={{
      background: 'var(--navy)',
      color: '#fff',
      padding: 28,
      borderRadius: 4,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 30px 60px -20px rgba(0,39,77,0.35)'
    }}>
      {['tl', 'tr', 'bl', 'br'].map((c) =>
      <div key={c} style={{
        position: 'absolute',
        width: 10, height: 10,
        borderColor: 'var(--teal)',
        borderStyle: 'solid',
        borderWidth: 0,
        [c.includes('t') ? 'top' : 'bottom']: 10,
        [c.includes('l') ? 'left' : 'right']: 10,
        [c.includes('t') ? 'borderTopWidth' : 'borderBottomWidth']: 1,
        [c.includes('l') ? 'borderLeftWidth' : 'borderRightWidth']: 1
      }} />)}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)',
            boxShadow: '0 0 0 4px rgba(0,209,178,0.2)',
            animation: 'pulse 2s infinite'
          }} />
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            algiz · live operations
          </div>
        </div>
        <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>v4.21.0</div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
          {tr('OPERACIONES CRIPTOGRÁFICAS · ÚLT. 24H', 'CRYPTOGRAPHIC OPERATIONS · LAST 24H')}
        </div>
        <div className="rs-tel-counter" style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 38,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--teal)'
        }}>{counter.toLocaleString(window.I18N.get() === 'en' ? 'en-US' : 'es-MX')}</div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {events.map((e, i) =>
          <div key={e.id} className="rs-tel-row" style={{
            display: 'grid',
            gridTemplateColumns: '60px 56px 1fr',
            gap: 10,
            alignItems: 'center',
            fontSize: 11.5,
            fontFamily: 'JetBrains Mono, monospace',
            opacity: 1 - i * 0.14,
            transition: 'opacity 0.5s'
          }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{e.t}</span>
              <span style={{ color: sevColor(e.sev), fontWeight: 500, letterSpacing: '0.05em' }}>{e.type}</span>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{e.msg}</span>
            </div>)}
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </div>
  );
}

function Hero() {
  useLang();
  return (
    <section className="rs-section" style={{ padding: '64px 0 96px', position: 'relative' }}>
      <div style={{ position: 'absolute', right: -120, top: 0, opacity: 0.06, pointerEvents: 'none' }}>
        <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
          <path d="M300 50 L300 650" stroke="var(--navy)" strokeWidth="3" />
          <path d="M300 50 L100 250" stroke="var(--navy)" strokeWidth="3" />
          <path d="M300 50 L500 250" stroke="var(--navy)" strokeWidth="3" />
        </svg>
      </div>

      <div className="container rs-split" style={{
        display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 80, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>
            <span>{tr('Ciberseguridad para infraestructura crítica', 'Cybersecurity for critical infrastructure')}</span>
          </div>

          <h1 className="rs-h1" style={{
            fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, margin: '0 0 28px', color: 'var(--navy)',
          }}>
            {tr('Integración avanzada para proteger tus ', 'Advanced integration to protect your ')}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)', position: 'relative' }}>
              {tr('activos digitales', 'digital assets')}
              <svg style={{ position: 'absolute', left: 0, bottom: -8, width: '100%' }} height="6" viewBox="0 0 400 6" preserveAspectRatio="none">
                <path d="M0 3 L400 3" stroke="var(--teal)" strokeWidth="3" />
              </svg>
            </span>.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 520, margin: '0 0 40px', textWrap: 'pretty' }}>
            {tr(
              'Sistemas, software y servicios de integración para banca, procesadores de pago y FinTech. Defensa en profundidad construida sobre los principios de la runa Algiz: protección, fuerza y progreso.',
              'Systems, software and integration services for banking, payment processors and FinTech. Defense in depth built on the principles of the Algiz rune: protection, strength and progress.'
            )}
          </p>

          <div className="rs-btn-row" style={{ display: 'flex', gap: 14, marginBottom: 56 }}>
            <a href="contacto.html" className="btn btn-primary">
              {tr('Solicitar demo', 'Request a demo')}
              <Icon.ArrowRight size={14} />
            </a>
            <button className="btn btn-ghost">
              {tr('Ver plataforma', 'See the platform')}
            </button>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
            paddingTop: 32, borderTop: '1px solid var(--line)', maxWidth: 520,
          }}>
            {[
              { n: tr('Hardware', 'Hardware'),  l: 'payShield · Luna · nShield' },
              { n: tr('Seguridad', 'Security'), l: tr('Cifrado bajo llave en hardware', 'Encryption locked in hardware') },
              { n: tr('Tokens', 'Tokens'),      l: tr('PAN, PIN block y track2', 'PAN, PIN block & track2') },
            ].map((s, i) =>
              <div key={i}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 22, fontWeight: 500,
                  color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 4,
                }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.l}</div>
              </div>
            )}
          </div>
        </div>

        <div>
          <LiveTelemetry />
        </div>
      </div>
    </section>
  );
}

function SectorStrip() {
  useLang();
  const sectors = [
    tr('Banca', 'Banking'),
    tr('Procesadores de pago', 'Payment processors'),
    'FinTech',
    tr('Cooperativas', 'Credit unions'),
    'Wallets',
    tr('Gobierno', 'Government'),
  ];
  return (
    <section style={{
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      padding: '28px 0', background: 'var(--cream-2)',
    }}>
      <div className="container rs-sector-strip" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40,
      }}>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)', whiteSpace: 'nowrap',
        }}>
          {tr('Confiado por equipos en →', 'Trusted by teams across →')}
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {sectors.map((s) =>
          <div key={s} style={{
            fontSize: 14, fontWeight: 500, color: 'var(--navy)', letterSpacing: '-0.01em',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
              <span style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%' }} />
              {s}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  useLang();
  const [hover, setHover] = useStateHome(null);
  const solutions = [
    {
      id: 'hsm-gateway',
      tag: tr('01 — Producto', '01 — Product'),
      title: 'HSM Gateway',
      desc: tr(
        'API REST sobre tus HSMs Thales payShield 10K y Luna. Olvida la mensajería TCP propietaria — integra capacidades criptográficas en minutos, no en meses.',
        'REST API over your Thales payShield 10K and Luna HSMs. Forget the proprietary TCP messaging — integrate cryptographic capabilities in minutes, not months.'
      ),
      bullets: [
        tr('API HTTP/S + JSON estándar', 'Standard HTTP/S + JSON API'),
        tr('payShield 10K y Luna soportados', 'payShield 10K and Luna supported'),
        tr('Balanceo, colas y alta disponibilidad', 'Load balancing, queues and high availability'),
        tr('On-prem, cloud-native o híbrido', 'On-prem, cloud-native or hybrid'),
      ],
      stat: { n: tr('min ▸ meses', 'min ▸ months'), l: tr('Tiempo de integración', 'Time to integrate') },
    },
    {
      id: 'intercambio-archivos',
      tag: tr('02 — Producto', '02 — Product'),
      title: tr('Sistema de Intercambio de Archivos', 'File Exchange System'),
      desc: tr(
        'Transferencia cifrada y auditable entre instituciones, procesadores y reguladores. PGP, TLS 1.3 y bitácora firmada criptográficamente por cada archivo.',
        'Encrypted, auditable transfer between institutions, processors and regulators. PGP, TLS 1.3 and a cryptographically signed log per file.'
      ),
      bullets: [
        tr('Cifrado simétrico + asimétrico', 'Symmetric + asymmetric encryption'),
        tr('Conectores SFTP, AS2 y S3', 'SFTP, AS2 and S3 connectors'),
        tr('Trazabilidad firmada por archivo', 'Signed traceability per file'),
        tr('Políticas por contraparte', 'Per-counterparty policies'),
      ],
      stat: { n: 'AES-256', l: tr('Cifrado en reposo y tránsito', 'Encryption at rest and in transit') },
    },
    {
      id: 'atm-keygen',
      tag: tr('03 — Producto', '03 — Product'),
      title: 'ATM Keygen',
      desc: tr(
        'Automatiza la ceremonia manual de generación de llaves para flotas completas de ATMs sobre Thales payShield 10k. Cero material criptográfico en pantalla, sobres numerados directo a impresora, bitácora firmada al cierre.',
        'Automates the manual key-generation ceremony for entire ATM fleets on Thales payShield 10k. Zero cryptographic material on screen, numbered envelopes straight to the printer, signed log at closeout.'
      ),
      bullets: [
        tr('Equipo embedded air-gap · TUI sin distracciones', 'Air-gapped embedded device · distraction-free TUI'),
        tr('Autenticación dual · cero llaves o KCV en pantalla', 'Dual authentication · zero keys or KCV on screen'),
        tr('Sobres numerados directo a impresora de matriz', 'Numbered envelopes straight to dot-matrix printer'),
        tr('Audit log SHA-256 · cierre por checklist', 'SHA-256 audit log · checklist-driven closeout'),
      ],
      stat: { n: 'Batch', l: tr('Cientos de ATMs en una ceremonia', 'Hundreds of ATMs in a single ceremony') },
    },
    {
      id: 'iso8583-proxy',
      tag: tr('04 — Producto', '04 — Product'),
      title: 'ISO-8583 Proxy / Balancer',
      desc: tr(
        'Recibe ISO-8583 en TCP nativo, JSON o SOAP. Entrega ISO-8583 al switch o core — cifrando, tokenizando y balanceando entre HSMs y backends en el mismo salto.',
        'Receives ISO-8583 over native TCP, JSON or SOAP. Delivers ISO-8583 to the switch or core — encrypting, tokenizing and balancing across HSMs and backends in the same hop.'
      ),
      bullets: [
        tr('TCP ISO-8583, JSON y SOAP de entrada', 'TCP ISO-8583, JSON and SOAP inputs'),
        tr('Cifrado / tokenización por campo vía HSM', 'Per-field encryption / tokenization via HSM'),
        tr('Colas, back-pressure y circuit breakers', 'Queues, back-pressure and circuit breakers'),
        tr('Activo-activo multi-nodo', 'Active-active multi-node'),
      ],
      stat: { n: '3 → 1', l: tr('Protocolos in → ISO-8583 out', 'Inbound protocols → ISO-8583 out') },
    },
  ];

  return (
    <section id="solutions" className="rs-section" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="rs-section-head" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 64, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span>
              <span>{tr('Componentes · Algiz Platform', 'Components · Algiz Platform')}</span>
            </div>
            <h2 className="rs-h2" style={{
              fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)',
            }}>
              {tr('Cuatro productos que conforman Algiz Platform.', 'Four products that make up Algiz Platform.')}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
              {tr(
                'Cada pieza resuelve un problema concreto de integración o gobierno criptográfico, y se adopta por separado. Lo único que comparten es el HSM como raíz de confianza — las llaves nunca salen de él en claro.',
                'Each piece solves a concrete integration or cryptographic-governance problem and can be adopted on its own. The only thing they share is the HSM as the root of trust — keys never leave it in the clear.'
              )}
            </p>
          </div>
        </div>

        <div className="rs-cards-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {solutions.map((s) => {
            const isHover = hover === s.id;
            return (
              <a
                key={s.id}
                href={`${s.id}.html`}
                onMouseEnter={() => setHover(s.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  background: isHover ? 'var(--navy)' : '#fff',
                  color: isHover ? '#fff' : 'var(--navy)',
                  border: '1px solid ' + (isHover ? 'var(--navy)' : 'var(--line)'),
                  padding: 40, textAlign: 'left', textDecoration: 'none', cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)',
                  position: 'relative', overflow: 'hidden', borderRadius: 4,
                  display: 'flex', flexDirection: 'column', gap: 28, minHeight: 440, fontFamily: 'inherit',
                }}>
                <div style={{
                  position: 'absolute', right: -40, top: -40,
                  opacity: isHover ? 0.12 : 0.05,
                  transition: 'opacity 0.35s, transform 0.35s',
                  transform: isHover ? 'scale(1.1)' : 'scale(1)',
                }}>
                  <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                    <path d="M110 20 L110 200" stroke={isHover ? 'var(--teal)' : 'var(--navy)'} strokeWidth="2" />
                    <path d="M110 20 L40 90"   stroke={isHover ? 'var(--teal)' : 'var(--navy)'} strokeWidth="2" />
                    <path d="M110 20 L180 90"  stroke={isHover ? 'var(--teal)' : 'var(--navy)'} strokeWidth="2" />
                  </svg>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
                  <div className="mono" style={{
                    fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: isHover ? 'var(--teal)' : 'var(--ink-3)', transition: 'color 0.35s',
                  }}>{s.tag}</div>
                  <div style={{
                    width: 36, height: 36,
                    border: '1px solid ' + (isHover ? 'var(--teal)' : 'var(--line)'),
                    background: isHover ? 'var(--teal)' : 'transparent',
                    color: 'var(--navy)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.35s',
                    transform: isHover ? 'translateX(4px)' : 'translateX(0)',
                  }}>
                    <Icon.ArrowUpRight size={14} />
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <h3 style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 600, margin: '0 0 16px' }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, opacity: isHover ? 0.85 : 0.75, textWrap: 'pretty' }}>{s.desc}</p>
                </div>

                <div style={{ flex: 1 }}></div>

                <div style={{
                  display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 24,
                  borderTop: '1px solid ' + (isHover ? 'rgba(255,255,255,0.15)' : 'var(--line-soft)'),
                  transition: 'border-color 0.35s', position: 'relative',
                }}>
                  {s.bullets.map((b, i) =>
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13.5, opacity: 0.9 }}>
                      <span style={{
                        width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isHover ? 'var(--teal)' : 'var(--teal-deep)',
                      }}>
                        <Icon.Check size={12} />
                      </span>
                      {b}
                    </div>)}
                </div>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 20,
                  borderTop: '1px solid ' + (isHover ? 'rgba(255,255,255,0.15)' : 'var(--line-soft)'),
                  transition: 'border-color 0.35s', position: 'relative',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 28, fontWeight: 500,
                      letterSpacing: '-0.02em', color: isHover ? 'var(--teal)' : 'var(--navy)', transition: 'color 0.35s',
                    }}>{s.stat.n}</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{s.stat.l}</div>
                  </div>
                  <div style={{
                    fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6,
                    color: isHover ? 'var(--teal)' : 'var(--navy)', transition: 'color 0.35s',
                  }}>
                    {tr('Explorar', 'Explore')} <Icon.ArrowRight size={12} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  useLang();
  const modules = [
    { n: '01', t: 'HSM Gateway',     d: tr('API criptográfica unificada sobre tus HSMs.', 'Unified cryptographic API over your HSMs.'),                tag: 'REST · JSON',           kind: tr('Producto', 'Product') },
    { n: '02', t: 'SIA',             d: tr('Intercambio cifrado y auditable de archivos.', 'Encrypted, auditable file exchange.'),                     tag: 'PGP · TLS 1.3',         kind: tr('Producto', 'Product') },
    { n: '03', t: 'ATM Keygen',      d: tr('Automatiza la ceremonia de generación de llaves de ATM.', 'Automates the ATM key-generation ceremony.'),    tag: 'payShield 10k · batch', kind: tr('Producto', 'Product') },
    { n: '04', t: 'ISO-8583 Proxy',  d: tr('Proxy transaccional con cifrado y balanceo.', 'Transactional proxy with encryption and balancing.'),       tag: 'TCP · JSON · SOAP',     kind: tr('Producto', 'Product') },
  ];

  return (
    <section id="platform" className="rs-section" style={{
      background: 'var(--navy)', color: '#fff', padding: '120px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        backgroundSize: '24px 24px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div className="rs-section-head" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, marginBottom: 72,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot"></span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr('La plataforma', 'The platform')}</span>
            </div>
            <h2 className="rs-h2" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
              {tr('Productos separados.', 'Separate products.')}<br />
              <span style={{ color: 'var(--teal)' }}>{tr('Una', 'One')}</span> {tr('misma raíz de confianza.', 'shared root of trust.')}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', margin: '12px 0 32px', textWrap: 'pretty' }}>
              {tr(
                <React.Fragment><strong style={{ color: '#fff', fontWeight: 600 }}>HSM Gateway</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>SIA</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>ATM Keygen</strong> e <strong style={{ color: '#fff', fontWeight: 600 }}>ISO-8583 Proxy</strong> son cuatro productos independientes — cada uno resuelve un problema concreto y se adopta por separado. Lo que los une es el HSM como raíz de confianza: todas las llaves nunca salen de él en claro, y todas las operaciones criptográficas hablan los mismos estándares.</React.Fragment>,
                <React.Fragment><strong style={{ color: '#fff', fontWeight: 600 }}>HSM Gateway</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>SIA</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>ATM Keygen</strong> and <strong style={{ color: '#fff', fontWeight: 600 }}>ISO-8583 Proxy</strong> are four independent products — each solves a concrete problem and is adopted on its own. What unites them is the HSM as the root of trust: keys never leave it in the clear, and every cryptographic operation speaks the same standards.</React.Fragment>
              )}
            </p>
            <button className="btn btn-teal">
              {tr('Conocer Algiz Platform', 'Discover Algiz Platform')}
              <Icon.ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div style={{
          border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', padding: 32, position: 'relative',
        }}>
          {['tl', 'tr', 'bl', 'br'].map((c) =>
          <div key={c} style={{
            position: 'absolute', width: 12, height: 12,
            borderColor: 'var(--teal)', borderStyle: 'solid', borderWidth: 0,
            [c.includes('t') ? 'top' : 'bottom']: -1,
            [c.includes('l') ? 'left' : 'right']: -1,
            [c.includes('t') ? 'borderTopWidth' : 'borderBottomWidth']: 1,
            [c.includes('l') ? 'borderLeftWidth' : 'borderRightWidth']: 1,
          }} />)}

          <div className="mono" style={{
            fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em',
            textTransform: 'uppercase', marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span>{tr('Productos independientes', 'Independent products')}</span>
            <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div className="rs-cards-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {modules.map((m) =>
            <div key={m.n} style={{
              background: 'var(--navy-2)', border: '1px solid rgba(255,255,255,0.14)',
              padding: 22, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 196,
              transition: 'border-color 0.25s, transform 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em' }}>{m.n}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.kind}</div>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>{m.t}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5, textWrap: 'pretty' }}>{m.d}</p>
                <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em' }}>{m.tag}</div>
                </div>
              </div>)}
          </div>

          <div className="rs-platform-connectors" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: 28 }}>
            {modules.map((_, i) =>
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 1, height: '100%', background: 'rgba(255,255,255,0.18)' }} />
              </div>)}
          </div>

          <div className="rs-hsm-root" style={{
            border: '1px dashed rgba(0,209,178,0.55)', background: 'rgba(0,209,178,0.04)',
            padding: '22px 26px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                {tr('Raíz de confianza compartida', 'Shared root of trust')}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>
                HSM · Thales payShield 10K · Luna · nShield · Cloud HSM
              </div>
            </div>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              {[
                tr('On-prem', 'On-prem'),
                tr('Híbrido', 'Hybrid'),
                tr('Cloud-native', 'Cloud-native'),
              ].map((s) =>
              <div key={s} className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>→ {s}</div>)}
            </div>
          </div>
        </div>

        <div className="rs-cards-3" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginTop: 32,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {[
            { n: '01', t: tr('Las llaves nunca salen del HSM', 'Keys never leave the HSM'),
              d: tr('Toda operación criptográfica de los cuatro productos se ejecuta dentro del HSM. Las llaves jamás cruzan el perímetro en claro.',
                    'Every cryptographic operation of the four products runs inside the HSM. Keys never cross the perimeter in the clear.') },
            { n: '02', t: tr('Mismos estándares, distintos productos', 'Same standards, different products'),
              d: tr('TR-31, DUKPT, PKCS#11, PGP, TLS 1.3. Cada producto habla el lenguaje correcto para su dominio — sin reinventar primitivas.',
                    'TR-31, DUKPT, PKCS#11, PGP, TLS 1.3. Each product speaks the right language for its domain — no reinvented primitives.') },
            { n: '03', t: tr('Adopta uno, dos o los cuatro', 'Adopt one, two or all four'),
              d: tr('No hay que comprar la suite completa. Cada producto se integra y se opera por separado, según el problema que tengas hoy.',
                    'No need to buy the full suite. Each product is integrated and operated separately, based on the problem you have today.') },
          ].map((p) =>
          <div key={p.n} style={{ background: 'var(--navy)', padding: 32, transition: 'background 0.25s' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#001a36'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--navy)'}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em', marginBottom: 18 }}>{p.n}</div>
              <h3 style={{ fontSize: 19, fontWeight: 600, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{p.t}</h3>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.55, textWrap: 'pretty' }}>{p.d}</p>
            </div>)}
        </div>
      </div>
    </section>
  );
}

function ServiceSection() {
  useLang();
  const bullets = [
    { k: tr('Arquitectura', 'Architecture'),
      v: tr('Modelo de amenazas, separación de responsabilidades y diseño criptográfico antes del primer commit.',
            'Threat model, separation of duties and cryptographic design before the first commit.') },
    { k: tr('Integración HSM', 'HSM integration'),
      v: tr('Cuando la API no alcanza: nativo en C, Java o PKCS#11 sobre payShield y Luna.',
            'When the API isn\u2019t enough: native C, Java or PKCS#11 over payShield and Luna.') },
    { k: tr('Code review · pentest', 'Code review · pentest'),
      v: tr('Revisión continua de código y pruebas de penetración internas antes de cada release crítico.',
            'Continuous code review and internal penetration testing before every critical release.') },
    { k: tr('Cumplimiento', 'Compliance'),
      v: tr('Acompañamiento hasta cierre de auditoría PCI, ISO 27001 o SOC — sin sorpresas externas.',
            'Hands-on support through PCI, ISO 27001 or SOC audit close-out — no external surprises.') },
  ];

  return (
    <section id="service" className="rs-section" style={{
      padding: '120px 0', background: 'var(--cream-2)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', position: 'relative',
    }}>
      <div className="container">
        <div className="rs-section-head" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span>
              <span>{tr('SERVICIO PROFESIONAL', 'PROFESSIONAL SERVICE')}</span>
            </div>
            <h2 className="rs-h2" style={{
              fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)',
            }}>
              {tr('Cuando los productos', 'When the products')}<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                {tr('no alcanzan.', 'aren\u2019t enough.')}
              </span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
              {tr(
                'Algiz Platform cubre los casos comunes de banca y pagos. Para todo lo demás existe nuestro equipo de arquitectos de seguridad — embebidos en tu proyecto, no consultores de paso. Esto no es un producto: es ingeniería a la medida.',
                'Algiz Platform covers the common banking and payments cases. For everything else there\u2019s our team of security architects — embedded in your project, not drive-by consultants. This isn\u2019t a product: it\u2019s engineering tailored to you.'
              )}
            </p>
          </div>
        </div>

        <a href="desarrollo-seguro.html" className="rs-service-card" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0,
          background: '#fff', border: '1px solid var(--line)', borderRadius: 4,
          textDecoration: 'none', color: 'inherit', overflow: 'hidden',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.boxShadow = '0 20px 50px -30px rgba(0,39,77,0.25)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.boxShadow = 'none'; }}>

          <div style={{
            padding: '48px', display: 'flex', flexDirection: 'column', gap: 24,
            borderRight: '1px solid var(--line)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                {tr('Servicio · Ingeniería a la medida', 'Service · Custom engineering')}
              </div>
              <div style={{
                width: 36, height: 36, border: '1px solid var(--line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)',
              }}>
                <Icon.ArrowUpRight size={14} />
              </div>
            </div>

            <h3 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
              {tr('Desarrollo seguro a la medida', 'Custom secure development')}
            </h3>

            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty' }}>
              {tr(
                'Arquitectos senior trabajando junto a tu equipo, desde el modelo de amenazas hasta el cierre de auditoría. Integración nativa con HSMs cuando el caso lo exige.',
                'Senior architects working alongside your team, from the threat model through audit close-out. Native HSM integration whenever the case demands it.'
              )}
            </p>

            <div style={{
              marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--line-soft)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            }}>
              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 32, fontWeight: 500,
                  letterSpacing: '-0.02em', color: 'var(--navy)',
                }}>{tr('+12 años', '12+ years')}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>
                  {tr('Experiencia promedio del equipo', 'Average team experience')}
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: 6 }}>
                {tr('Conocer el servicio', 'Learn about the service')} <Icon.ArrowRight size={12} />
              </div>
            </div>
          </div>

          <div style={{
            padding: '48px', background: 'var(--cream)',
            display: 'flex', flexDirection: 'column', gap: 22,
          }}>
            <div className="mono" style={{
              fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4,
            }}>
              · {tr('Qué incluye el engagement', 'What the engagement includes')}
            </div>
            {bullets.map((b, i) =>
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16,
              paddingBottom: i < bullets.length - 1 ? 18 : 0,
              borderBottom: i < bullets.length - 1 ? '1px solid var(--line-soft)' : 'none',
            }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--navy)' }}>{b.k}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55, textWrap: 'pretty' }}>{b.v}</div>
              </div>)}
          </div>
        </a>
      </div>
    </section>
  );
}

function ResultsSection() {
  useLang();
  return (
    <section className="rs-section" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="rs-split" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span>
              <span>{tr('Por qué Algiz', 'Why Algiz')}</span>
            </div>
            <h2 className="rs-h2" style={{
              fontSize: 52, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: '0 0 24px', color: 'var(--navy)',
            }}>
              {tr('Menos integración,', 'Less integration,')}<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                {tr('más control donde importa.', 'more control where it matters.')}
              </span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 32px', maxWidth: 480, textWrap: 'pretty' }}>
              {tr(
                'Nuestros productos están pensados para reducir lo que más cuesta en banca y procesadores de pago: el tiempo de integración con HSMs y la superficie auditable de PCI. Sin reescribir clientes, sin tocar el core.',
                'Our products are designed to reduce what costs the most in banking and payment processors: HSM integration time and PCI auditable surface. No client rewrites, no core changes.'
              )}
            </p>

            <div style={{
              padding: 28, border: '1px solid var(--line)', background: '#fff',
              borderLeft: '3px solid var(--teal)', borderRadius: 2,
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.15em',
                textTransform: 'uppercase', marginBottom: 18,
              }}>
                {tr('Incluido por defecto', 'Included by default')}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  tr('API HTTP/JSON sobre HSMs payShield y Luna — sin SDKs nativos en la aplicación.',
                     'HTTP/JSON API over payShield and Luna HSMs — no native SDKs in the application.'),
                  tr('Auditoría firmada criptográficamente para cada operación.',
                     'Cryptographically signed audit for every operation.'),
                  tr('Despliegue on-premise o cloud-native, en alta disponibilidad activo–activo.',
                     'On-premise or cloud-native deployment, active-active high availability.'),
                  tr('Mejores prácticas: PCI-DSS, PCI HSM, ISO 27001, FIPS 140-2 L3.',
                     'Best practices: PCI-DSS, PCI HSM, ISO 27001, FIPS 140-2 L3.'),
                ].map((item) =>
                <li key={item} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14.5,
                  lineHeight: 1.55, color: 'var(--ink)', textWrap: 'pretty',
                }}>
                    <span style={{ color: 'var(--teal-deep)', flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <Icon.Check size={14} />
                    </span>
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>

          <div className="rs-stats-2x2" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)',
          }}>
            {[
              { n: tr('Semanas', 'Weeks'),    l: tr('Tiempo de integración', 'Integration time'),                     src: tr('No meses · API HTTP/JSON sobre HSMs Thales', 'Not months · HTTP/JSON API over Thales HSMs') },
              { n: tr('Tokeniza', 'Tokenize'), l: tr('Menor superficie PCI', 'Smaller PCI footprint'),                 src: tr('PAN, PIN block y track2 protegidos antes del backend', 'PAN, PIN block and track2 protected before the backend') },
              { n: tr('Cero', 'Zero'),         l: tr('Llaves criptográficas en claro', 'Cryptographic keys in the clear'), src: tr('Inyección y rotación 100% bajo HSM', 'Injection and rotation 100% inside the HSM') },
              { n: 'A / A',                    l: tr('Alta disponibilidad por defecto', 'High availability by default'),  src: tr('Cola persistente · circuit breakers · failover', 'Persistent queue · circuit breakers · failover') },
            ].map((s, i) =>
            <div key={i} style={{
              background: '#fff', padding: 36, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 200,
            }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 44, fontWeight: 500,
                  letterSpacing: '-0.03em', color: 'var(--navy)', lineHeight: 1,
                }}>{s.n}</div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>{s.l}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.05em', lineHeight: 1.5 }}>→ {s.src}</div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  useLang();
  return (
    <section className="rs-section" style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
      <div className="container">
        <div className="rs-cta" style={{
          background: 'var(--navy)', color: '#fff', padding: '80px 64px', borderRadius: 4,
          position: 'relative', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'center',
        }}>
          <div style={{
            position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)',
            opacity: 0.08, pointerEvents: 'none',
          }}>
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
              <path d="M250 50 L250 450" stroke="var(--teal)" strokeWidth="3" />
              <path d="M250 50 L100 200" stroke="var(--teal)" strokeWidth="3" />
              <path d="M250 50 L400 200" stroke="var(--teal)" strokeWidth="3" />
            </svg>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'var(--teal)' }}>
              <span className="dot"></span>
              <span style={{ color: 'var(--teal)' }}>{tr('Empieza', 'Get started')}</span>
            </div>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
              {tr('Una sesión de 30 minutos', 'A 30-minute session')}<br />
              {tr('vale más que diez auditorías.', 'is worth more than ten audits.')}
            </h2>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', margin: '0 0 12px', textWrap: 'pretty' }}>
              {tr(
                'Te conectamos con un arquitecto senior. Sin pitch, sin formularios eternos. Solo tu stack y dónde estamos viendo riesgo.',
                'We connect you with a senior architect. No pitch, no endless forms. Just your stack and where we see risk.'
              )}
            </p>
            <a href="contacto.html" className="btn btn-teal" style={{ justifyContent: 'center' }}>
              {tr('Agendar diagnóstico', 'Book a diagnostic')}
              <Icon.ArrowRight size={14} />
            </a>
            <a href="contacto.html" className="btn btn-ghost-light" style={{ justifyContent: 'center' }}>
              {tr('Hablar con ventas', 'Talk to sales')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="view-enter">
      <Hero />
      <SectorStrip />
      <SolutionsSection />
      <PlatformSection />
      <ServiceSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
}

Object.assign(window, { Home });
