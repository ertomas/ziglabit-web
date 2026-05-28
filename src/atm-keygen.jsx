// ATM Keygen — product page (split across multiple appends; this file is the entry)
const { useState: useStateAK, useEffect: useEffectAK } = React;

// ---------------------------------------------------------------------------
// 1. Breadcrumb bar
// ---------------------------------------------------------------------------
function AKBreadcrumb() {
  useLang();
  return (
    <div style={{
      borderBottom: '1px solid var(--zb-line)',
      padding: '20px 0',
      background: 'var(--zb-cream)',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="index.html" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8,
          color: 'var(--zb-ink-2)', fontSize: 13, padding: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--zb-navy)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--zb-ink-2)'}>
          <Icon.ArrowLeft size={14} /> {tr('Volver al inicio', 'Back to home')}
        </a>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--zb-ink-3)', display: 'flex', gap: 16, alignItems: 'center',
        }}>
          <span>{tr('Productos', 'Products')}</span>
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
  useLang();
  return (
    <section style={{
      background: 'var(--zb-navy)', color: '#fff',
      padding: '96px 0 120px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-5%', top: '-10%', opacity: 0.08, pointerEvents: 'none' }}>
        <svg width="700" height="800" viewBox="0 0 700 800" fill="none">
          <path d="M350 60 L350 740" stroke="var(--zb-teal)" strokeWidth="3" />
          <path d="M350 60 L80 320"  stroke="var(--zb-teal)" strokeWidth="3" />
          <path d="M350 60 L620 320" stroke="var(--zb-teal)" strokeWidth="3" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--zb-teal)' }}>
              <span className="dot"></span>
              <span style={{ color: 'var(--zb-teal)' }}>{tr('03 — Producto · ATM Keygen', '03 — Product · ATM Keygen')}</span>
            </div>
            <h1 style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, margin: '0 0 32px' }}>
              {tr('Cientos de cajeros, una sola ceremonia, ', 'Hundreds of ATMs, a single ceremony, ')}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.78)' }}>
                {tr('cero transcripción manual.', 'zero manual transcription.')}
              </span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', margin: '0 0 40px', maxWidth: 620, textWrap: 'pretty' }}>
              {tr(
                'ATM Keygen automatiza la ceremonia de generación de llaves TDES para flotas completas de ATMs sobre HSM Thales payShield 10k — imprimiendo sobres Sobreflex numerados y exportando la bitácora firmada, sin que el material criptográfico aparezca nunca en pantalla.',
                'ATM Keygen automates the TDES key-generation ceremony for entire ATM fleets on Thales payShield 10k HSM — printing numbered Sobreflex envelopes and exporting the signed log, without cryptographic material ever appearing on screen.'
              )}
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="contacto.html" className="btn btn-teal">
                {tr('Solicitar demo en vivo', 'Request a live demo')}
                <Icon.ArrowRight size={14} />
              </a>
              <button className="btn btn-ghost-light">
                {tr('Descargar ficha técnica', 'Download data sheet')}
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
              {tr('Especificación de referencia', 'Reference specification')}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 52, fontWeight: 500, letterSpacing: '-0.03em',
              color: 'var(--zb-teal)', lineHeight: 1, marginBottom: 14,
            }}>TDES · KCV</div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>
              {tr(
                'Generación batch de llaves simétricas sobre payShield 10k, con KCV verificable por sobre.',
                'Batch generation of symmetric keys on payShield 10k, with per-envelope verifiable KCV.'
              )}
            </div>

            <div style={{
              paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12.5,
            }}>
              {[
                [tr('Plataforma',    'Platform'),       tr('Equipo embedded · Linux hardened',  'Embedded device · hardened Linux')],
                [tr('Cifrado disco', 'Disk encryption'), tr('Full disk encryption',              'Full disk encryption')],
                [tr('Red',           'Network'),         tr('Air-gap · sin interfaces externas', 'Air-gapped · no external interfaces')],
                ['HSM',                                  'Thales payShield 10k'],
                [tr('Impresora',     'Printer'),         tr('Matriz de puntos · formulario continuo', 'Dot-matrix · continuous form')],
                [tr('Exportación',   'Export'),          'CSV'],
              ].map(([k, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
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
  useLang();
  const before = [
    tr('Operadores transcriben componentes criptográficos a mano, uno a uno.',
       'Operators transcribe cryptographic components by hand, one by one.'),
    tr('Cada ATM consume minutos de atención humana sin trazabilidad firmada.',
       'Each ATM consumes minutes of human attention with no signed traceability.'),
    tr('Errores de transcripción se detectan tarde — o no se detectan.',
       'Transcription errors are caught late — or not at all.'),
    tr('La evidencia de ceremonia vive en hojas Excel y bitácoras manuales.',
       'Ceremony evidence lives in Excel sheets and manual logs.'),
  ];
  const after = [
    tr('El operador autentica con doble factor y deja al HSM hacer el trabajo.',
       'The operator authenticates with two factors and lets the HSM do the work.'),
    tr('Cientos de ATMs se procesan en una sola ceremonia auditable.',
       'Hundreds of ATMs are processed in a single auditable ceremony.'),
    tr('Cada llave se imprime en sobre Sobreflex numerado, sin pasar por pantalla.',
       'Every key prints onto a numbered Sobreflex envelope, never going through the screen.'),
    tr('La bitácora se firma con SHA-256 y se exporta al USB IronKey.',
       'The log is signed with SHA-256 and exported to the IronKey USB.'),
  ];
  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 64, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span><span>{tr('El problema', 'The problem')}</span>
            </div>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--zb-navy)' }}>
              {tr('Transcribir llaves a mano ', 'Transcribing keys by hand ')}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)' }}>
                {tr('es un riesgo que la industria ya no debería pagar.', 'is a risk the industry shouldn\u2019t be paying for anymore.')}
              </span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
              {tr(
                'Las ceremonias de generación de llaves son procesos críticos de seguridad que históricamente se ejecutan de forma manual. ATM Keygen elimina ese flujo — sin renunciar al control, a la cadena de custodia, ni a la evidencia auditable.',
                'Key-generation ceremonies are critical security processes that have historically been run by hand. ATM Keygen removes that flow — without giving up control, chain of custody or auditable evidence.'
              )}
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
            }}>{tr('Antes · ceremonia manual', 'Before · manual ceremony')}</div>
            <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 24px', color: 'var(--zb-navy)', letterSpacing: '-0.02em' }}>
              {tr('Horas, planillas, fe.', 'Hours, spreadsheets, faith.')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {before.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--zb-ink-2)', lineHeight: 1.55 }}>
                  <span className="mono" style={{ color: 'var(--zb-ink-3)', width: 18, flexShrink: 0 }}>0{i + 1}</span>
                  <span style={{ textWrap: 'pretty' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#fff', padding: 40, position: 'relative' }}>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--zb-teal-deep)', marginBottom: 18,
            }}>{tr('Con ATM Keygen', 'With ATM Keygen')}</div>
            <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 24px', color: 'var(--zb-navy)', letterSpacing: '-0.02em' }}>
              {tr('Minutos, sobres, evidencia.', 'Minutes, envelopes, evidence.')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {after.map((a, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--zb-ink-2)', lineHeight: 1.55 }}>
                  <span style={{
                    width: 18, flexShrink: 0, color: 'var(--zb-teal-deep)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 4,
                  }}>
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
// 4. TUI showcase
// ---------------------------------------------------------------------------
function AKInterface() {
  useLang();
  return (
    <section style={{
      background: 'var(--zb-navy)', color: '#fff',
      padding: '120px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div className="dotbg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot"></span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr('Interfaz', 'Interface')}</span>
            </div>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0 }}>
              {tr('TUI deliberadamente ', 'A deliberately ')}
              <span style={{ color: 'var(--zb-teal)' }}>{tr('mínima.', 'minimal TUI.')}</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 540, textWrap: 'pretty' }}>
              {tr(
                'Sobre un equipo embedded con Linux hardened, sin red, sin ratón, sin distracciones. La interfaz está pensada para que un operador siga el guion exacto de la ceremonia y no haga ninguna otra cosa.',
                'On an embedded device running hardened Linux: no network, no mouse, no distractions. The interface is designed so an operator follows the exact ceremony script and does nothing else.'
              )}
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--zb-teal)' }}>
              · {tr('Pantalla 1 — autenticación dual', 'Screen 1 — dual authentication')}
            </div>
            <LoginTUI />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--zb-teal)' }}>
              · {tr('Pantalla 5 — generación batch', 'Screen 5 — batch generation')}
            </div>
            <CeremonyTUI />
          </div>
        </div>

        <div style={{
          marginTop: 40,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {[
            { k: tr('Cero punteros', 'Zero pointers'),
              d: tr('Navegación 100% por teclado. Atajos visibles en la barra de estado.',
                    '100% keyboard navigation. Shortcuts shown in the status bar.') },
            { k: tr('Cero material en pantalla', 'Zero material on screen'),
              d: tr('Criptogramas, KCV y componentes nunca se renderizan; van directo a impresora.',
                    'Cryptograms, KCV and components are never rendered; they go straight to the printer.') },
            { k: tr('Errores sin filtración', 'Errors without leaks'),
              d: tr('Si la autenticación falla, el sistema no indica cuál de los factores estuvo mal.',
                    'If authentication fails, the system does not reveal which factor was wrong.') },
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
// 5. Ceremony flow
// ---------------------------------------------------------------------------
function AKFlow() {
  useLang();
  const steps = [
    { n: '01', k: tr('Autenticación dual', 'Dual authentication'),
      d: tr('El operador completa una autenticación dual, con ambos factores enmascarados.',
            'The operator completes a dual authentication, with both factors masked.'),
      tag: 'login' },
    { n: '02', k: tr('Datos de la institución', 'Institution data'),
      d: tr('ABA y nombre de la entidad financiera quedan ligados a la ceremonia.',
            'ABA and the financial institution\u2019s name are bound to the ceremony.'),
      tag: 'IF · ABA' },
    { n: '03', k: tr('Registro de custodios', 'Custodian registry'),
      d: tr('Custodios identificados para la ceremonia, con autorización por tarjeta sobre el HSM.',
            'Custodians identified for the ceremony, with card-based authorization on the HSM.'),
      tag: tr('custodios · HSM', 'custodians · HSM') },
    { n: '04', k: tr('Parámetros y lista de ATMs', 'Parameters and ATM list'),
      d: tr('Selección de tipo de llave y carga de la lista de ATM IDs. Deduplicación automática.',
            'Key type selection and upload of the ATM ID list. Automatic deduplication.'),
      tag: 'TDES · ATM IDs' },
    { n: '05', k: tr('Generación batch', 'Batch generation'),
      d: tr('Generación de componentes y formación de criptogramas dentro del HSM. Indicador de progreso y reintento de fallidos.',
            'Component generation and cryptogram assembly inside the HSM. Progress indicator and retry of failed runs.'),
      tag: 'HSM · batch' },
    { n: '06', k: tr('Impresión segura', 'Secure printing'),
      d: tr('Un sobre Sobreflex por ATM exitoso. El número de serie del sobre queda asociado al ATM ID.',
            'One Sobreflex envelope per successful ATM. The envelope serial is bound to the ATM ID.'),
      tag: 'Sobreflex' },
    { n: '07', k: tr('Exportación + cierre', 'Export + close-out'),
      d: tr('CSV exportado al USB y verificado con SHA-256. Cierre sólo si el checklist está completo.',
            'CSV exported to USB and verified with SHA-256. Close-out only if the checklist is complete.'),
      tag: 'IronKey · SHA-256' },
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot"></span><span>{tr('Flujo de ceremonia', 'Ceremony flow')}</span>
            </div>
            <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--zb-navy)' }}>
              {tr('Siete pasos.', 'Seven steps.')} <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--zb-navy-soft)' }}>
                {tr('Un solo turno.', 'A single shift.')}
              </span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
              {tr(
                'El flujo es lineal por diseño: cada pantalla habilita la siguiente sólo si la anterior cerró sin errores. No hay rutas alternativas, no hay shortcuts.',
                'The flow is linear by design: each screen unlocks the next only if the previous one closed without errors. No alternative paths, no shortcuts.'
              )}
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0,
          border: '1px solid var(--zb-line)', background: 'var(--zb-line)',
        }}>
          {steps.map((s) => (
            <div key={s.n} style={{
              background: '#fff', padding: '32px 22px',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 280, position: 'relative',
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--zb-teal-deep)', letterSpacing: '0.15em' }}>{s.n}</div>
              <h4 style={{ fontSize: 16, fontWeight: 600, margin: 0, color: 'var(--zb-navy)', letterSpacing: '-0.015em', lineHeight: 1.25 }}>{s.k}</h4>
              <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--zb-ink-2)', margin: 0, flex: 1, textWrap: 'pretty' }}>{s.d}</p>
              <div className="mono" style={{
                marginTop: 'auto', fontSize: 10, letterSpacing: '0.1em',
                color: 'var(--zb-ink-3)', borderTop: '1px solid var(--zb-line-soft)', paddingTop: 12,
              }}>{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Pillars
// ---------------------------------------------------------------------------
function AKPillars() {
  useLang();
  const pillars = [
    { n: '01', t: tr('Autenticación dual con enmascaramiento', 'Dual authentication with masking'),
      d: tr('Login con autenticación dual: dos factores independientes, ambos enmascarados por completo. Los mensajes de error nunca revelan cuál estuvo mal, eliminando el side-channel más obvio.',
            'Login with dual authentication: two independent factors, both fully masked. Error messages never reveal which one was wrong, eliminating the most obvious side-channel.') },
    { n: '02', t: tr('Integración HSM payShield 10k', 'payShield 10k HSM integration'),
      d: tr('Verificación de estado LMK, autorización por inserción de tarjetas de custodios, generación de componentes y formación de criptogramas — todo orquestado desde la interfaz.',
            'LMK status check, authorization via custodian card insertion, component generation and cryptogram assembly — all orchestrated from the interface.') },
    { n: '03', t: tr('Impresión sin renderizado en pantalla', 'Printing without on-screen rendering'),
      d: tr('Los criptogramas, KCVs y componentes no se muestran en la TUI. Se imprimen directamente en sobres Sobreflex numerados, y el serial del sobre queda asociado al ATM ID en el registro.',
            'Cryptograms, KCVs and components are not shown in the TUI. They print directly on numbered Sobreflex envelopes, and each envelope serial is bound to its ATM ID in the record.') },
    { n: '04', t: tr('Auditoría sin secretos en claro', 'Audit with no secrets in the clear'),
      d: tr('Cada sesión genera un audit log con timestamp, actor, acción y resultado — sin almacenar componentes, llaves ni material criptográfico en claro. La bitácora se firma con SHA-256.',
            'Each session produces an audit log with timestamp, actor, action and result — without storing components, keys or cryptographic material in the clear. The log is signed with SHA-256.') },
  ];

  return (
    <section style={{ padding: '0 0 120px', background: 'var(--zb-cream)' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot"></span><span>{tr('Pilares', 'Pillars')}</span>
          </div>
          <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--zb-navy)', maxWidth: 720 }}>
            {tr(
              'Cuatro decisiones de diseño que hacen toda la diferencia.',
              'Four design decisions that make all the difference.'
            )}
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
                <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 10px', color: 'var(--zb-navy)', letterSpacing: '-0.02em' }}>{p.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--zb-ink-2)', margin: 0, textWrap: 'pretty' }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AKBreadcrumb, AKHero, AKProblem, AKInterface, AKFlow, AKPillars });
