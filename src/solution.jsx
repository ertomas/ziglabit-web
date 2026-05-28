const { useState: useStateSol, useEffect: useEffectSol } = React;

// SOLUTIONS construido como función — re-evalúa traducciones por idioma activo.
function getSolutions() {
  return {
    'hsm-gateway': {
      tag: tr('01 — HSM Gateway', '01 — HSM Gateway'),
      title: 'HSM Gateway',
      headline: tr(
        'Integra tus HSMs payShield y Luna en minutos, no en meses.',
        'Integrate your payShield and Luna HSMs in minutes, not months.'
      ),
      intro: tr(
        'Servicio contenedorizado que expone las capacidades criptográficas de los HSMs Thales payShield 10K y Luna a través de una API REST HTTP/S con mensajería JSON estándar — eliminando la complejidad de las integraciones nativas en C, Java o PKCS#11.',
        'Containerized service that exposes the cryptographic capabilities of Thales payShield 10K and Luna HSMs through an HTTP/S REST API with standard JSON messaging — eliminating the complexity of native C, Java or PKCS#11 integrations.'
      ),
      accentBig: tr('min ▸ meses', 'min ▸ months'),
      accentLabel: tr('Tiempo de integración histórico vs. con HSM Gateway', 'Historical integration time vs. with HSM Gateway'),
      pillars: [
        { n: '01', t: tr('Integración sin fricciones', 'Friction-free integration'),
          d: tr('Sin gestionar mensajería TCP propietaria ni APIs nativas en C, Java o PKCS#11 en la capa de aplicación. Una sola API HTTP/JSON.',
                'No proprietary TCP messaging or native C, Java or PKCS#11 APIs in the application layer. One single HTTP/JSON API.') },
        { n: '02', t: tr('Menor time-to-market', 'Lower time-to-market'),
          d: tr('Documentación OpenAPI y ejemplos listos para uso aceleran el desarrollo. Onboarding en horas, no semanas.',
                'OpenAPI documentation and ready-to-use examples accelerate development. Onboarding in hours, not weeks.') },
        { n: '03', t: tr('Gestión unificada de HSMs', 'Unified HSM management'),
          d: tr('Consolida flotas con distintos niveles de rendimiento bajo una sola interfaz, sin tocar la lógica de aplicación.',
                'Consolidate fleets with different performance tiers under one interface, without touching application logic.') },
        { n: '04', t: tr('Alta disponibilidad', 'High availability'),
          d: tr('Balanceo de carga inteligente y cola de mensajes minimizan el downtime. Arquitectura escalable on-prem o cloud-native.',
                'Smart load balancing and message queues minimize downtime. Scalable on-prem or cloud-native architecture.') },
      ],
      compliance: ['PCI HSM', 'FIPS 140-2 L3', 'Common Criteria EAL4+', 'PCI-DSS', 'PCI 3DS', 'ISO 27001'],
      integrations: ['Thales payShield 10K', 'Thales Luna', 'Docker', 'Kubernetes', 'OpenAPI 3', 'Prosa', 'Visa DPS', 'Mastercard MDES'],
      stats: [
        { n: 'HTTP/S + JSON', l: tr('Un solo protocolo de integración', 'A single integration protocol') },
        { n: tr('< 2 sem', '< 2 wks'),  l: tr('Time-to-production típico', 'Typical time-to-production') },
        { n: '99.99%',                  l: tr('SLA del gateway', 'Gateway SLA') },
        { n: 'on-prem / cloud',         l: tr('Despliegue flexible', 'Flexible deployment') },
      ],
      hasHsmExtras: true,
    },

    'intercambio-archivos': {
      tag: tr('02 — Intercambio de Archivos', '02 — File Exchange'),
      title: tr('Sistema de Intercambio de Archivos', 'File Exchange System'),
      headline: tr(
        'Transferencia cifrada y auditable entre instituciones, de extremo a extremo.',
        'Encrypted, auditable end-to-end transfer between institutions.'
      ),
      intro: tr(
        'Plataforma para el intercambio de archivos sensibles entre entidades financieras, procesadores y reguladores — con cifrado en reposo y en tránsito, control granular por contraparte y trazabilidad firmada criptográficamente para cada movimiento.',
        'Platform for exchanging sensitive files between financial institutions, processors and regulators — with encryption at rest and in transit, granular per-counterparty control and cryptographically signed traceability for every movement.'
      ),
      accentBig: 'AES-256',
      accentLabel: tr('Cifrado simétrico estándar', 'Standard symmetric encryption'),
      pillars: [
        { n: '01', t: tr('Cifrado simétrico + asimétrico', 'Symmetric + asymmetric encryption'),
          d: tr('PGP/GPG, AES-256 y TLS 1.3 sobre cada transferencia. Sin punto único de descifrado, sin claves planas en disco.',
                'PGP/GPG, AES-256 and TLS 1.3 on every transfer. No single decryption point, no plain keys on disk.') },
        { n: '02', t: tr('Conectores listos', 'Ready-made connectors'),
          d: tr('SFTP, AS2, S3, GCS y APIs REST. Conectores certificados para los protocolos del sector financiero.',
                'SFTP, AS2, S3, GCS and REST APIs. Certified connectors for financial-sector protocols.') },
        { n: '03', t: tr('Trazabilidad firmada', 'Signed traceability'),
          d: tr('Cada archivo trae bitácora firmada — quién envía, quién recibe, cuándo, qué hash. Exportable para auditorías.',
                'Every file carries a signed log — who sends, who receives, when, what hash. Exportable for audits.') },
        { n: '04', t: tr('Políticas por contraparte', 'Per-counterparty policies'),
          d: tr('Reglas de cifrado, retención, notificación y reintento configurables por institución o flujo.',
                'Encryption, retention, notification and retry rules configurable per institution or flow.') },
      ],
      compliance: ['ISO 27001', 'SOC 2 Type II', 'PCI-DSS', 'PSD2'],
      integrations: ['SFTP', 'AS2', 'S3', 'GCS', 'Azure Blob', 'PGP', 'OpenSSL', 'OpenPGP.js'],
      stats: [
        { n: 'AES-256', l: tr('Cifrado en reposo', 'Encryption at rest') },
        { n: 'TLS 1.3', l: tr('En tránsito por defecto', 'In transit by default') },
        { n: 'SHA-256', l: tr('Verificación de integridad', 'Integrity verification') },
        { n: tr('7 años', '7 years'), l: tr('Retención auditable de bitácoras', 'Auditable log retention') },
      ],
    },

    'atm-keygen': {
      tag: tr('03 — ATM Keygen', '03 — ATM Keygen'),
      title: 'ATM Keygen',
      headline: tr(
        'La ceremonia de llaves de tus ATMs, sin transcripción manual.',
        'Your ATM key ceremony, with zero manual transcription.'
      ),
      intro: tr(
        'Automatiza la ceremonia de generación de llaves simétricas para flotas completas de ATMs sobre Thales payShield 10k. Imprime sobres de confidencialidad numerados, exporta la bitácora firmada — y nunca renderiza material criptográfico en pantalla.',
        'Automates the symmetric key-generation ceremony for entire ATM fleets on Thales payShield 10k. Prints numbered confidentiality envelopes, exports the signed log — and never renders cryptographic material on screen.'
      ),
      accentBig: 'batch',
      accentLabel: tr('Cientos de ATMs en una sola ceremonia', 'Hundreds of ATMs in a single ceremony'),
      pillars: [
        { n: '01', t: tr('Autenticación dual', 'Dual authentication'),
          d: tr('Login con autenticación dual: ambos factores enmascarados. Los errores nunca revelan cuál falló.',
                'Login with dual authentication: both factors masked. Errors never reveal which one failed.') },
        { n: '02', t: tr('Ceremonia guiada', 'Guided ceremony'),
          d: tr('Datos de la institución, registro de custodios, parámetros, ATM IDs con deduplicación y generación batch con reintento de fallidos.',
                'Institution data, custodian registry, parameters, ATM IDs with deduplication and batch generation with retry of failed runs.') },
        { n: '03', t: tr('Impresión sin pantalla', 'Off-screen printing'),
          d: tr('Criptogramas y KCV se imprimen en sobres numerados. Cada serie de sobre queda asociada al ATM ID en el CSV final.',
                'Cryptograms and KCV print on numbered envelopes. Each envelope serial ties to its ATM ID in the final CSV.') },
        { n: '04', t: tr('Cierre auditable', 'Auditable close-out'),
          d: tr('CSV exportado al USB con SHA-256, audit log firmado, checklist de cierre y desautorización forzada del LMK antes de apagar.',
                'CSV exported to USB with SHA-256, signed audit log, close-out checklist and forced LMK deauthorization before shutdown.') },
      ],
      compliance: ['PCI PIN', 'PCI HSM', 'ISO 9564', 'ISO 11568'],
      integrations: ['Thales payShield 10k', 'IronKey USB', tr('Matriz de puntos', 'Dot-matrix'), 'Linux hardened'],
      stats: [
        { n: '0', l: tr('Llaves o KCV en pantalla', 'Keys or KCV on screen') },
        { n: 'Air-gap', l: tr('Equipo embedded sin red', 'Network-less embedded device') },
        { n: 'SHA-256', l: tr('CSV firmado al cierre', 'Signed CSV at close-out') },
        { n: 'Batch', l: tr('Cientos de ATMs por ceremonia', 'Hundreds of ATMs per ceremony') },
      ],
    },

    'iso8583-proxy': {
      tag: tr('04 — ISO-8583 Proxy', '04 — ISO-8583 Proxy'),
      title: 'ISO-8583 Proxy / Balancer',
      headline: tr(
        'Un solo proxy entre tus canales y el switch — cifra, tokeniza y balancea en el camino.',
        'A single proxy between your channels and the switch — encrypts, tokenizes and balances along the way.'
      ),
      intro: tr(
        'Proxy transaccional que normaliza la mensajería entre tus canales (TCP nativo ISO-8583, JSON o SOAP) y tu switch o core bancario en ISO-8583. En el mismo salto ejecuta transformaciones criptográficas vía HSM y distribuye carga entre múltiples backends, con cola persistente y circuit breakers.',
        'Transactional proxy that normalizes messaging between your channels (native TCP ISO-8583, JSON or SOAP) and your switch or banking core in ISO-8583. In the same hop it runs cryptographic transformations via HSM and spreads load across multiple backends, with a persistent queue and circuit breakers.'
      ),
      accentBig: '3 in → 1 out',
      accentLabel: tr('TCP ISO-8583 · JSON · SOAP → ISO-8583', 'TCP ISO-8583 · JSON · SOAP → ISO-8583'),
      pillars: [
        { n: '01', t: tr('Multi-protocolo de ingreso', 'Multi-protocol ingress'),
          d: tr('Recibe ISO-8583 en TCP nativo, JSON o SOAP. Entrega siempre ISO-8583 al switch transaccional o core bancario. Sin reescribir el cliente, sin tocar el backend.',
                'Accepts ISO-8583 over native TCP, JSON or SOAP. Always delivers ISO-8583 to the transactional switch or banking core. No client rewrite, no backend changes.') },
        { n: '02', t: tr('Cifra y tokeniza en vuelo', 'Encrypt and tokenize on the fly'),
          d: tr('Cifrado y descifrado, tokenización y detokenización por campo vía HSM. PAN, PIN block y track2 protegidos antes de cruzar la frontera del backend.',
                'Per-field encryption, decryption, tokenization and detokenization via HSM. PAN, PIN block and track2 protected before crossing the backend boundary.') },
        { n: '03', t: tr('Colas y balanceo', 'Queues and balancing'),
          d: tr('Cola de mensajes con back-pressure y persistencia. Balanceo round-robin o least-busy entre HSMs y backends, con circuit breakers automáticos por destino.',
                'Message queue with back-pressure and persistence. Round-robin or least-busy balancing across HSMs and backends, with automatic per-destination circuit breakers.') },
        { n: '04', t: tr('Alta disponibilidad', 'High availability'),
          d: tr('Despliegues activo-activo multi-nodo. Reintentos por trama y persistencia de mensajes en vuelo durante failover — ninguna transacción se pierde.',
                'Active-active multi-node deployments. Per-message retries and in-flight persistence during failover — no transaction is lost.') },
      ],
      compliance: ['PCI-DSS', 'PCI HSM', 'PCI PIN', 'ISO 8583:1987/93/2003', 'FIPS 140-2 L3'],
      integrations: ['Prosa', 'E-Global', 'Visa BASE I/II', 'Mastercard MIP', 'AmEx', 'JCB', 'Tibco EMS', 'Kafka', 'IBM MQ'],
      stats: [
        { n: '+8 ms',         l: tr('Latencia añadida (p95)', 'Added latency (p95)') },
        { n: '4,500 tps',     l: tr('Throughput por nodo', 'Throughput per node') },
        { n: '3 → 1',         l: tr('Protocolos de ingreso → salida', 'Inbound → outbound protocols') },
        { n: tr('activo-activo', 'active-active'), l: tr('Topología por defecto', 'Default topology') },
      ],
      hasIsoExtras: true,
    },

    'desarrollo-seguro': {
      tag: tr('Servicio · Ingeniería a la medida', 'Service · Custom engineering'),
      title: tr('Desarrollo seguro a la medida', 'Custom secure development'),
      headline: tr(
        'Arquitectos de seguridad embebidos en tu proyecto, no consultores de paso.',
        'Security architects embedded in your project, not drive-by consultants.'
      ),
      intro: tr(
        'Cuando los productos no cubren un caso, nuestro equipo de ingenieros senior trabaja directamente con el tuyo — desde la arquitectura hasta el despliegue — con seguridad construida desde el primer commit y acompañamiento hasta el cierre de auditoría.',
        'When products don\u2019t cover a case, our senior engineering team works directly with yours — from architecture to deployment — with security built from the first commit and hands-on support through audit close-out.'
      ),
      accentBig: tr('+12 años', '12+ years'),
      accentLabel: tr('Experiencia promedio del equipo', 'Average team experience'),
      pillars: [
        { n: '01', t: tr('Arquitectura de seguridad', 'Security architecture'),
          d: tr('Modelamos amenazas, diseñamos controles y separamos responsabilidades antes de escribir una sola línea de código.',
                'We model threats, design controls and separate duties before writing a single line of code.') },
        { n: '02', t: tr('Integración nativa con HSMs', 'Native HSM integration'),
          d: tr('Cuando hace falta ir más profundo que la API: integración nativa en C, Java o PKCS#11 sobre payShield y Luna.',
                'When you need to go deeper than the API: native C, Java or PKCS#11 integration over payShield and Luna.') },
        { n: '03', t: tr('Code review y pentest', 'Code review and pentest'),
          d: tr('Revisión continua del código y pruebas de penetración internas antes de cada release crítico.',
                'Continuous code review and internal penetration testing before every critical release.') },
        { n: '04', t: tr('Cumplimiento end-to-end', 'End-to-end compliance'),
          d: tr('Acompañamiento hasta certificación PCI, ISO 27001 o SOC — sin sorpresas en la auditoría externa.',
                'Hands-on support through PCI, ISO 27001 or SOC certification — no surprises in the external audit.') },
      ],
      compliance: ['PCI-DSS QSA', 'ISO 27001', 'SOC 2', 'OWASP ASVS'],
      integrations: ['Java', 'C / C++', 'Go', 'Node.js', 'PKCS#11', 'Thales SDK', 'Vault', 'Kafka'],
      stats: [
        { n: tr('+12 años', '12+ years'),     l: tr('Experiencia promedio', 'Average experience') },
        { n: tr('Senior', 'Senior'),          l: tr('Sin junior bench, solo seniors', 'No junior bench, seniors only') },
        { n: 'PCI QSA',                       l: tr('Acompañamiento de auditoría', 'Audit support') },
        { n: tr('Flexible', 'Flexible'),      l: tr('T&M, llave en mano o staffing', 'T&M, turnkey or staffing') },
      ],
    },
  };
}

const SOLUTION_ORDER = ['hsm-gateway', 'intercambio-archivos', 'atm-keygen', 'iso8583-proxy', 'desarrollo-seguro'];

// =========================================================================
// Visual diagram helpers
// =========================================================================
function DiagramNode({ name, sub, flex, mono }) {
  return (
    <div style={{
      flex: flex || 1,
      border: '1px solid rgba(255,255,255,0.22)',
      padding: '14px 16px', borderRadius: 2,
      background: 'rgba(255,255,255,0.03)',
      display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0,
    }}>
      <div style={{
        fontFamily: mono ? 'JetBrains Mono, monospace' : 'inherit',
        fontSize: 13.5, fontWeight: 500, color: '#fff',
        letterSpacing: mono ? '0.02em' : '-0.005em',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{name}</div>
      {sub && (
        <div style={{
          fontSize: 11, color: 'rgba(255,255,255,0.5)',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em',
        }}>{sub}</div>
      )}
    </div>
  );
}

function DiagramLayer({ label, sub, accent, children }) {
  return (
    <div style={{
      border: '1px solid ' + (accent ? 'rgba(0,209,178,0.4)' : 'rgba(255,255,255,0.15)'),
      borderRadius: 2, padding: '18px 22px 20px', position: 'relative',
      background: accent ? 'rgba(0,209,178,0.05)' : 'transparent',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div className="mono" style={{
          fontSize: 10, color: accent ? 'var(--teal)' : 'rgba(255,255,255,0.55)',
          letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
        }}>{label}</div>
        {sub && (
          <div className="mono" style={{
            fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>{sub}</div>
        )}
      </div>
      {children}
    </div>
  );
}

function DiagramConnector({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 36, position: 'relative' }}>
      <div style={{ width: 1, height: '100%', background: 'rgba(255,255,255,0.25)' }} />
      <div style={{
        position: 'absolute', bottom: 0, width: 7, height: 7,
        borderRight: '1px solid rgba(255,255,255,0.45)',
        borderBottom: '1px solid rgba(255,255,255,0.45)',
        transform: 'rotate(45deg) translate(-3px, -3px)',
      }} />
      <div className="mono" style={{
        position: 'absolute', left: '50%', marginLeft: 14, fontSize: 10,
        letterSpacing: '0.18em', color: 'var(--teal)', textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
}

// =========================================================================
// HSM Gateway extras
// =========================================================================
function HsmGatewayExtras() {
  useLang();
  const payShield = [
    { c: tr('Gestión de PINs', 'PIN management'),
      ops: tr('Generación · Verificación ABA PVV · Traducción (ZPK, TPK, BDK/DUKPT, RSA)',
              'Generation · ABA PVV verification · Translation (ZPK, TPK, BDK/DUKPT, RSA)') },
    { c: tr('Gestión de llaves', 'Key management'),
      ops: tr('Generación · Importación bajo RSA · Par RSA pub/priv',
              'Generation · Import under RSA · RSA pub/priv key pair') },
    { c: tr('Operaciones de tarjeta', 'Card operations'),
      ops: tr('Verificación CVV/CVC · Autenticación EMV (ARQC/ARPC)',
              'CVV/CVC verification · EMV authentication (ARQC/ARPC)') },
    { c: tr('Cifrado de datos', 'Data encryption'),
      ops: tr('Cifrado · Descifrado · Firma RSA/ECC',
              'Encryption · Decryption · RSA/ECC signing') },
    { c: tr('Diagnóstico', 'Diagnostics'),
      ops: tr('Estado HSM · Carga del sistema · Diagnósticos generales',
              'HSM status · System load · General diagnostics') },
    { c: tr('Personalizadas', 'Custom'),
      ops: tr('Soporte para funciones custom según requerimiento',
              'Support for custom functions on request') },
  ];

  const luna = [
    { c: 'RSA',         ops: tr('Firmar · Verificar · Cifrar · Descifrar · Wrap · Unwrap',
                                 'Sign · Verify · Encrypt · Decrypt · Wrap · Unwrap') },
    { c: '3DES / AES',  ops: tr('Cifrar · Descifrar · Wrap · Unwrap',
                                 'Encrypt · Decrypt · Wrap · Unwrap') },
  ];

  const deploy = [
    { tag: 'On-premises',
      d: tr('Instalación en infraestructura propia, junto a tus HSMs físicos. Ideal para entornos regulados con perimetración estricta.',
            'Installation on your own infrastructure, alongside your physical HSMs. Ideal for regulated environments with strict perimetering.'),
      tags: ['Bare metal', 'VM', 'Air-gapped'] },
    { tag: 'Cloud-native',
      d: tr('Contenedores Docker o Kubernetes en tu cloud. Auto-escalado horizontal y rolling updates sin downtime.',
            'Docker or Kubernetes containers in your cloud. Horizontal auto-scaling and zero-downtime rolling updates.'),
      tags: ['Docker', 'K8s', 'Helm'] },
    { tag: tr('Híbrido', 'Hybrid'),
      d: tr('Workers en cloud que se conectan a HSMs on-prem vía VPN o Direct Connect. Lo mejor de ambos mundos.',
            'Cloud workers that connect to on-prem HSMs via VPN or Direct Connect. Best of both worlds.'),
      tags: ['VPN', 'Direct Connect', 'Multi-region'] },
  ];

  return (
    <React.Fragment>
      {/* Architecture */}
      <section className="rs-section" style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 48, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Arquitectura', 'Architecture')}</span>
              </div>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Configuration Manager,', 'Configuration Manager,')}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                  {tr('workers paralelos.', 'parallel workers.')}
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
                {tr(
                  'Tus aplicaciones hablan HTTP/S con un load balancer. Los workers traducen a TCP propietario y reparten la carga entre los HSMs de tu flota. Administradores gestionan todo desde una Web GUI conectada al Configuration Manager.',
                  'Your applications speak HTTP/S to a load balancer. Workers translate to proprietary TCP and spread the load across your HSM fleet. Administrators manage everything from a Web GUI connected to the Configuration Manager.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-arch-wrap" style={{
            background: 'var(--navy)', color: '#fff', padding: '48px 56px',
            borderRadius: 4, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '24px 24px', pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', top: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />

            <div className="mono" style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28, position: 'relative' }}>
              · {tr('Flujo lógico', 'Logical flow')}
            </div>

            <div style={{ position: 'relative' }}>
              <DiagramLayer label={tr('01 · Clientes', '01 · Clients')} sub={tr('tus apps', 'your apps')}>
                <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 10 }}>
                  <DiagramNode name={tr('Core / backend', 'Core / backend')}  sub={tr('servicio', 'service')} />
                  <DiagramNode name={tr('Banca web', 'Web banking')}           sub={tr('front', 'front')} />
                  <DiagramNode name="Mobile / SDK"                              sub="PB Library" />
                </div>
              </DiagramLayer>

              <DiagramConnector label="HTTPS" />

              <DiagramLayer label={tr('02 · Edge', '02 · Edge')}>
                <DiagramNode name="Load Balancer" sub={tr('distribución + reintentos', 'distribution + retries')} />
              </DiagramLayer>

              <DiagramConnector label="HTTPS  ·  REST + JSON" />

              <DiagramLayer label="03 · HSM Gateway" sub="Ziglabit" accent>
                <div className="rs-diagram-split" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 0.9fr) 2.2fr', gap: 10 }}>
                  <DiagramNode name="Configuration Manager" sub={tr('Web GUI · config · logs', 'Web GUI · config · logs')} />
                  <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 8 }}>
                    <DiagramNode name="Worker 1" mono />
                    <DiagramNode name="Worker 2" mono />
                    <DiagramNode name="Worker N" mono />
                  </div>
                </div>
              </DiagramLayer>

              <DiagramConnector label={tr('TCP nativo  ·  mensajería Thales', 'native TCP  ·  Thales messaging')} />

              <DiagramLayer label="04 · HSM Pool" sub="Thales" accent>
                <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 10 }}>
                  <DiagramNode name="payShield 10K" sub={tr('TCP nativo', 'native TCP')} />
                  <DiagramNode name="Luna"          sub={tr('mensajería propietaria', 'proprietary messaging')} />
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
              <span>{tr('Funciones criptográficas', 'Cryptographic functions')}</span>
            </div>
            <h2 className="rs-h2" style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)', maxWidth: 700 }}>
              {tr(
                'Cubrimos las operaciones reales, no solo el “hello world” criptográfico.',
                'We cover the real operations, not just cryptographic “hello world”.'
              )}
            </h2>
          </div>

          <div className="rs-compl-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ padding: '20px 28px', background: 'var(--cream-2)', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.02em' }}>payShield 10K</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', marginTop: 4 }}>
                    {tr('vía TCP nativo', 'via native TCP')}
                  </div>
                </div>
                <div className="mono" style={{
                  fontSize: 10, padding: '6px 12px', border: '1px solid var(--teal-deep)',
                  color: 'var(--teal-deep)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>Thales</div>
              </div>
              <table className="rs-crypto-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {payShield.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < payShield.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                      <td style={{ padding: '16px 28px', fontSize: 13.5, fontWeight: 500, color: 'var(--navy)', width: 200, verticalAlign: 'top' }}>{row.c}</td>
                      <td style={{ padding: '16px 28px 16px 0', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>{row.ops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '20px 28px', background: 'var(--cream-2)', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.02em' }}>Luna</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', marginTop: 4 }}>
                    {tr('vía mensajería propietaria', 'via proprietary messaging')}
                  </div>
                </div>
                <div className="mono" style={{
                  fontSize: 10, padding: '6px 12px', border: '1px solid var(--teal-deep)',
                  color: 'var(--teal-deep)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>Thales</div>
              </div>
              <table className="rs-crypto-table" style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
                <tbody>
                  {luna.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < luna.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                      <td style={{ padding: '16px 28px', fontSize: 13.5, fontWeight: 500, color: 'var(--navy)', width: 120, verticalAlign: 'top' }}>{row.c}</td>
                      <td style={{ padding: '16px 28px 16px 0', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>{row.ops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 'auto', padding: '16px 28px', background: 'var(--cream)',
                borderTop: '1px solid var(--line)', fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55,
              }}>
                {tr(
                  'Para operaciones específicas no listadas, contacto directo con nuestro equipo.',
                  'For specific operations not listed, reach out to our team directly.'
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PB Library callout */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-pblib" style={{
            background: '#fff', border: '1px solid var(--line)', borderLeft: '3px solid var(--teal)',
            borderRadius: 2, padding: '40px 48px',
            display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'center',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--teal-deep)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                {tr('Companion library', 'Companion library')}
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
                {tr(
                  'Librería JavaScript (Node.js 12+) para cifrado de PIN y datos sensibles en el cliente con RSA. Compatible con ISO 9564 Formato 0 y 1.',
                  'JavaScript library (Node.js 12+) for client-side PIN and sensitive-data encryption with RSA. Compatible with ISO 9564 Format 0 and 1.'
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Node.js 12+', 'ISO 9564 F0/F1', 'Ionic', 'React Native', 'Cordova'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 11, padding: '7px 12px',
                    border: '1px solid var(--line)', color: 'var(--navy)', background: 'var(--cream)', letterSpacing: '0.06em',
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
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 40, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Despliegue', 'Deployment')}</span>
              </div>
              <h2 style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Donde tus HSMs vivan, HSM Gateway vive.', 'Wherever your HSMs live, HSM Gateway lives.')}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                {tr(
                  'Misma API, mismas funciones, mismos SLAs. Cambia sólo el plano de control.',
                  'Same API, same functions, same SLAs. Only the control plane changes.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-cards-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)',
          }}>
            {deploy.map((d, i) => (
              <div key={d.tag} style={{
                background: '#fff', padding: 36,
                display: 'flex', flexDirection: 'column', gap: 16, minHeight: 240,
              }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 600, margin: 0, color: 'var(--navy)', letterSpacing: '-0.02em' }}>{d.tag}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty', flex: 1 }}>{d.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {d.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, padding: '6px 10px',
                      border: '1px solid var(--line)', color: 'var(--navy)', letterSpacing: '0.05em',
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

// =========================================================================
// ISO-8583 Proxy extras
// =========================================================================
function IsoProxyExtras() {
  useLang();
  const transforms = [
    { de: 'DE 2',   field: 'PAN',                                         op: tr('Tokenización · Detokenización', 'Tokenization · Detokenization'),     dir: 'in → vault' },
    { de: 'DE 35',  field: tr('Track 2', 'Track 2'),                      op: tr('Cifrado AES-256', 'AES-256 encryption'),                              dir: 'in → backend' },
    { de: 'DE 45',  field: tr('Track 1', 'Track 1'),                      op: tr('Cifrado AES-256', 'AES-256 encryption'),                              dir: 'in → backend' },
    { de: 'DE 52',  field: 'PIN block',                                   op: tr('Traducción ZPK → BDK/DUKPT', 'Translation ZPK → BDK/DUKPT'),         dir: 'translate' },
    { de: 'DE 55',  field: tr('Datos EMV (ARQC)', 'EMV data (ARQC)'),     op: tr('Validación criptograma', 'Cryptogram validation'),                    dir: 'in → issuer' },
    { de: 'DE 64',  field: 'MAC',                                         op: tr('Verificación / generación', 'Verification / generation'),             dir: 'both' },
    { de: 'DE 128', field: tr('MAC extendido', 'Extended MAC'),           op: tr('Verificación / generación', 'Verification / generation'),             dir: 'both' },
  ];

  const balancing = [
    { n: '01', t: tr('Round-robin ponderado', 'Weighted round-robin'),
      d: tr('Distribución uniforme entre HSMs o backends, con pesos por capacidad declarada. Útil cuando la flota es homogénea.',
            'Even distribution across HSMs or backends, weighted by declared capacity. Useful when the fleet is homogeneous.'),
      tags: ['HSM pool', 'backend pool'] },
    { n: '02', t: 'Least-busy',
      d: tr('Cada trama va al nodo con la cola más corta. Recomendado cuando los tiempos por operación criptográfica son heterogéneos.',
            'Each message goes to the node with the shortest queue. Recommended when per-operation cryptographic times are heterogeneous.'),
      tags: ['HSM pool'] },
    { n: '03', t: tr('Sticky por contraparte', 'Sticky by counterparty'),
      d: tr('Las tramas de una misma sesión o emisor caen siempre en el mismo nodo. Mantiene afinidad de cache y secuencia.',
            'Messages from the same session or issuer always land on the same node. Preserves cache affinity and sequence.'),
      tags: ['backend pool'] },
  ];

  const queueing = [
    { k: tr('Cola persistente', 'Persistent queue'),
      v: tr('Mensajes en vuelo escritos a disco antes del ack al cliente. Ninguna trama se pierde durante failover.',
            'In-flight messages written to disk before client ack. No message is lost during failover.') },
    { k: tr('Back-pressure', 'Back-pressure'),
      v: tr('El proxy desacelera al ingreso cuando la cola del backend o HSM supera el umbral configurado.',
            'The proxy throttles ingress when the backend or HSM queue exceeds the configured threshold.') },
    { k: tr('Circuit breaker', 'Circuit breaker'),
      v: tr('Un destino con N fallos consecutivos se aísla automáticamente. Reentra cuando responde a un probe de salud.',
            'A destination with N consecutive failures is automatically isolated. It re-enters when it answers a health probe.') },
    { k: tr('Reintentos idempotentes', 'Idempotent retries'),
      v: tr('Reenvía tramas marcadas como seguras (echo test, repeat) hasta agotar política — sin duplicar autorizaciones.',
            'Re-sends messages flagged as safe (echo test, repeat) until policy is exhausted — without duplicating authorizations.') },
  ];

  return (
    <React.Fragment>
      {/* Architecture */}
      <section className="rs-section" style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 48, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Arquitectura', 'Architecture')}</span>
              </div>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Un proxy,', 'One proxy,')}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                  {tr('tres protocolos de ingreso.', 'three ingress protocols.')}
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
                {tr(
                  'Los canales hablan en su protocolo nativo. El proxy convierte, transforma y reparte. Al switch y al core siempre les llega ISO-8583, sin importar de dónde venga la transacción.',
                  'Channels speak their native protocol. The proxy converts, transforms and routes. The switch and the core always receive ISO-8583, no matter where the transaction came from.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-arch-wrap" style={{
            background: 'var(--navy)', color: '#fff', padding: '48px 56px',
            borderRadius: 4, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '24px 24px', pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', top: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderTop: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 14, height: 14, borderLeft: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 14, height: 14, borderRight: '1px solid var(--teal)', borderBottom: '1px solid var(--teal)' }} />

            <div className="mono" style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28, position: 'relative' }}>
              · {tr('Flujo lógico', 'Logical flow')}
            </div>

            <div style={{ position: 'relative' }}>
              <DiagramLayer label={tr('01 · Canales de ingreso', '01 · Ingress channels')} sub={tr('multi-protocolo', 'multi-protocol')}>
                <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 10 }}>
                  <DiagramNode name={tr('POS · ATM · switch externo', 'POS · ATM · external switch')} sub={tr('TCP nativo ISO-8583', 'native TCP ISO-8583')} mono />
                  <DiagramNode name={tr('Banca digital · APIs', 'Digital banking · APIs')}            sub="JSON / REST" mono />
                  <DiagramNode name={tr('Sistemas legacy', 'Legacy systems')}                          sub="SOAP / WS" mono />
                </div>
              </DiagramLayer>

              <DiagramConnector label={tr('ingreso  ·  3 protocolos', 'ingress  ·  3 protocols')} />

              <DiagramLayer label="02 · ISO-8583 Proxy" sub="Ziglabit" accent>
                <div className="rs-iso-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  <DiagramNode name="Adapter"   sub={tr('parsing · normalización', 'parsing · normalization')} />
                  <DiagramNode name="Transform" sub={tr('HSM · cifrado · token', 'HSM · encrypt · tokenize')} />
                  <DiagramNode name="Queue"     sub="back-pressure · persist" />
                  <DiagramNode name="Balancer"  sub="round-robin · least-busy" />
                </div>
              </DiagramLayer>

              <div className="rs-iso-fork" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 0 }}>
                <div>
                  <DiagramConnector label={tr('TCP nativo  ·  Thales', 'native TCP  ·  Thales')} />
                  <DiagramLayer label="03a · HSM Pool" sub="Thales" accent>
                    <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 8 }}>
                      <DiagramNode name="payShield 10K" sub={tr('primario', 'primary')} />
                      <DiagramNode name="payShield 10K" sub={tr('secundario', 'secondary')} />
                    </div>
                  </DiagramLayer>
                </div>
                <div>
                  <DiagramConnector label="ISO-8583  ·  TCP" />
                  <DiagramLayer label="03b · Switch / Core" sub={tr('destino', 'destination')}>
                    <div className="rs-diagram-nodes" style={{ display: 'flex', gap: 8 }}>
                      <DiagramNode name={tr('Switch transaccional', 'Transactional switch')} sub={tr('autorizador', 'authorizer')} />
                      <DiagramNode name={tr('Core bancario', 'Banking core')}                 sub="settlement" />
                    </div>
                  </DiagramLayer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations table */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 40, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Transformaciones por campo', 'Per-field transformations')}</span>
              </div>
              <h2 style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Cada bit sensible', 'Every sensitive bit')}<br />
                {tr('pasa por el HSM.', 'passes through the HSM.')}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 520, textWrap: 'pretty' }}>
                {tr(
                  'Configurable por flujo: qué campos se tokenizan, cuáles se cifran simétricamente, cuáles se traducen entre zonas. La política viaja con la trama, no con el código del backend.',
                  'Configurable per flow: which fields are tokenized, which are symmetrically encrypted, which are translated between zones. Policy travels with the message, not with backend code.'
                )}
              </p>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              padding: '16px 28px', background: 'var(--cream-2)', borderBottom: '1px solid var(--line)',
              display: 'grid', gridTemplateColumns: '80px 1.2fr 1.6fr 1fr', gap: 24,
            }}>
              {[
                'DE',
                tr('Campo', 'Field'),
                tr('Operación', 'Operation'),
                tr('Dirección', 'Direction'),
              ].map(h => (
                <div key={h} className="mono" style={{
                  fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 500,
                }}>{h}</div>
              ))}
            </div>
            {transforms.map((row, i) => (
              <div key={i} style={{
                padding: '16px 28px',
                borderBottom: i < transforms.length - 1 ? '1px solid var(--line-soft)' : 'none',
                display: 'grid', gridTemplateColumns: '80px 1.2fr 1.6fr 1fr', gap: 24, alignItems: 'center',
              }}>
                <div className="mono" style={{ fontSize: 13, color: 'var(--teal-deep)', letterSpacing: '0.04em', fontWeight: 500 }}>{row.de}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{row.field}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>{row.op}</div>
                <div className="mono" style={{ fontSize: 11.5, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>→ {row.dir}</div>
              </div>
            ))}
            <div style={{
              padding: '14px 28px', background: 'var(--cream)', borderTop: '1px solid var(--line)',
              fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55,
            }}>
              {tr(
                'ISO 8583 1987 / 1993 / 2003. Otros bitmaps personalizados se configuran por contraparte.',
                'ISO 8583 1987 / 1993 / 2003. Other custom bitmaps are configured per counterparty.'
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Balancing modes */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 40, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Balanceo y resiliencia', 'Balancing and resilience')}</span>
              </div>
              <h2 style={{ fontSize: 40, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Tres estrategias.', 'Three strategies.')}<br />
                {tr('Configurable por pool.', 'Configurable per pool.')}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                {tr(
                  'Ninguna estrategia única encaja en todos los pools. El proxy permite mezclar — least-busy en HSMs, sticky en core — sin reiniciar.',
                  'No single strategy fits every pool. The proxy lets you mix — least-busy on HSMs, sticky on the core — without restarting.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-cards-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)', marginBottom: 48,
          }}>
            {balancing.map(b => (
              <div key={b.n} style={{
                background: '#fff', padding: 36,
                display: 'flex', flexDirection: 'column', gap: 16, minHeight: 240,
              }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--teal-deep)', letterSpacing: '0.15em' }}>{b.n}</div>
                <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0, color: 'var(--navy)', letterSpacing: '-0.02em' }}>{b.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty', flex: 1 }}>{b.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {b.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, padding: '6px 10px',
                      border: '1px solid var(--line)', color: 'var(--navy)', letterSpacing: '0.05em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rs-arch-wrap" style={{
            background: 'var(--navy)', color: '#fff', padding: '40px 48px',
            borderRadius: 4, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
              backgroundSize: '24px 24px', pointerEvents: 'none',
            }} />
            <div className="mono" style={{
              fontSize: 11, color: 'var(--teal)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 24, position: 'relative',
            }}>
              · {tr('Colas y resiliencia · primitivos', 'Queues and resilience · primitives')}
            </div>

            <div className="rs-cards-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, position: 'relative' }}>
              {queueing.map((q, i) => (
                <div key={i} style={{ borderLeft: '1px solid rgba(0,209,178,0.4)', paddingLeft: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', marginBottom: 6 }}>{q.k}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, textWrap: 'pretty' }}>{q.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

// =========================================================================
// Main SolutionView
// =========================================================================
function SolutionView({ id }) {
  useLang(); // re-render on language change
  const SOLUTIONS = getSolutions();
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
      <div style={{ borderBottom: '1px solid var(--line)', padding: '20px 0', background: 'var(--cream)' }}>
        <div className="container rs-breadcrumb" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="index.html" style={{
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            color: 'var(--ink-2)', fontSize: 13, padding: 0,
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}>
            <Icon.ArrowLeft size={14} /> {tr('Volver al inicio', 'Back to home')}
          </a>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--ink-3)', display: 'flex', gap: 16, alignItems: 'center',
          }}>
            <span>{tr('Soluciones', 'Solutions')}</span>
            <span>/</span>
            <span style={{ color: 'var(--navy)' }}>{s.tag}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="rs-section" style={{
        background: 'var(--navy)', color: '#fff', padding: '96px 0 120px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: '-5%', top: '-10%', opacity: 0.08, pointerEvents: 'none' }}>
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
                <span style={{ color: 'var(--teal)' }}>{s.tag}</span>
              </div>
              <h1 className="rs-h1" style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, margin: '0 0 32px' }}>
                {s.headline}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', margin: '0 0 40px', maxWidth: 600, textWrap: 'pretty' }}>
                {s.intro}
              </p>
              <div className="rs-btn-row" style={{ display: 'flex', gap: 14 }}>
                <a href="contacto.html" className="btn btn-teal">
                  {tr('Solicitar diagnóstico', 'Request a diagnostic')}
                  <Icon.ArrowRight size={14} />
                </a>
                <button className="btn btn-ghost-light">
                  {tr('Descargar ficha técnica', 'Download data sheet')}
                </button>
              </div>
            </div>

            <div className="rs-sol-statcard" style={{
              border: '1px solid rgba(255,255,255,0.18)', padding: 32, borderRadius: 4, position: 'relative',
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: 8 }}>
                {tr('IMPACTO EN PRODUCCIÓN', 'IMPACT IN PRODUCTION')}
              </div>
              <div className="rs-big-accent" style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 64, fontWeight: 500,
                letterSpacing: '-0.03em', color: 'var(--teal)', lineHeight: 1, marginBottom: 12,
              }}>{s.accentBig}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>{s.accentLabel}</div>

              <div style={{
                paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                {s.stats.slice(0, 3).map((st, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
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
          <div className="rs-section-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 64, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Pilares de la solución', 'Solution pillars')}</span>
              </div>
              <h2 className="rs-h2" style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 600, margin: 0, color: 'var(--navy)' }}>
                {tr('Cuatro frentes,', 'Four fronts,')}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--navy-soft)' }}>
                  {tr('una sola defensa.', 'a single defense.')}
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: 480, textWrap: 'pretty' }}>
                {tr(
                  'Cada pilar puede contratarse de forma independiente, pero alcanza su potencial cuando trabajan juntos sobre el mismo plano de control.',
                  'Each pillar can be contracted independently, but it reaches its full potential when they work together on the same control plane.'
                )}
              </p>
            </div>
          </div>

          <div className="rs-cards-2 rs-pillars" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)',
          }}>
            {s.pillars.map(p => (
              <div key={p.n} style={{ background: '#fff', padding: 40, display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--teal-deep)', letterSpacing: '0.15em', paddingTop: 4, width: 28 }}>{p.n}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 10px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>{p.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, textWrap: 'pretty' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-specific deep sections */}
      {s.hasHsmExtras && <HsmGatewayExtras />}
      {s.hasIsoExtras && <IsoProxyExtras />}

      {/* Compliance + Integrations */}
      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div className="container">
          <div className="rs-compl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid var(--line)', padding: 40, borderRadius: 4 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Cumplimiento', 'Compliance')}</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 16px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                {tr('Auditable de fábrica.', 'Auditable out of the box.')}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 28px', textWrap: 'pretty' }}>
                {tr(
                  'Cada control tiene evidencia digital persistente, exportable y firmada criptográficamente.',
                  'Each control has persistent, exportable, cryptographically signed digital evidence.'
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.compliance.map(c => (
                  <div key={c} className="mono" style={{
                    padding: '8px 14px', border: '1px solid var(--line)', fontSize: 11,
                    color: 'var(--navy)', letterSpacing: '0.08em', background: 'var(--cream)',
                  }}>{c}</div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', padding: 40, borderRadius: 4 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot"></span>
                <span>{tr('Integraciones', 'Integrations')}</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 16px', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                {tr('Conecta con lo que ya tienes.', 'Connect with what you already have.')}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 28px', textWrap: 'pretty' }}>
                {tr(
                  'Conectores certificados para los sistemas core y las plataformas de observabilidad más usadas en LATAM.',
                  'Certified connectors for the most widely used core systems and observability platforms across LATAM.'
                )}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.integrations.map(c => (
                  <div key={c} style={{
                    padding: '8px 14px', border: '1px solid var(--line)', fontSize: 13,
                    fontWeight: 500, color: 'var(--navy)', background: 'var(--cream)',
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
          <div className="rs-sol-bigstats-wrap" style={{ background: 'var(--navy)', color: '#fff', padding: '64px 56px', borderRadius: 4 }}>
            <div className="rs-sol-bigstats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
              {s.stats.map((st, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 44, fontWeight: 500,
                    color: 'var(--teal)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 12,
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
          <div className="rs-sol-next" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <a href={`${otherId}.html`} style={{
              background: '#fff', border: '1px solid var(--line)', padding: 40,
              textAlign: 'left', textDecoration: 'none', cursor: 'pointer',
              fontFamily: 'inherit', color: 'var(--navy)', borderRadius: 4,
              transition: 'all 0.25s',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
                {tr('Siguiente solución →', 'Next solution →')}
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>{otherS.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, marginTop: 'auto' }}>
                {tr('Explorar', 'Explore')} <Icon.ArrowRight size={14} />
              </div>
            </a>

            <div style={{
              background: 'var(--navy)', color: '#fff', padding: 40, borderRadius: 4,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)' }}>
                {tr('¿Listo para defender?', 'Ready to defend?')}
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>
                {tr('Hablemos de tu arquitectura, no de slides.', 'Let\u2019s talk architecture, not slides.')}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 12 }}>
                <a href="contacto.html" className="btn btn-teal">
                  {tr('Agendar 30 min', 'Book 30 min')}
                  <Icon.ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { SolutionView });
