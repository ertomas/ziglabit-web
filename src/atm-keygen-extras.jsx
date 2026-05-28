// ATM Keygen — additional sections appended after the core flow.

// ---------------------------------------------------------------------------
// 7. Operating environment
// ---------------------------------------------------------------------------
function AKEnvironment() {
  useLang();
  const items = [
    { n: '01',
      k: tr('Equipo embedded dedicado', 'Dedicated embedded device'),
      d: tr('Una sola pieza de hardware, físicamente aislada, instalada en las dependencias del cliente. Sin uso compartido, sin software ajeno a la ceremonia.',
            'A single piece of hardware, physically isolated, installed on customer premises. No shared use, no software outside the ceremony.'),
      tags: ['embedded', 'on-site'] },
    { n: '02',
      k: tr('Air-gap por defecto', 'Air-gap by default'),
      d: tr('Sin interfaces de red habilitadas. La única superficie de I/O son el lector del HSM, la impresora y el puerto USB destinado a la exportación cifrada.',
            'No network interfaces enabled. The only I/O surfaces are the HSM reader, the printer and the USB port dedicated to encrypted export.'),
      tags: ['no Wi-Fi', 'no Ethernet'] },
    { n: '03',
      k: tr('Full disk encryption', 'Full disk encryption'),
      d: tr('Disco completo cifrado en frío. Sin la frase de paso, el equipo apagado es un ladrillo — no hay residuo recuperable de ceremonias anteriores.',
            'Full cold-disk encryption. Without the passphrase, a powered-off device is a brick — no recoverable residue from previous ceremonies.'),
      tags: ['FDE', tr('sin residuo', 'no residue')] },
    { n: '04',
      k: tr('Impresora de matriz de puntos', 'Dot-matrix printer'),
      d: tr('Formulario continuo, sin búfer en red. Cada sobre se imprime con número de serie de control y queda asociado a un ATM ID en el CSV de cierre.',
            'Continuous form, no networked buffer. Each envelope prints with a control serial and is bound to an ATM ID in the closing CSV.'),
      tags: [tr('continuo', 'continuous'), tr('serie de control', 'control serial')] },
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span>{tr('Entorno de operación', 'Operating environment')}</span>
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--zb-navy)' }}>
              {tr('Una caja sola, sin red, ', 'A single box, no network, ')}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)' }}>
                {tr('cifrada hasta el disco.', 'encrypted down to the disk.')}
              </span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
              {tr(
                'ATM Keygen opera en un equipo embedded dedicado, en las instalaciones del cliente. Sin red, sin pantalla compartida, sin software de propósito general — la única función del dispositivo es ejecutar la ceremonia.',
                'ATM Keygen runs on a dedicated embedded device, on customer premises. No network, no shared screen, no general-purpose software — the device\u2019s only function is to run the ceremony.'
              )}
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'var(--zb-line)', border: '1px solid var(--zb-line)',
        }}>
          {items.map(it => (
            <div key={it.n} style={{
              background: '#fff', padding: 32,
              display: 'flex', flexDirection: 'column', gap: 14, minHeight: 280,
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--zb-teal-deep)', letterSpacing: '0.15em' }}>{it.n}</div>
              <h4 style={{ fontSize: 18, fontWeight: 600, margin: 0, color: 'var(--zb-navy)', letterSpacing: '-0.015em', lineHeight: 1.25 }}>{it.k}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--zb-ink-2)', margin: 0, flex: 1, textWrap: 'pretty' }}>{it.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {it.tags.map(t => (
                  <span key={t} className="mono" style={{
                    fontSize: 10.5, padding: '5px 9px',
                    border: '1px solid var(--zb-line)', color: 'var(--zb-navy)', letterSpacing: '0.05em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 8. Audit log + safe shutdown
// ---------------------------------------------------------------------------
function AKAudit() {
  useLang();

  // event details get translated; event codes & timestamps stay technical
  const log = [
    { t: '14:02:11', a: 'op.ana',  ev: 'AUTH.LOGIN_OK',      d: tr('autenticación dual completada',         'dual authentication completed') },
    { t: '14:02:48', a: 'op.luis', ev: 'AUTH.LOGIN_OK',      d: tr('autenticación dual completada',         'dual authentication completed') },
    { t: '14:03:22', a: 'op.ana',  ev: 'CEREMONY.INIT',      d: 'CER-2026-0418-014 · BANCO REGIONAL CO' },
    { t: '14:04:07', a: 'op.ana',  ev: 'CUSTODIAN.AUTH',     d: tr('M. RESTREPO · tarjeta HSM 1/2',          'M. RESTREPO · HSM card 1/2') },
    { t: '14:04:31', a: 'op.luis', ev: 'CUSTODIAN.AUTH',     d: tr('R. CARDOZO · tarjeta HSM 2/2',           'R. CARDOZO · HSM card 2/2') },
    { t: '14:04:33', a: 'system',  ev: 'HSM.LMK_AUTHORIZED', d: tr('payShield 10k · estado LMK = autorizado','payShield 10k · LMK state = authorized') },
    { t: '14:06:18', a: 'op.ana',  ev: 'BATCH.START',        d: tr('287 ATM IDs cargados · 0 duplicados',    '287 ATM IDs loaded · 0 duplicates') },
    { t: '14:28:54', a: 'system',  ev: 'BATCH.KEY_GENERATED',d: tr('ATM 00141 · sobre SOB-CO-026-04XXX139',  'ATM 00141 · envelope SOB-CO-026-04XXX139') },
    { t: '14:29:02', a: 'system',  ev: 'BATCH.KEY_GENERATED',d: tr('ATM 00142 · sobre SOB-CO-026-04XXX140',  'ATM 00142 · envelope SOB-CO-026-04XXX140') },
    { t: '14:29:11', a: 'system',  ev: 'PRINT.ENVELOPE_OK',  d: tr('sobre 141 impreso · matriz de puntos',   'envelope 141 printed · dot-matrix') },
  ];

  const checklist = [
    { k: tr('LMK desautorizado', 'LMK deauthorized'),
      d: tr('El HSM payShield 10k queda fuera de modo autorizado antes de cualquier otra cosa.',
            'The payShield 10k HSM is taken out of authorized mode before anything else.') },
    { k: tr('Bitácora firmada', 'Signed log'),
      d: tr('Audit log cerrado y firmado con SHA-256. Hash impreso en el último sobre de la ceremonia.',
            'Audit log closed and signed with SHA-256. Hash printed on the ceremony\u2019s last envelope.') },
    { k: tr('CSV exportado', 'CSV exported'),
      d: tr('Archivo enviado al USB IronKey y verificado con SHA-256 antes de desmontar.',
            'File sent to the IronKey USB and verified with SHA-256 before unmounting.') },
    { k: tr('Sobres conciliados', 'Envelopes reconciled'),
      d: tr('Cantidad de sobres impresos = cantidad de ATMs procesados. Diferencia bloquea el cierre.',
            'Number of printed envelopes = number of processed ATMs. Any mismatch blocks close-out.') },
    { k: tr('Operadores reconocen', 'Operators acknowledge'),
      d: tr('Doble confirmación en pantalla. Ningún operador puede cerrar solo.',
            'Double on-screen confirmation. No operator can close alone.') },
  ];

  return (
    <section style={{
      padding: '120px 0', background: 'var(--zb-navy)', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr('Auditoría y cierre', 'Audit and close-out')}</span>
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
              {tr('Cada acción queda registrada. ', 'Every action is recorded. ')}
              <span style={{ color: 'var(--zb-teal)' }}>
                {tr('Ningún secreto sale del HSM.', 'No secret leaves the HSM.')}
              </span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 540, textWrap: 'pretty' }}>
              {tr(
                'El audit log captura timestamp, actor, acción y resultado de cada paso — sin almacenar jamás componentes, llaves ni KCV en claro. La sesión sólo cierra cuando el checklist completo se valida.',
                'The audit log captures timestamp, actor, action and result of every step — never storing components, keys or KCV in the clear. The session only closes when the full checklist is validated.'
              )}
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
          {/* audit log table */}
          <div style={{ border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{
              padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.15)',
              display: 'grid', gridTemplateColumns: '90px 100px 1.2fr 1.6fr 50px', gap: 16,
            }}>
              {[
                tr('Tiempo', 'Time'),
                tr('Actor', 'Actor'),
                tr('Evento', 'Event'),
                tr('Detalle', 'Detail'),
                'R',
              ].map((h, i) => (
                <div key={i} className="mono" style={{
                  fontSize: 10.5, color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>{h}</div>
              ))}
            </div>
            {log.map((l, i) => (
              <div key={i} style={{
                padding: '13px 24px',
                borderBottom: i < log.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                display: 'grid', gridTemplateColumns: '90px 100px 1.2fr 1.6fr 50px', gap: 16,
                alignItems: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
              }}>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{l.t}</span>
                <span style={{ color: '#fff' }}>{l.a}</span>
                <span style={{ color: 'var(--zb-teal)', letterSpacing: '0.04em' }}>{l.ev}</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Poppins, sans-serif', fontSize: 13 }}>{l.d}</span>
                <span style={{ color: 'var(--zb-teal)', letterSpacing: '0.1em', textAlign: 'right' }}>OK</span>
              </div>
            ))}
            <div style={{
              padding: '14px 24px', borderTop: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.18)',
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em',
            }}>
              <span>audit.log · SHA-256</span>
              <span style={{ color: 'var(--zb-teal)' }}>9c41a8…7e2f3d</span>
            </div>
          </div>

          {/* closing checklist */}
          <div style={{
            border: '1px solid rgba(0,209,178,0.4)',
            background: 'rgba(0,209,178,0.04)', padding: '24px 28px',
          }}>
            <div className="mono" style={{
              fontSize: 11, color: 'var(--zb-teal)', letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 18,
            }}>· {tr('Checklist de cierre', 'Close-out checklist')}</div>
            <div style={{
              fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
              marginBottom: 22, textWrap: 'pretty',
            }}>
              {tr(
                'El equipo sólo permite apagarse si todos los puntos están en verde. No hay forma de saltar este paso desde la TUI.',
                'The device only allows shutdown if every item is green. There is no way to skip this step from the TUI.'
              )}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {checklist.map((c) => (
                <li key={c.k} style={{ display: 'flex', gap: 14 }}>
                  <span style={{
                    width: 22, height: 22, flexShrink: 0,
                    border: '1px solid var(--zb-teal)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--zb-teal)',
                  }}>
                    <Icon.Check size={12} />
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{c.k}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)', textWrap: 'pretty' }}>{c.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 9. Closing CTA + capabilities footer
// ---------------------------------------------------------------------------
function AKCTA() {
  useLang();
  const capabilities = [
    [tr('Generación batch',     'Batch generation'),       tr('Sí · una ceremonia, cientos de ATMs',         'Yes · one ceremony, hundreds of ATMs')],
    [tr('Rotación remota',      'Remote rotation'),        tr('No · ATM Keygen no carga ni rota llaves en el ATM', 'No · ATM Keygen does not load or rotate keys on the ATM')],
    [tr('Material en pantalla', 'Material on screen'),     tr('Nunca · todo va directo a impresora',         'Never · everything goes straight to the printer')],
    [tr('Audit log',            'Audit log'),              tr('Firmado SHA-256 · sin secretos en claro',      'SHA-256 signed · no secrets in the clear')],
    [tr('HSM soportado',        'Supported HSM'),          'Thales payShield 10k'],
    [tr('Exportación',          'Export'),                 tr('CSV a USB · verificado SHA-256',               'CSV to USB · SHA-256 verified')],
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span>{tr('Hablemos', 'Let\u2019s talk')}</span>
            </div>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: '0 0 24px', color: 'var(--zb-navy)' }}>
              {tr('¿Tu próxima ceremonia ', 'Is your next ceremony ')}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)' }}>
                {tr('aún se hace a mano?', 'still done by hand?')}
              </span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: '0 0 32px', maxWidth: 520, textWrap: 'pretty' }}>
              {tr(
                'Coordinamos una demo en vivo con un payShield 10k de laboratorio. En 45 minutos ves la ceremonia completa, los sobres impresos y el CSV firmado al cierre.',
                'We coordinate a live demo on a lab payShield 10k. In 45 minutes you see the full ceremony, the printed envelopes and the signed CSV at close-out.'
              )}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="contacto.html" className="btn btn-primary">
                {tr('Solicitar demo en vivo', 'Request a live demo')}
                <Icon.ArrowRight size={14} />
              </a>
              <a href="index.html" className="btn btn-ghost">
                {tr('Ver otros productos', 'See other products')}
              </a>
            </div>
          </div>

          <div style={{ border: '1px solid var(--zb-line)', background: '#fff', padding: '28px 32px' }}>
            <div className="mono" style={{
              fontSize: 11, color: 'var(--zb-ink-3)', letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 18,
            }}>· {tr('Capacidades en una mirada', 'Capabilities at a glance')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {capabilities.map(([k, v], i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16,
                  paddingBottom: 14, borderBottom: '1px solid var(--zb-line-soft)', fontSize: 13.5,
                }}>
                  <span style={{ color: 'var(--zb-ink-3)' }}>{k}</span>
                  <span style={{ color: 'var(--zb-navy)', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AKEnvironment, AKAudit, AKCTA });
