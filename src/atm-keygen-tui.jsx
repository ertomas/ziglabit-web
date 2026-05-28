// TUI mockup — faithful render of the ATM Keygen Text User Interface
// Deliberately minimal, high-security feel.

function TUIWindow({ title, subtitle, version, children, statusLeft, statusRight }) {
  return (
    <div className="tui">
      {/* title bar */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 18, alignItems: 'center',
        paddingBottom: 14, borderBottom: '1px solid rgba(0, 209, 178, 0.22)', marginBottom: 18,
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--zb-teal)',
            boxShadow: '0 0 0 4px rgba(0,209,178,0.18)',
          }} />
          <span className="teal" style={{ letterSpacing: '0.16em', fontSize: 11 }}>{title}</span>
          {subtitle && (
            <span className="muted" style={{ letterSpacing: '0.1em', fontSize: 11 }}>
              · {subtitle}
            </span>
          )}
        </div>
        <div />
        <span className="muted" style={{ fontSize: 11, letterSpacing: '0.08em' }}>{version || 'v0.9.4-rc'}</span>
      </div>

      {children}

      {/* status bar */}
      <div style={{
        marginTop: 22, paddingTop: 14,
        borderTop: '1px solid rgba(0, 209, 178, 0.22)',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 18,
        fontSize: 11, letterSpacing: '0.08em',
      }}>
        <div className="muted">{statusLeft || tr('F1 AYUDA · F2 PAUSAR · F10 CANCELAR', 'F1 HELP · F2 PAUSE · F10 CANCEL')}</div>
        <div>{statusRight}</div>
      </div>
    </div>
  );
}

function TUILabel({ children, w }) {
  return (
    <div className="label" style={{
      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      width: w || 110, flexShrink: 0,
    }}>{children}</div>
  );
}

function TUIBar({ pct, status }) {
  const total = 40;
  const filled = Math.round((pct / 100) * total);
  const empty = total - filled;
  const color =
    status === 'ok' ? 'var(--zb-teal)' :
    status === 'err' ? 'var(--zb-alert)' :
    status === 'pending' ? 'rgba(255,255,255,0.32)' :
    '#9FB4CC';
  return (
    <span>
      <span style={{ color }}>{'█'.repeat(filled)}</span>
      <span className="muted">{'░'.repeat(empty)}</span>
    </span>
  );
}

function CeremonyTUI() {
  useLang();
  const atms = [
    { id: 'ATM 00142', pct: 100, status: 'ok',       tag: 'OK' },
    { id: 'ATM 00143', pct: 100, status: 'ok',       tag: 'OK' },
    { id: 'ATM 00144', pct: 100, status: 'ok',       tag: 'OK' },
    { id: 'ATM 00145', pct: 100, status: 'ok',       tag: 'OK' },
    { id: 'ATM 00146', pct:  72, status: 'progress', tag: '…' },
    { id: 'ATM 00147', pct:   0, status: 'pending',  tag: tr('PENDIENTE', 'PENDING') },
    { id: 'ATM 00148', pct:   0, status: 'pending',  tag: tr('PENDIENTE', 'PENDING') },
  ];

  return (
    <TUIWindow
      title={tr('ATM KEYGEN · CEREMONIA EN CURSO', 'ATM KEYGEN · CEREMONY IN PROGRESS')}
      subtitle="14:32:08 UTC"
      version="v0.9.4-rc · build 1142"
      statusLeft={tr('F1 AYUDA · F2 PAUSAR · F5 IMPRIMIR · F10 CANCELAR', 'F1 HELP · F2 PAUSE · F5 PRINT · F10 CANCEL')}
      statusRight={<React.Fragment>
        <span className="muted" style={{ marginRight: 12 }}>LMK</span>
        <span className="teal">{tr('AUTORIZADO', 'AUTHORIZED')} ●</span>
      </React.Fragment>}
    >
      {/* meta block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 18 }}>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Institución', 'Institution')}</TUILabel>
          <span>BANCO REGIONAL CO  <span className="muted">· ABA 0223087</span></span>
        </div>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Ceremonia', 'Ceremony')}</TUILabel>
          <span>CER-2026-0418-014</span>
        </div>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Custodios', 'Custodians')}</TUILabel>
          <span>M. RESTREPO  <span className="muted">·</span>  R. CARDOZO</span>
        </div>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Operadores', 'Operators')}</TUILabel>
          <span>op.ana  <span className="muted">·</span>  op.luis</span>
        </div>
      </div>

      {/* section header */}
      <div style={{ marginBottom: 12 }}>
        <div className="teal" style={{ letterSpacing: '0.16em', fontSize: 11 }}>
          {tr('GENERANDO LLAVES TDES', 'GENERATING TDES KEYS')}
        </div>
        <div style={{ borderTop: '1px dashed rgba(255,255,255,0.16)', marginTop: 8 }} />
      </div>

      {/* ATM rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
        {atms.map(a => (
          <div key={a.id} style={{
            display: 'grid', gridTemplateColumns: '110px 1fr 90px', gap: 18, alignItems: 'center',
          }}>
            <span>{a.id}</span>
            <TUIBar pct={a.pct} status={a.status} />
            <span style={{
              textAlign: 'right',
              color: a.status === 'ok' ? 'var(--zb-teal)'
                : a.status === 'err' ? 'var(--zb-alert)'
                : a.status === 'pending' ? 'rgba(255,255,255,0.45)'
                : '#9FB4CC',
              letterSpacing: '0.08em',
            }}>{a.tag}</span>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px dashed rgba(255,255,255,0.16)', margin: '14px 0' }} />

      {/* aggregate progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 90px', gap: 18 }}>
          <TUILabel>{tr('Progreso', 'Progress')}</TUILabel>
          <TUIBar pct={49} status="ok" />
          <span style={{ textAlign: 'right' }}>
            <span className="teal">142</span>
            <span className="muted"> / 287</span>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Fallidos', 'Failed')}</TUILabel>
          <span className="muted">0</span>
        </div>
        <div style={{ display: 'flex' }}>
          <TUILabel>{tr('Sobres impresos', 'Envelopes printed')}</TUILabel>
          <span>
            <span className="teal">141</span>
            <span className="muted"> · {tr('serie', 'series')} SOB-CO-026-04XXXXX</span>
          </span>
        </div>
      </div>
    </TUIWindow>
  );
}

function LoginTUI() {
  useLang();
  return (
    <TUIWindow
      title={tr('ATM KEYGEN · AUTENTICACIÓN', 'ATM KEYGEN · AUTHENTICATION')}
      subtitle={tr('paso 1 de 7', 'step 1 of 7')}
      statusLeft={tr('ENTER CONFIRMAR  ·  TAB CAMBIAR CAMPO  ·  ESC SALIR', 'ENTER CONFIRM  ·  TAB NEXT FIELD  ·  ESC EXIT')}
      statusRight={<span className="muted">{tr('LMK NO AUTORIZADO', 'LMK NOT AUTHORIZED')}  ○</span>}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '6px 0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <TUILabel w={140}>{tr('Operador', 'Operator')}</TUILabel>
          <span>op.ana_______________</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <TUILabel w={140}>{tr('Credencial · 1', 'Credential · 1')}</TUILabel>
          <span className="teal">●●●●●●●●●●●●●●●●_____</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <TUILabel w={140}>{tr('Credencial · 2', 'Credential · 2')}</TUILabel>
          <span className="teal">●●●●●●●●●●●●_________</span>
        </div>

        <div style={{
          marginTop: 6, padding: '10px 14px',
          border: '1px dashed rgba(255,184,91,0.45)',
          color: '#FFD8A6', fontSize: 11.5, letterSpacing: '0.04em',
        }}>
          <span className="warn" style={{ letterSpacing: '0.18em' }}>{tr('AVISO', 'NOTICE')}  </span>
          {tr(
            'Las credenciales se enmascaran por completo. En caso de error, el sistema no revela cuál falló.',
            'Credentials are fully masked. On failure, the system does not reveal which one was wrong.'
          )}
        </div>
      </div>
    </TUIWindow>
  );
}

Object.assign(window, { TUIWindow, CeremonyTUI, LoginTUI });
