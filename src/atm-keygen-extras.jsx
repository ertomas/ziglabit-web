// ATM Keygen — additional sections appended after the core flow.
// Operating environment, audit + safe shutdown, closing CTA.

// ---------------------------------------------------------------------------
// 7. Operating environment
// ---------------------------------------------------------------------------
function AKEnvironment() {
  const items = [
    {
      n: '01',
      k: 'Equipo embedded dedicado',
      d: 'Una sola pieza de hardware, físicamente aislada, instalada en las dependencias del cliente. Sin uso compartido, sin software ajeno a la ceremonia.',
      tags: ['embedded', 'on-site'],
    },
    {
      n: '02',
      k: 'Air-gap por defecto',
      d: 'Sin interfaces de red habilitadas. La única superficie de I/O son el lector del HSM, la impresora y el puerto USB destinado a la exportación cifrada.',
      tags: ['no Wi-Fi', 'no Ethernet'],
    },
    {
      n: '03',
      k: 'Full disk encryption',
      d: 'Disco completo cifrado en frío. Sin la frase de paso, el equipo apagado es un ladrillo — no hay residuo recuperable de ceremonias anteriores.',
      tags: ['FDE', 'sin residuo'],
    },
    {
      n: '04',
      k: 'Impresora de matriz de puntos',
      d: 'Formulario continuo, sin búfer en red. Cada sobre se imprime con número de serie de control y queda asociado a un ATM ID en el CSV de cierre.',
      tags: ['continuo', 'serie de control'],
    },
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          marginBottom: 56, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span>Entorno de operación</span>
            </div>
            <h2 style={{
              fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: 0, color: 'var(--zb-navy)',
            }}>
              Una caja sola, sin red, <span style={{
                fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)',
              }}>cifrada hasta el disco.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0,
              maxWidth: 520, textWrap: 'pretty',
            }}>
              ATM Keygen opera en un equipo embedded dedicado, en las instalaciones del
              cliente. Sin red, sin pantalla compartida, sin software de propósito general
              — la única función del dispositivo es ejecutar la ceremonia.
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
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 280,
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--zb-teal-deep)', letterSpacing: '0.15em',
              }}>{it.n}</div>
              <h4 style={{
                fontSize: 18, fontWeight: 600, margin: 0,
                color: 'var(--zb-navy)', letterSpacing: '-0.015em', lineHeight: 1.25,
              }}>{it.k}</h4>
              <p style={{
                fontSize: 13.5, lineHeight: 1.55, color: 'var(--zb-ink-2)',
                margin: 0, flex: 1, textWrap: 'pretty',
              }}>{it.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {it.tags.map(t => (
                  <span key={t} className="mono" style={{
                    fontSize: 10.5, padding: '5px 9px',
                    border: '1px solid var(--zb-line)', color: 'var(--zb-navy)',
                    letterSpacing: '0.05em',
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
  // a frozen audit log slice — looks authentic, no secrets ever
  const log = [
    { t: '14:02:11', a: 'op.ana',  ev: 'AUTH.LOGIN_OK',          d: 'autenticación dual completada',           r: 'ok' },
    { t: '14:02:48', a: 'op.luis', ev: 'AUTH.LOGIN_OK',          d: 'autenticación dual completada',           r: 'ok' },
    { t: '14:03:22', a: 'op.ana',  ev: 'CEREMONY.INIT',          d: 'CER-2026-0418-014 · BANCO REGIONAL CO',   r: 'ok' },
    { t: '14:04:07', a: 'op.ana',  ev: 'CUSTODIAN.AUTH',         d: 'M. RESTREPO · tarjeta HSM 1/2',           r: 'ok' },
    { t: '14:04:31', a: 'op.luis', ev: 'CUSTODIAN.AUTH',         d: 'R. CARDOZO · tarjeta HSM 2/2',            r: 'ok' },
    { t: '14:04:33', a: 'system',  ev: 'HSM.LMK_AUTHORIZED',     d: 'payShield 10k · estado LMK = autorizado', r: 'ok' },
    { t: '14:06:18', a: 'op.ana',  ev: 'BATCH.START',            d: '287 ATM IDs cargados · 0 duplicados',     r: 'ok' },
    { t: '14:28:54', a: 'system',  ev: 'BATCH.KEY_GENERATED',    d: 'ATM 00141 · sobre SOB-CO-026-04XXX139',   r: 'ok' },
    { t: '14:29:02', a: 'system',  ev: 'BATCH.KEY_GENERATED',    d: 'ATM 00142 · sobre SOB-CO-026-04XXX140',   r: 'ok' },
    { t: '14:29:11', a: 'system',  ev: 'PRINT.ENVELOPE_OK',      d: 'sobre 141 impreso · matriz de puntos',    r: 'ok' },
  ];

  const checklist = [
    { k: 'LMK desautorizado',       d: 'El HSM payShield 10k queda fuera de modo autorizado antes de cualquier otra cosa.' },
    { k: 'Bitácora firmada',        d: 'Audit log cerrado y firmado con SHA-256. Hash impreso en el último sobre de la ceremonia.' },
    { k: 'CSV exportado',          d: 'Archivo enviado al USB IronKey y verificado con SHA-256 antes de desmontar.' },
    { k: 'Sobres conciliados',      d: 'Cantidad de sobres impresos = cantidad de ATMs procesados. Diferencia bloquea el cierre.' },
    { k: 'Operadores reconocen',    d: 'Doble confirmación en pantalla. Ningún operador puede cerrar solo.' },
  ];

  return (
    <section style={{
      padding: '120px 0', background: 'var(--zb-navy)', color: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          marginBottom: 56, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Auditoría y cierre</span>
            </div>
            <h2 style={{
              fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: 0,
            }}>
              Cada acción queda registrada. <span style={{ color: 'var(--zb-teal)' }}>
                Ningún secreto sale del HSM.
              </span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
              margin: 0, maxWidth: 540, textWrap: 'pretty',
            }}>
              El audit log captura timestamp, actor, acción y resultado de cada paso —
              sin almacenar jamás componentes, llaves ni KCV en claro. La sesión sólo
              cierra cuando el checklist completo se valida.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24,
        }}>
          {/* audit log table */}
          <div style={{
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              display: 'grid',
              gridTemplateColumns: '90px 100px 1.2fr 1.6fr 50px',
              gap: 16,
            }}>
              {['Tiempo', 'Actor', 'Evento', 'Detalle', 'R'].map(h => (
                <div key={h} className="mono" style={{
                  fontSize: 10.5, color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>{h}</div>
              ))}
            </div>
            {log.map((l, i) => (
              <div key={i} style={{
                padding: '13px 24px',
                borderBottom: i < log.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                display: 'grid',
                gridTemplateColumns: '90px 100px 1.2fr 1.6fr 50px',
                gap: 16,
                alignItems: 'center',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
              }}>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{l.t}</span>
                <span style={{ color: '#fff' }}>{l.a}</span>
                <span style={{ color: 'var(--zb-teal)', letterSpacing: '0.04em' }}>{l.ev}</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Poppins, sans-serif', fontSize: 13 }}>{l.d}</span>
                <span style={{
                  color: 'var(--zb-teal)',
                  letterSpacing: '0.1em',
                  textAlign: 'right',
                }}>OK</span>
              </div>
            ))}
            <div style={{
              padding: '14px 24px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.18)',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.05em',
            }}>
              <span>audit.log · SHA-256</span>
              <span style={{ color: 'var(--zb-teal)' }}>9c41a8…7e2f3d</span>
            </div>
          </div>

          {/* closing checklist */}
          <div style={{
            border: '1px solid rgba(0,209,178,0.4)',
            background: 'rgba(0,209,178,0.04)',
            padding: '24px 28px',
          }}>
            <div className="mono" style={{
              fontSize: 11, color: 'var(--zb-teal)', letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 18,
            }}>· Checklist de cierre</div>
            <div style={{
              fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
              marginBottom: 22, textWrap: 'pretty',
            }}>
              El equipo sólo permite apagarse si todos los puntos están en verde. No hay
              forma de saltar este paso desde la TUI.
            </div>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              {checklist.map((c, i) => (
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
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 3 }}>
                      {c.k}
                    </div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)', textWrap: 'pretty' }}>
                      {c.d}
                    </div>
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
  const capabilities = [
    ['Generación batch',     'Sí · una ceremonia, cientos de ATMs'],
    ['Rotación remota',      'No · ATM Keygen no carga ni rota llaves en el ATM'],
    ['Material en pantalla', 'Nunca · todo va directo a impresora'],
    ['Audit log',            'Firmado SHA-256 · sin secretos en claro'],
    ['HSM soportado',        'Thales payShield 10k'],
    ['Exportación',          'CSV a USB · verificado SHA-256'],
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
          alignItems: 'start',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span>Hablemos</span>
            </div>
            <h2 style={{
              fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: '0 0 24px', color: 'var(--zb-navy)',
            }}>
              ¿Tu próxima ceremonia <span style={{
                fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)',
              }}>aún se hace a mano?</span>
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: 'var(--zb-ink-2)',
              margin: '0 0 32px', maxWidth: 520, textWrap: 'pretty',
            }}>
              Coordinamos una demo en vivo con un payShield 10k de laboratorio. En 45
              minutos ves la ceremonia completa, los sobres impresos y el CSV firmado al cierre.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="contacto.html" className="btn btn-primary">
                Solicitar demo en vivo
                <Icon.ArrowRight size={14} />
              </a>
              <a href="index.html" className="btn btn-ghost">
                Ver otros productos
              </a>
            </div>
          </div>

          <div style={{
            border: '1px solid var(--zb-line)',
            background: '#fff',
            padding: '28px 32px',
          }}>
            <div className="mono" style={{
              fontSize: 11, color: 'var(--zb-ink-3)', letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 18,
            }}>· Capacidades en una mirada</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {capabilities.map(([k, v]) => (
                <div key={k} style={{
                  display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16,
                  paddingBottom: 14,
                  borderBottom: '1px solid var(--zb-line-soft)',
                  fontSize: 13.5,
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
