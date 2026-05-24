const { useState: useStateSol, useEffect: useEffectSol } = React;

const SOLUTIONS = {
  'hsm-gateway': {
    tag: '01 — HSM Gateway',
    title: 'HSM Gateway',
    headline: 'Integra tus HSMs payShield y Luna en minutos, no en meses.',
    intro: 'Servicio contenedorizado que expone las capacidades criptográficas de los HSMs Thales payShield 10K y Luna a través de una API REST HTTP/S con mensajería JSON estándar — eliminando la complejidad de las integraciones nativas en C, Java o PKCS#11.',
    accentBig: 'min ▸ meses',
    accentLabel: 'Tiempo de integración histórico vs. con HSM Gateway',
    pillars: [
      { n: '01', t: 'Integración sin fricciones', d: 'Sin gestionar mensajería TCP propietaria ni APIs nativas en C, Java o PKCS#11 en la capa de aplicación. Una sola API HTTP/JSON.' },
      { n: '02', t: 'Menor time-to-market', d: 'Documentación OpenAPI y ejemplos listos para uso aceleran el desarrollo. Onboarding en horas, no semanas.' },
      { n: '03', t: 'Gestión unificada de HSMs', d: 'Consolida flotas con distintos niveles de rendimiento bajo una sola interfaz, sin tocar la lógica de aplicación.' },
      { n: '04', t: 'Alta disponibilidad', d: 'Balanceo de carga inteligente y cola de mensajes minimizan el downtime. Arquitectura escalable on-prem o cloud-native.' },
    ],
    compliance: ['PCI HSM', 'FIPS 140-2 L3', 'Common Criteria EAL4+', 'PCI-DSS', 'PCI 3DS', 'ISO 27001'],
    integrations: ['Thales payShield 10K', 'Thales Luna', 'Docker', 'Kubernetes', 'OpenAPI 3', 'Prosa', 'Visa DPS', 'Mastercard MDES'],
    stats: [
      { n: 'HTTP/S + JSON', l: 'Un solo protocolo de integración' },
      { n: '< 2 sem', l: 'Time-to-production típico' },
      { n: '99.99%', l: 'SLA del gateway' },
      { n: 'on-prem / cloud', l: 'Despliegue flexible' },
    ],
    hasHsmExtras: true,
  },

  'intercambio-archivos': {
    tag: '02 — Intercambio de Archivos',
    title: 'Sistema de Intercambio de Archivos',
    headline: 'Transferencia cifrada y auditable entre instituciones, de extremo a extremo.',
    intro: 'Plataforma para el intercambio de archivos sensibles entre entidades financieras, procesadores y reguladores — con cifrado en reposo y en tránsito, control granular por contraparte y trazabilidad firmada criptográficamente para cada movimiento.',
    accentBig: 'AES-256',
    accentLabel: 'Cifrado simétrico estándar',
    pillars: [
      { n: '01', t: 'Cifrado simétrico + asimétrico', d: 'PGP/GPG, AES-256 y TLS 1.3 sobre cada transferencia. Sin punto único de descifrado, sin claves planas en disco.' },
      { n: '02', t: 'Conectores listos', d: 'SFTP, AS2, S3, GCS y APIs REST. Conectores certificados para los protocolos del sector financiero.' },
      { n: '03', t: 'Trazabilidad firmada', d: 'Cada archivo trae bitácora firmada — quién envía, quién recibe, cuándo, qué hash. Exportable para auditorías.' },
      { n: '04', t: 'Políticas por contraparte', d: 'Reglas de cifrado, retención, notificación y reintento configurables por institución o flujo.' },
    ],
    compliance: ['ISO 27001', 'SOC 2 Type II', 'PCI-DSS', 'PSD2'],
    integrations: ['SFTP', 'AS2', 'S3', 'GCS', 'Azure Blob', 'PGP', 'OpenSSL', 'OpenPGP.js'],
    stats: [
      { n: 'AES-256', l: 'Cifrado en reposo' },
      { n: 'TLS 1.3', l: 'En tránsito por defecto' },
      { n: 'SHA-256', l: 'Verificación de integridad' },
      { n: '7 años', l: 'Retención auditable de bitácoras' },
    ],
  },

  'atm-keygen': {
    tag: '03 — ATM Keygen',
    title: 'ATM Keygen',
    headline: 'Ciclo de vida completo de llaves criptográficas para tu red de cajeros.',
    intro: 'Solución integral para la gestión del ciclo de vida de llaves en redes de ATM — desde la inyección inicial con ceremonia HSM hasta la rotación remota, conforme a TR-31, TR-34 y los esquemas DUKPT más exigentes.',
    accentBig: 'TR-31',
    accentLabel: 'Bloques de llave conformes',
    pillars: [
      { n: '01', t: 'Inyección inicial segura', d: 'Componentes de llave en sobres físicos o ceremonia digital con HSM. Cero claves planas, cero exposición.' },
      { n: '02', t: 'Rotación remota', d: 'Reemplazo de llaves de transporte y zone master keys sin enviar técnicos al cajero.' },
      { n: '03', t: 'DUKPT y maestras', d: 'TPK, TMK, BDK/DUKPT y ZPK — todos los esquemas que tu red ya usa, sin migraciones forzadas.' },
      { n: '04', t: 'Auditoría de ceremonia', d: 'Cada ceremonia queda firmada, fechada y archivada con cadena de custodia para auditores externos.' },
    ],
    compliance: ['PCI PIN', 'TR-31', 'TR-34', 'ISO 9564', 'ISO 11568'],
    integrations: ['payShield 10K', 'NCR', 'Diebold Nixdorf', 'Hyosung', 'Wincor'],
    stats: [
      { n: '0', l: 'Llaves expuestas en claro' },
      { n: 'Remoto', l: 'Rotación sin visita física' },
      { n: 'TR-31/34', l: 'Bloques de llave estándar' },
      { n: '∞', l: 'Cajeros gestionables por red' },
    ],
  },

  'desarrollo-seguro': {
    tag: '04 — Servicio',
    title: 'Desarrollo seguro a la medida',
    headline: 'Arquitectos de seguridad embebidos en tu proyecto, no consultores de paso.',
    intro: 'Cuando los productos no cubren un caso, nuestro equipo de ingenieros senior trabaja directamente con el tuyo — desde la arquitectura hasta el despliegue — con seguridad construida desde el primer commit y acompañamiento hasta el cierre de auditoría.',
    accentBig: '+12 años',
    accentLabel: 'Experiencia promedio del equipo',
    pillars: [
      { n: '01', t: 'Arquitectura de seguridad', d: 'Modelamos amenazas, diseñamos controles y separamos responsabilidades antes de escribir una sola línea de código.' },
      { n: '02', t: 'Integración nativa con HSMs', d: 'Cuando hace falta ir más profundo que la API: integración nativa en C, Java o PKCS#11 sobre payShield y Luna.' },
      { n: '03', t: 'Code review y pentest', d: 'Revisión continua del código y pruebas de penetración internas antes de cada release crítico.' },
      { n: '04', t: 'Cumplimiento end-to-end', d: 'Acompañamiento hasta certificación PCI, ISO 27001 o SOC — sin sorpresas en la auditoría externa.' },
    ],
    compliance: ['PCI-DSS QSA', 'ISO 27001', 'SOC 2', 'OWASP ASVS'],
    integrations: ['Java', 'C / C++', 'Go', 'Node.js', 'PKCS#11', 'Thales SDK', 'Vault', 'Kafka'],
    stats: [
      { n: '+12 años', l: 'Experiencia promedio' },
      { n: 'Senior', l: 'Sin junior bench, solo seniors' },
      { n: 'PCI QSA', l: 'Acompañamiento de auditoría' },
      { n: 'Flexible', l: 'T&M, llave en mano o staffing' },
    ],
  },
};

const SOLUTION_ORDER = ['hsm-gateway', 'intercambio-archivos', 'atm-keygen', 'desarrollo-seguro'];

// =========================================================================
// HSM Gateway — product-specific deep sections (architecture, crypto, deploy)
// =========================================================================

// Visual diagram helpers — used in the architecture section of HsmGatewayExtras
function DiagramNode({ name, sub, flex, mono }) {
  return (
    <div style={{
      flex: flex || 1,
      border: '1px solid rgba(255,255,255,0.22)',
      padding: '14px 16px',
      borderRadius: 2,
      background: 'rgba(255,255,255,0.03)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0,
    }}>
      <div style={{
        fontFamily: mono ? 'JetBrains Mono, monospace' : 'inherit',
        fontSize: 13.5,
        fontWeight: 500,
        color: '#fff',
        letterSpacing: mono ? '0.02em' : '-0.005em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>{name}</div>
      {sub && (
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.04em',
        }}>{sub}</div>
      )}
    </div>
  );
}

function DiagramLayer({ label, sub, accent, children }) {
  return (
    <div style={{
      border: '1px solid ' + (accent ? 'rgba(0,209,178,0.4)' : 'rgba(255,255,255,0.15)'),
      borderRadius: 2,
      padding: '18px 22px 20px',
      position: 'relative',
      background: accent ? 'rgba(0,209,178,0.05)' : 'transparent',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 14,
      }}>
        <div className="mono" style={{
          fontSize: 10,
          color: accent ? 'var(--teal)' : 'rgba(255,255,255,0.55)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}>{label}</div>
        {sub && (
          <div className="mono" style={{
            fontSize: 10,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>{sub}</div>
        )}
      </div>
      {children}
    </div>
  );
}

function DiagramConnector({ label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      position: 'relative',
    }}>
      <div style={{ width: 1, height: '100%', background: 'rgba(255,255,255,0.25)' }} />
      {/* arrowhead */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: 7, height: 7,
        borderRight: '1px solid rgba(255,255,255,0.45)',
        borderBottom: '1px solid rgba(255,255,255,0.45)',
        transform: 'rotate(45deg) translate(-3px, -3px)',
      }} />
      <div className="mono" style={{
        position: 'absolute',
        left: '50%',
        marginLeft: 14,
        fontSize: 10,
        letterSpacing: '0.18em',
        color: 'var(--teal)',
        textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
}

function HsmGatewayExtras() {
  const payShield = [
    { c: 'Gestión de PINs', ops: 'Generación · Verificación ABA PVV · Traducción (ZPK, TPK, BDK/DUKPT, RSA)' },
    { c: 'Gestión de llaves', ops: 'Generación · Importación bajo RSA · Par RSA pub/priv' },
    { c: 'Operaciones de tarjeta', ops: 'Verificación CVV/CVC · Autenticación EMV (ARQC/ARPC)' },
    { c: 'Cifrado de datos', ops: 'Cifrado · Descifrado · Firma RSA/ECC' },
    { c: 'Diagnóstico', ops: 'Estado HSM · Carga del sistema · Diagnósticos generales' },
    { c: 'Personalizadas', ops: 'Soporte para funciones custom según requerimiento' },
  ];

  const luna = [
    { c: 'RSA', ops: 'Firmar · Verificar · Cifrar · Descifrar · Wrap · Unwrap' },
    { c: '3DES / AES', ops: 'Cifrar · Descifrar · Wrap · Unwrap' },
  ];

  const deploy = [
    {
      tag: 'On-premises',
      d: 'Instalación en infraestructura propia, junto a tus HSMs físicos. Ideal para entornos regulados con perimetración estricta.',
      tags: ['Bare metal', 'VM', 'Air-gapped'],
    },
    {
      tag: 'Cloud-native',
      d: 'Contenedores Docker o Kubernetes en tu cloud. Auto-escalado horizontal y rolling updates sin downtime.',
      tags: ['Docker', 'K8s', 'Helm'],
    },
    {
      tag: 'Híbrido',
      d: 'Workers en cloud que se conectan a HSMs on-prem vía VPN o Direct Connect. Lo mejor de ambos mundos.',
      tags: ['VPN', 'Direct Connect', 'Multi-region'],
    },
  ];

  return (
    <React.Fragment>
      {/* Architecture */}
      <section className="rs-section" style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            marginBottom: 48,
            alignItems: 'end',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>Arquitectura</span>
              </div>
              <h2 style={{
                fontSize: 44,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                margin: 0,
                color: 'var(--navy)',
              }}>
                Configuration Manager,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>workers paralelos.</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
                Tus aplicaciones hablan HTTP/S con un load balancer. Los workers traducen a TCP propietario y reparten la carga entre los HSMs de tu flota. Administradores gestionan todo desde una Web GUI conectada al Configuration Manager.
              </p>
            </div>
          </div>

          <div className="rs-arch-wrap" style={{
            background: 'var(--navy)',
            color: '#fff',
            padding: '48px 56px',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* dot pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
            }} />
            {/* corner ticks */}
            <div style={{ position: 'absolute', top: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />

            <div className="mono" style={{
              fontSize: 11,
              color: 'var(--teal)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 28,
              position: 'relative',
            }}>
              · Flujo lógico
            </div>

            <div style={{ position: 'relative' }}>
              <DiagramLayer label="01 · Clientes" sub="tus apps">
                <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 10 }}>
                  <DiagramNode name="Core / backend" sub="servicio" />
                  <DiagramNode name="Banca web" sub="front" />
                  <DiagramNode name="Mobile / SDK" sub="PB Library" />
                </div>
              </DiagramLayer>

              <DiagramConnector label="HTTPS" />

              <DiagramLayer label="02 · Edge">
                <DiagramNode name="Load Balancer" sub="distribución + reintentos" />
              </DiagramLayer>

              <DiagramConnector label="HTTPS  ·  REST + JSON" />

              <DiagramLayer label="03 · HSM Gateway" sub="Ziglabit" accent>
                <div className="rs-diagram-split" style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(220px, 0.9fr) 2.2fr',
                  gap: 10,
                }}>
                  <DiagramNode
                    name="Configuration Manager"
                    sub="Web GUI · config · logs"
                  />
                  <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 8 }}>
                    <DiagramNode name="Worker 1" mono />
                    <DiagramNode name="Worker 2" mono />
                    <DiagramNode name="Worker N" mono />
                  </div>
                </div>
              </DiagramLayer>

              <DiagramConnector label="TCP nativo  ·  mensajería Thales" />

              <DiagramLayer label="04 · HSM Pool" sub="Thales" accent>
                <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 10 }}>
                  <DiagramNode name="payShield 10K" sub="TCP nativo" />
                  <DiagramNode name="Luna" sub="mensajería propietaria" />
                </div>
              </DiagramLayer>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto functions */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="dot"></span>
              <span>Funciones criptográficas</span>
            </div>
            <h2 className="rs-h2" style={{
              fontSize: 40,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              margin: 0,
              color: 'var(--navy)',
              maxWidth: 700,
            }}>
              Cubrimos las operaciones reales, no solo el “hello world” criptográfico.
            </h2>
          </div>

          <div className="rs-compl-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 24,
          }}>
            {/* payShield */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 4,
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '20px 28px',
                background: 'var(--cream-2)',
                borderBottom: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.02em' }}>payShield 10K</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', marginTop: 4 }}>vía TCP nativo</div>
                </div>
                <div className="mono" style={{
                  fontSize: 10,
                  padding: '6px 12px',
                  border: '1px solid var(--teal-deep)',
                  color: 'var(--teal-deep)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>Thales</div>
              </div>
              <table className="rs-crypto-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {payShield.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < payShield.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                      <td style={{
                        padding: '16px 28px',
                        fontSize: 13.5,
                        fontWeight: 500,
                        color: 'var(--navy)',
                        width: 200,
                        verticalAlign: 'top',
                      }}>{row.c}</td>
                      <td style={{
                        padding: '16px 28px 16px 0',
                        fontSize: 13,
                        color: 'var(--ink-2)',
                        lineHeight: 1.6,
                      }}>{row.ops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Luna */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: 4,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                padding: '20px 28px',
                background: 'var(--cream-2)',
                borderBottom: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.02em' }}>Luna</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', marginTop: 4 }}>vía mensajería propietaria</div>
                </div>
                <div className="mono" style={{
                  fontSize: 10,
                  padding: '6px 12px',
                  border: '1px solid var(--teal-deep)',
                  color: 'var(--teal-deep)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>Thales</div>
              </div>
              <table className="rs-crypto-table" style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
                <tbody>
                  {luna.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < luna.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                      <td style={{
                        padding: '16px 28px',
                        fontSize: 13.5,
                        fontWeight: 500,
                        color: 'var(--navy)',
                        width: 120,
                        verticalAlign: 'top',
                      }}>{row.c}</td>
                      <td style={{
                        padding: '16px 28px 16px 0',
                        fontSize: 13,
                        color: 'var(--ink-2)',
                        lineHeight: 1.6,
                      }}>{row.ops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 'auto',
                padding: '16px 28px',
                background: 'var(--cream)',
                borderTop: '1px solid var(--line)',
                fontSize: 12,
                color: 'var(--ink-3)',
                lineHeight: 1.55,
              }}>
                Para operaciones específicas no listadas, contacto directo con nuestro equipo.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PB Library callout */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-pblib" style={{
            background: '#fff',
            border: '1px solid var(--line)',
            borderLeft: '3px solid var(--teal)',
            borderRadius: 2,
            padding: '40px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 56,
            alignItems: 'center',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--teal-deep)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Companion library
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 600, margin: '0 0 8px', color: 'var(--navy)', letterSpacing: '-0.025em' }}>
                PB Library
              </h3>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)', letterSpacing: '0.05em' }}>
                npm · @ziglabit/pb-library
              </div>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', textWrap: 'pretty' }}>
                Librería JavaScript (Node.js 12+) para cifrado de PIN y datos sensibles en el cliente con RSA. Compatible con ISO 9564 Formato 0 y 1.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Node.js 12+', 'ISO 9564 F0/F1', 'Ionic', 'React Native', 'Cordova'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    padding: '7px 12px',
                    border: '1px solid var(--line)',
                    color: 'var(--navy)',
                    background: 'var(--cream)',
                    letterSpacing: '0.06em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment options */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            marginBottom: 40,
            alignItems: 'end',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>Despliegue</span>
              </div>
              <h2 style={{
                fontSize: 40,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                margin: 0,
                color: 'var(--navy)',
              }}>
                Donde tus HSMs vivan, HSM Gateway vive.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                Misma API, mismas funciones, mismos SLAs. Cambia sólo el plano de control.
              </p>
            </div>
          </div>

          <div className="rs-cards-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--line)',
            border: '1px solid var(--line)',
          }}>
            {deploy.map((d, i) => (
              <div key={d.tag} style={{
                background: '#fff',
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minHeight: 240,
              }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 600, margin: 0, color: 'var(--navy)', letterSpacing: '-0.02em' }}>{d.tag}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty', flex: 1 }}>{d.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {d.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10.5,
                      padding: '6px 10px',
                      border: '1px solid var(--line)',
                      color: 'var(--navy)',
                      letterSpacing: '0.05em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function SolutionView({ id }) {
  const s = SOLUTIONS[id] || SOLUTIONS['hsm-gateway'];
  const orderIdx = SOLUTION_ORDER.indexOf(id);
  const otherId = SOLUTION_ORDER[(orderIdx + 1) % SOLUTION_ORDER.length];
  const otherS = SOLUTIONS[otherId];

  useEffectSol(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  return (
    <div className="view-enter">
      {/* Breadcrumb / back bar */}
      <div style={{
        borderBottom: '1px solid var(--line)',
        padding: '20px 0',
        background: 'var(--cream)',
      }}>
        <div className="container rs-breadcrumb" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <a href="index.html" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--ink-2)',
            fontSize: 13,
            padding: 0,
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}
          >
            <Icon.ArrowLeft size={14} /> Volver al inicio
          </a>
          <div className="mono" style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            display: 'flex', gap: 16, alignItems: 'center',
          }}>
            <span>Soluciones</span>
            <span>/</span>
            <span style={{ color: 'var(--navy)' }}>{s.tag}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="rs-section" style={{
        background: 'var(--navy)',
        color: '#fff',
        padding: '96px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Big algiz watermark */}
        <div style={{
          position: 'absolute',
          right: '-5%', top: '-10%',
          opacity: 0.08,
          pointerEvents: 'none',
        }}>
          <svg width="700" height="800" viewBox="0 0 700 800" fill="none">
            <path d="M350 60 L350 740" stroke="var(--teal)" strokeWidth="3" />
            <path d="M350 60 L80 320" stroke="var(--teal)" strokeWidth="3" />
            <path d="M350 60 L620 320" stroke="var(--teal)" strokeWidth="3" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div className="rs-split" style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 80,
            alignItems: 'end',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28, color: 'var(--teal)' }}>
                <span className="dot"></span>
                <span style={{ color: 'var(--teal)' }}>{s.tag}</span>
              </div>
              <h1 className="rs-h1" style={{
                fontSize: 72,
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                fontWeight: 600,
                margin: '0 0 32px',
              }}>{s.headline}</h1>
              <p style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.78)',
                margin: '0 0 40px',
                maxWidth: 600,
                textWrap: 'pretty',
              }}>{s.intro}</p>
              <div className="rs-btn-row" style={{ display: 'flex', gap: 14 }}>
                <button className="btn btn-teal">
                  Solicitar diagnóstico
                  <Icon.ArrowRight size={14} />
                </button>
                <button className="btn btn-ghost-light">
                  Descargar ficha técnica
                </button>
              </div>
            </div>

            <div className="rs-sol-statcard" style={{
              border: '1px solid rgba(255,255,255,0.18)',
              padding: 32,
              borderRadius: 4,
              position: 'relative',
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: 8 }}>
                IMPACTO EN PRODUCCIÓN
              </div>
              <div className="rs-big-accent" style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 64,
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: 'var(--teal)',
                lineHeight: 1,
                marginBottom: 12,
              }}>{s.accentBig}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>{s.accentLabel}</div>

              <div style={{
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                {s.stats.slice(0, 3).map((st, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 12.5,
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>{st.l}</span>
                    <span className="mono" style={{ color: 'var(--teal)' }}>{st.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="rs-section" style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            marginBottom: 64,
            alignItems: 'end',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>Pilares de la solución</span>
              </div>
              <h2 className="rs-h2" style={{
                fontSize: 48,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 600,
                margin: 0,
                color: 'var(--navy)',
              }}>
                Cuatro frentes,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>una sola defensa.</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                Cada pilar puede contratarse de forma independiente, pero alcanza su potencial cuando trabajan juntos sobre el mismo plano de control.
              </p>
            </div>
          </div>

          <div className="rs-cards-2 rs-pillars" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'var(--line)',
            border: '1px solid var(--line)',
          }}>
            {s.pillars.map(p => (
              <div key={p.n} style={{
                background: '#fff',
                padding: 40,
                display: 'flex',
                gap: 28,
                alignItems: 'flex-start',
              }}>
                <div className="mono" style={{
                  fontSize: 12,
                  color: 'var(--teal-deep)',
                  letterSpacing: '0.15em',
                  paddingTop: 4,
                  width: 28,
                }}>{p.n}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 22,
                    fontWeight: 600,
                    margin: '0 0 10px',
                    color: 'var(--navy)',
                    letterSpacing: '-0.02em',
                  }}>{p.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-specific deep sections (HSM Gateway) */}
      {s.hasHsmExtras && <HsmGatewayExtras />}

      {/* Compliance + Integrations */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-compl-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            <div style={{
              background: '#fff',
              border: '1px solid var(--line)',
              padding: 40,
              borderRadius: 4,
            }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>Cumplimiento</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 16px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                Auditable de fábrica.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 28px', textWrap: 'pretty' }}>
                Cada control tiene evidencia digital persistente, exportable y firmada criptográficamente.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.compliance.map(c => (
                  <div key={c} className="mono" style={{
                    padding: '8px 14px',
                    border: '1px solid var(--line)',
                    fontSize: 11,
                    color: 'var(--navy)',
                    letterSpacing: '0.08em',
                    background: 'var(--cream)',
                  }}>{c}</div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#fff',
              border: '1px solid var(--line)',
              padding: 40,
              borderRadius: 4,
            }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>Integraciones</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 16px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                Conecta con lo que ya tienes.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 28px', textWrap: 'pretty' }}>
                Conectores certificados para los sistemas core y las plataformas de observabilidad más usadas en LATAM.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.integrations.map(c => (
                  <div key={c} style={{
                    padding: '8px 14px',
                    border: '1px solid var(--line)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--navy)',
                    background: 'var(--cream)',
                  }}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats grid */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-sol-bigstats-wrap" style={{
            background: 'var(--navy)',
            color: '#fff',
            padding: '64px 56px',
            borderRadius: 4,
          }}>
            <div className="rs-sol-bigstats" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
            }}>
              {s.stats.map((st, i) => (
                <div key={i} style={{
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  paddingLeft: i > 0 ? 32 : 0,
                }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 44,
                    fontWeight: 500,
                    color: 'var(--teal)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}>{st.n}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{st.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other solution CTA */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-sol-next" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            <a href={`${otherId}.html`} style={{
              background: '#fff',
              border: '1px solid var(--line)',
              padding: 40,
              textAlign: 'left',
              textDecoration: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              color: 'var(--navy)',
              borderRadius: 4,
              transition: 'all 0.25s',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
                Siguiente solución →
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>{otherS.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, marginTop: 'auto' }}>
                Explorar <Icon.ArrowRight size={14} />
              </div>
            </a>

            <div style={{
              background: 'var(--navy)',
              color: '#fff',
              padding: 40,
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)' }}>
                ¿Listo para defender?
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>
                Hablemos de tu arquitectura, no de slides.
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 12 }}>
                <button className="btn btn-teal">
                  Agendar 30 min
                  <Icon.ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { SolutionView });
