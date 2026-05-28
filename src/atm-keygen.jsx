// ATM Keygen — product page (split across multiple appends; this file is the entry)
const { useState: useStateAK, useEffect: useEffectAK } = React;

// ---------------------------------------------------------------------------
// 1. Breadcrumb bar
// ---------------------------------------------------------------------------
function AKBreadcrumb() {
  return (
    <div style={{
      borderBottom: '1px solid var(--zb-line)',
      padding: '20px 0',
      background: 'var(--zb-cream)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="index.html" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8,
          color: 'var(--zb-ink-2)', fontSize: 13, padding: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--zb-navy)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--zb-ink-2)'}
        >
          <Icon.ArrowLeft size={14} /> Volver al inicio
        </a>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--zb-ink-3)', display: 'flex', gap: 16, alignItems: 'center',
        }}>
          <span>Productos</span>
          <span>/</span>
          <span style={{ color: 'var(--zb-navy)' }}>03 — ATM Keygen</span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Hero
// ---------------------------------------------------------------------------
function AKHero() {
  return (
    <section style={{
      background: 'var(--zb-navy)',
      color: '#fff',
      padding: '96px 0 120px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      {/* algiz watermark */}
      <div style={{ position: 'absolute', right: '-5%', top: '-10%', opacity: 0.08, pointerEvents: 'none' }}>
        <svg width="700" height="800" viewBox="0 0 700 800" fill="none">
          <path d="M350 60 L350 740" stroke="var(--zb-teal)" strokeWidth="3" />
          <path d="M350 60 L80 320"  stroke="var(--zb-teal)" strokeWidth="3" />
          <path d="M350 60 L620 320" stroke="var(--zb-teal)" strokeWidth="3" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--zb-teal)' }}>
              <span className="dot"></span>
              <span style={{ color: 'var(--zb-teal)' }}>03 — Producto · ATM Keygen</span>
            </div>
            <h1 style={{
              fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em',
              fontWeight: 600, margin: '0 0 32px',
            }}>
              Cientos de cajeros, una sola ceremonia, <span style={{
                fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.78)',
              }}>cero transcripción manual.</span>
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)',
              margin: '0 0 40px', maxWidth: 620, textWrap: 'pretty',
            }}>
              ATM Keygen automatiza la ceremonia de generación de llaves TDES para flotas completas de
              ATMs sobre HSM Thales payShield 10k — imprimiendo sobres Sobreflex numerados y
              exportando la bitácora firmada, sin que el material criptográfico aparezca nunca en
              pantalla.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="contacto.html" className="btn btn-teal">
                Solicitar demo en vivo
                <Icon.ArrowRight size={14} />
              </a>
              <button className="btn btn-ghost-light">
                Descargar ficha técnica
              </button>
            </div>
          </div>

          {/* Spec card */}
          <div className="corner-ticks" style={{
            border: '1px solid rgba(255,255,255,0.18)',
            padding: 32, borderRadius: 4, position: 'relative',
          }}>
            <i />
            <div className="mono" style={{
              fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 14,
            }}>
              Especificación de referencia
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 52, fontWeight: 500, letterSpacing: '-0.03em',
              color: 'var(--zb-teal)', lineHeight: 1, marginBottom: 14,
            }}>TDES · KCV</div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>
              Generación batch de llaves simétricas sobre payShield 10k, con KCV verificable
              por sobre.
            </div>

            <div style={{
              paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5,
            }}>
              {[
                ['Plataforma',     'Equipo embedded · Linux hardened'],
                ['Cifrado disco',  'Full disk encryption'],
                ['Red',            'Air-gap · sin interfaces externas'],
                ['HSM',            'Thales payShield 10k'],
                ['Impresora',      'Matriz de puntos · formulario continuo'],
                ['Exportación',    'CSV'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ color: 'rgba(255,255,255,0.55)' }}>{k}</span>
                  <span className="mono" style={{ color: 'var(--zb-teal)', textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Problem statement
// ---------------------------------------------------------------------------
function AKProblem() {
  const before = [
    'Operadores transcriben componentes criptográficos a mano, uno a uno.',
    'Cada ATM consume minutos de atención humana sin trazabilidad firmada.',
    'Errores de transcripción se detectan tarde — o no se detectan.',
    'La evidencia de ceremonia vive en hojas Excel y bitácoras manuales.',
  ];
  const after = [
    'El operador autentica con doble factor y deja al HSM hacer el trabajo.',
    'Cientos de ATMs se procesan en una sola ceremonia auditable.',
    'Cada llave se imprime en sobre Sobreflex numerado, sin pasar por pantalla.',
    'La bitácora se firma con SHA-256 y se exporta al USB IronKey.',
  ];
  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          marginBottom: 64, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span><span>El problema</span>
            </div>
            <h2 style={{
              fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: 0, color: 'var(--zb-navy)',
            }}>
              Transcribir llaves a mano <span style={{
                fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)',
              }}>es un riesgo que la industria ya no debería pagar.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0,
              maxWidth: 520, textWrap: 'pretty',
            }}>
              Las ceremonias de generación de llaves son procesos críticos de seguridad que
              históricamente se ejecutan de forma manual. ATM Keygen elimina ese flujo — sin
              renunciar al control, a la cadena de custodia, ni a la evidencia auditable.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
          background: 'var(--zb-line)', border: '1px solid var(--zb-line)',
        }}>
          <div style={{ background: 'var(--zb-cream-2)', padding: 40 }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--zb-ink-3)', marginBottom: 18,
            }}>Antes · ceremonia manual</div>
            <h3 style={{
              fontSize: 24, fontWeight: 600, margin: '0 0 24px',
              color: 'var(--zb-navy)', letterSpacing: '-0.02em',
            }}>Horas, planillas, fe.</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {before.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--zb-ink-2)', lineHeight: 1.55 }}>
                  <span className="mono" style={{ color: 'var(--zb-ink-3)', width: 18, flexShrink: 0 }}>
                    0{i + 1}
                  </span>
                  <span style={{ textWrap: 'pretty' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#fff', padding: 40, position: 'relative' }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--zb-teal-deep)', marginBottom: 18,
            }}>Con ATM Keygen</div>
            <h3 style={{
              fontSize: 24, fontWeight: 600, margin: '0 0 24px',
              color: 'var(--zb-navy)', letterSpacing: '-0.02em',
            }}>Minutos, sobres, evidencia.</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {after.map((a, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--zb-ink-2)', lineHeight: 1.55 }}>
                  <span style={{ width: 18, flexShrink: 0, color: 'var(--zb-teal-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 4 }}>
                    <Icon.Check size={12} />
                  </span>
                  <span style={{ textWrap: 'pretty' }}>{a}</span>
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
// 4. TUI showcase — the heart of the product
// ---------------------------------------------------------------------------
function AKInterface() {
  return (
    <section style={{
      background: 'var(--zb-navy)', color: '#fff',
      padding: '120px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          marginBottom: 56, alignItems: 'end',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot"></span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Interfaz</span>
            </div>
            <h2 style={{
              fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: 0,
            }}>
              TUI deliberadamente <span style={{ color: 'var(--zb-teal)' }}>mínima.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)',
              margin: 0, maxWidth: 540, textWrap: 'pretty',
            }}>
              Sobre un equipo embedded con Linux hardened, sin red, sin ratón, sin distracciones. La
              interfaz está pensada para que un operador siga el guion exacto de la ceremonia y no
              haga ninguna otra cosa.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          alignItems: 'stretch',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--zb-teal)',
            }}>· Pantalla 1 — autenticación dual</div>
            <LoginTUI />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--zb-teal)',
            }}>· Pantalla 5 — generación batch</div>
            <CeremonyTUI />
          </div>
        </div>

        {/* small explainer row */}
        <div style={{
          marginTop: 40,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {[
            { k: 'Cero punteros', d: 'Navegación 100% por teclado. Atajos visibles en la barra de estado.' },
            { k: 'Cero material en pantalla', d: 'Criptogramas, KCV y componentes nunca se renderizan; van directo a impresora.' },
            { k: 'Errores sin filtración', d: 'Si la autenticación falla, el sistema no indica cuál de los factores estuvo mal.' },
          ].map(x => (
            <div key={x.k} style={{ background: 'var(--zb-navy)', padding: 28 }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--zb-teal)', letterSpacing: '0.15em',
                marginBottom: 10, textTransform: 'uppercase',
              }}>{x.k}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', textWrap: 'pretty' }}>
                {x.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. Ceremony flow — 7 numbered steps
// ---------------------------------------------------------------------------
function AKFlow() {
  const steps = [
    {
      n: '01', k: 'Autenticación dual',
      d: 'El operador completa una autenticación dual, con ambos factores enmascarados.',
      tag: 'login',
    },
    {
      n: '02', k: 'Datos de la institución',
      d: 'ABA y nombre de la entidad financiera quedan ligados a la ceremonia.',
      tag: 'IF · ABA',
    },
    {
      n: '03', k: 'Registro de custodios',
      d: 'Custodios identificados para la ceremonia, con autorización por tarjeta sobre el HSM.',
      tag: 'custodios · HSM',
    },
    {
      n: '04', k: 'Parámetros y lista de ATMs',
      d: 'Selección de tipo de llave y carga de la lista de ATM IDs. Deduplicación automática.',
      tag: 'TDES · ATM IDs',
    },
    {
      n: '05', k: 'Generación batch',
      d: 'Generación de componentes y formación de criptogramas dentro del HSM. Indicador de progreso y reintento de fallidos.',
      tag: 'HSM · batch',
    },
    {
      n: '06', k: 'Impresión segura',
      d: 'Un sobre Sobreflex por ATM exitoso. El número de serie del sobre queda asociado al ATM ID.',
      tag: 'Sobreflex',
    },
    {
      n: '07', k: 'Exportación + cierre',
      d: 'CSV exportado al USB y verificado con SHA-256. Cierre sólo si el checklist está completo.',
      tag: 'IronKey · SHA-256',
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
              <span className="dot"></span><span>Flujo de ceremonia</span>
            </div>
            <h2 style={{
              fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em',
              fontWeight: 600, margin: 0, color: 'var(--zb-navy)',
            }}>
              Siete pasos. <span style={{
                fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)',
              }}>Un solo turno.</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0,
              maxWidth: 520, textWrap: 'pretty',
            }}>
              El flujo es lineal por diseño: cada pantalla habilita la siguiente sólo si la
              anterior cerró sin errores. No hay rutas alternativas, no hay shortcuts.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0,
          border: '1px solid var(--zb-line)', background: 'var(--zb-line)',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              background: '#fff', padding: '32px 22px',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 280, position: 'relative',
              borderRight: i < steps.length - 1 ? 'none' : 'none',
            }}>
              <div className="mono" style={{
                fontSize: 11, color: 'var(--zb-teal-deep)', letterSpacing: '0.15em',
              }}>{s.n}</div>
              <h4 style={{
                fontSize: 16, fontWeight: 600, margin: 0,
                color: 'var(--zb-navy)', letterSpacing: '-0.015em',
                lineHeight: 1.25,
              }}>{s.k}</h4>
              <p style={{
                fontSize: 12.5, lineHeight: 1.55, color: 'var(--zb-ink-2)',
                margin: 0, flex: 1, textWrap: 'pretty',
              }}>{s.d}</p>
              <div className="mono" style={{
                marginTop: 'auto', fontSize: 10, letterSpacing: '0.1em',
                color: 'var(--zb-ink-3)', borderTop: '1px solid var(--zb-line-soft)',
                paddingTop: 12,
              }}>{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Pillars — 4 core features
// ---------------------------------------------------------------------------
function AKPillars() {
  const pillars = [
    {
      n: '01', t: 'Autenticación dual con enmascaramiento',
      d: 'Login con autenticación dual: dos factores independientes, ambos enmascarados por completo. Los mensajes de error nunca revelan cuál estuvo mal, eliminando el side-channel más obvio.',
    },
    {
      n: '02', t: 'Integración HSM payShield 10k',
      d: 'Verificación de estado LMK, autorización por inserción de tarjetas de custodios, generación de componentes y formación de criptogramas — todo orquestado desde la interfaz.',
    },
    {
      n: '03', t: 'Impresión sin renderizado en pantalla',
      d: 'Los criptogramas, KCVs y componentes no se muestran en la TUI. Se imprimen directamente en sobres Sobreflex numerados, y el serial del sobre queda asociado al ATM ID en el registro.',
    },
    {
      n: '04', t: 'Auditoría sin secretos en claro',
      d: 'Cada sesión genera un audit log con timestamp, actor, acción y resultado — sin almacenar componentes, llaves ni material criptográfico en claro. La bitácora se firma con SHA-256.',
    },
  ];

  return (
    <section style={{ padding: '0 0 120px', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot"></span><span>Pilares</span>
          </div>
          <h2 style={{
            fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em',
            fontWeight: 600, margin: 0, color: 'var(--zb-navy)', maxWidth: 720,
          }}>
            Cuatro decisiones de diseño que hacen toda la diferencia.
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1,
          background: 'var(--zb-line)', border: '1px solid var(--zb-line)',
        }}>
          {pillars.map(p => (
            <div key={p.n} style={{
              background: '#fff', padding: 40,
              display: 'flex', gap: 28, alignItems: 'flex-start',
            }}>
              <div className="mono" style={{
                fontSize: 12, color: 'var(--zb-teal-deep)', letterSpacing: '0.15em',
                paddingTop: 4, width: 28,
              }}>{p.n}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: 22, fontWeight: 600, margin: '0 0 10px',
                  color: 'var(--zb-navy)', letterSpacing: '-0.02em',
                }}>{p.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0, textWrap: 'pretty' }}>
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AKBreadcrumb, AKHero, AKProblem, AKInterface, AKFlow, AKPillars });
