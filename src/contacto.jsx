// Página de contacto — canales directos sin formulario
const { useState: useStateContact } = React;

const CONTACT = {
  email: 'info@ziglabit.com',
  phones: [
    { labelEs: 'Móvil',   labelEn: 'Mobile',  number: '+507 6210 1898', tel: '+50762101898' },
    { labelEs: 'Oficina', labelEn: 'Office',  number: '+507 209 0069',  tel: '+5072090069' },
  ],
  linkedin: 'https://www.linkedin.com/company/ziglabit',
  linkedinLabel: 'linkedin.com/company/ziglabit',
  mapsUrl: 'https://maps.google.com/?q=F%26F+Tower+Calle+50+Panama',
};

function ContactView() {
  useLang();
  const [copied, setCopied] = useStateContact(false);

  const onCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="view-enter">
      {/* Breadcrumb */}
      <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container" style={{ padding: '20px 32px' }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--ink-3)', display: 'flex', gap: 16, alignItems: 'center',
          }}>
            <a href="index.html" style={{ color: 'inherit', textDecoration: 'none' }}>Ziglabit</a>
            <span>/</span>
            <span style={{ color: 'var(--navy)' }}>{tr('Contacto', 'Contact')}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="rs-section" style={{
        background: 'var(--navy)', color: '#fff', padding: '96px 0 120px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: '-5%', top: '-10%', opacity: 0.08, pointerEvents: 'none' }} aria-hidden="true">
          <svg width="700" height="800" viewBox="0 0 700 800" fill="none">
            <path d="M350 60 L350 740" stroke="var(--teal)" strokeWidth="3" />
            <path d="M350 60 L80 320"  stroke="var(--teal)" strokeWidth="3" />
            <path d="M350 60 L620 320" stroke="var(--teal)" strokeWidth="3" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div className="rs-split" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--teal)' }}>
                <span className="dot"></span>
                <span style={{ color: 'var(--teal)' }}>{tr('Contacto', 'Contact')}</span>
              </div>
              <h1 className="rs-h1" style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, margin: '0 0 32px' }}>
                {tr('Hablemos de tu', 'Let\u2019s talk about your')}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                  {tr('próxima integración.', 'next integration.')}
                </span>
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', margin: '0 0 40px', maxWidth: 580, textWrap: 'pretty' }}>
                {tr(
                  'Sin formularios largos ni discovery genéricos. Cada conversación arranca con tu arquitectura actual y termina con un diagnóstico técnico concreto — escríbenos al correo o llámanos directo a la oficina en Panamá.',
                  'No long forms, no generic discovery. Every conversation starts with your current architecture and ends with a concrete technical diagnostic — email us or call our office in Panama directly.'
                )}
              </p>
              <div className="rs-btn-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={`mailto:${CONTACT.email}`} className="btn btn-teal">
                  {tr('Enviar correo', 'Send email')}
                  <Icon.ArrowRight size={14} />
                </a>
                <a href={`tel:${CONTACT.phones[0].tel}`} className="btn btn-ghost-light">
                  {tr('Llamar', 'Call')} {CONTACT.phones[0].number}
                </a>
              </div>
            </div>

            {/* Highlighted email card */}
            <div className="rs-sol-statcard" style={{ border: '1px solid rgba(255,255,255,0.18)', padding: 32, borderRadius: 4, position: 'relative' }}>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: 14 }}>
                {tr('CORREO PRINCIPAL', 'PRIMARY EMAIL')}
              </div>
              <a href={`mailto:${CONTACT.email}`} className="mono" style={{
                display: 'block', fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em',
                color: 'var(--teal)', lineHeight: 1.1, marginBottom: 20,
                textDecoration: 'none', wordBreak: 'break-word',
              }}>{CONTACT.email}</a>

              <button onClick={onCopyEmail} style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', padding: '8px 14px',
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                borderRadius: 2, transition: 'border-color 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}>
                {copied ? (
                  <React.Fragment>
                    <Icon.Check size={12} />
                    <span>{tr('Copiado', 'Copied')}</span>
                  </React.Fragment>
                ) : (
                  <span>{tr('Copiar dirección', 'Copy address')}</span>
                )}
              </button>

              <div style={{
                marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.15)',
                fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.6, textWrap: 'pretty',
              }}>
                {tr(
                  'Respondemos consultas técnicas dentro del día hábil. Para temas sensibles, indícalo en el asunto.',
                  'We answer technical queries within the business day. For sensitive matters, flag it in the subject.'
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canales directos */}
      <section className="rs-section" style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 64, alignItems: 'end',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Canales directos', 'Direct channels')}</span>
              </div>
              <h2 className="rs-h2" style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Tres formas', 'Three ways')}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                  {tr('de llegar a nosotros.', 'to reach us.')}
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                {tr(
                  'Atendemos consultas en español e inglés para clientes de toda la región LATAM.',
                  'We answer queries in Spanish and English for clients across LATAM.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-contact-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)',
          }}>
            {/* Teléfonos */}
            <div style={{ background: '#fff', padding: 40 }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--teal-deep)', letterSpacing: '0.15em', marginBottom: 22 }}>
                01
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 24px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                {tr('Teléfono', 'Phone')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {CONTACT.phones.map((p, i) => (
                  <a key={p.tel} href={`tel:${p.tel}`} style={{
                    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                    padding: '16px 0',
                    borderTop: i === 0 ? '1px solid var(--line-soft)' : 'none',
                    borderBottom: '1px solid var(--line-soft)',
                    textDecoration: 'none', color: 'var(--navy)', transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--cream)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {tr(p.labelEs, p.labelEn)}
                    </span>
                    <span className="mono" style={{ fontSize: 18, color: 'var(--navy)', letterSpacing: '-0.01em' }}>{p.number}</span>
                  </a>
                ))}
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: '20px 0 0', textWrap: 'pretty' }}>
                {tr(
                  'Lunes a viernes, 8:00 a 18:00 hora de Panamá (UTC−5).',
                  'Monday to Friday, 8:00 to 18:00 Panama time (UTC−5).'
                )}
              </p>
            </div>

            {/* LinkedIn */}
            <div style={{ background: '#fff', padding: 40 }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--teal-deep)', letterSpacing: '0.15em', marginBottom: 22 }}>
                02
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 24px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                LinkedIn
              </h3>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 18px', border: '1px solid var(--navy)',
                color: 'var(--navy)', textDecoration: 'none',
                fontSize: 13.5, fontWeight: 500, borderRadius: 2,
                fontFamily: 'JetBrains Mono, monospace', letterSpacing: '-0.005em',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)'; }}>
                {CONTACT.linkedinLabel}
                <Icon.ArrowUpRight size={14} />
              </a>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: '20px 0 0', textWrap: 'pretty' }}>
                {tr(
                  'Síguenos para publicaciones técnicas sobre PCI, ISO 27001 e integraciones con HSMs.',
                  'Follow us for technical posts on PCI, ISO 27001 and HSM integrations.'
                )}
              </p>
            </div>

            {/* Oficina — full width */}
            <div style={{ background: '#fff', padding: 40, gridColumn: '1 / -1' }}>
              <div className="rs-office-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
                <div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--teal-deep)', letterSpacing: '0.15em', marginBottom: 22 }}>
                    03
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 24px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                    {tr('Oficina · Ciudad de Panamá', 'Office · Panama City')}
                  </h3>
                  <address style={{ fontStyle: 'normal', fontSize: 17, lineHeight: 1.65, color: 'var(--ink)', margin: '0 0 28px' }}>
                    {tr('Calle 50, Edificio F&F Tower', 'Calle 50, F&F Tower')}<br />
                    {tr('Piso 25 · Oficina 25A', 'Floor 25 · Suite 25A')}<br />
                    {tr('Obarrio, Ciudad de Panamá', 'Obarrio, Panama City')}<br />
                    {tr('República de Panamá', 'Republic of Panama')}
                  </address>
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost" style={{ padding: '11px 18px', fontSize: 13 }}>
                    {tr('Abrir en Google Maps', 'Open in Google Maps')}
                    <Icon.ArrowUpRight size={14} />
                  </a>
                </div>

                <div style={{
                  background: 'var(--cream)', border: '1px solid var(--line)',
                  padding: '28px 32px', borderRadius: 2,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220,
                }}>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.18em', marginBottom: 16 }}>
                      {tr('COORDENADAS', 'COORDINATES')}
                    </div>
                    <div className="mono" style={{ fontSize: 15, color: 'var(--navy)', lineHeight: 1.9 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--ink-3)' }}>LAT</span>
                        <span>8.984° N</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--ink-3)' }}>LON</span>
                        <span>79.522° W</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--ink-3)' }}>UTC</span>
                        <span>−05:00</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--line)' }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.18em', marginBottom: 8 }}>
                      {tr('RAZÓN SOCIAL', 'LEGAL ENTITY')}
                    </div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>
                      Ziglabit S.A. · {tr('Panamá', 'Panama')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="rs-contact-strip" style={{
            marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--line)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap',
          }}>
            <div className="mono" style={{
              fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em',
              textTransform: 'uppercase', maxWidth: 640, lineHeight: 1.6,
            }}>
              {tr(
                '¿Caso urgente? Escribe "URGENTE" en el asunto y atendemos en menos de 2 horas hábiles.',
                'Urgent case? Write "URGENT" in the subject and we\u2019ll respond within 2 business hours.'
              )}
            </div>
            <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(tr('URGENTE — ', 'URGENT — '))}`} className="btn btn-primary" style={{ padding: '13px 22px', fontSize: 13 }}>
              {tr('Contactar ahora', 'Contact now')}
              <Icon.ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ContactView });
