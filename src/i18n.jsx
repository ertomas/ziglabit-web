// =============================================================================
// Ziglabit · i18n engine
// -----------------------------------------------------------------------------
// Detección automática del idioma + cambio manual persistente.
//
// Orden de precedencia para decidir el idioma inicial:
//   1. Parámetro de URL  ?lang=en  (sirve para enlaces externos)
//   2. localStorage      ziglabit.lang
//   3. navigator.language  (en* → en, resto → es)
//   4. fallback          es
//
// Cualquier componente puede:
//   - leer el idioma actual con   const [lang, setLang] = useLang();
//   - traducir un string con      tr('hola', 'hello')
//   - mostrar el selector con     <LanguageSwitcher /> o <LanguageSwitcher dark />
//
// Para títulos / meta description por página, usar atributos en el HTML:
//   <title data-i18n-es="Foo" data-i18n-en="Foo (en)">Foo</title>
// El motor recorre todo [data-i18n-es] y actualiza textContent / content.
// =============================================================================

(function () {
  const KEY = 'ziglabit.lang';
  const SUPPORTED = ['es', 'en'];
  const DEFAULT = 'es';

  function readUrlLang() {
    try {
      const u = new URL(window.location.href);
      const q = u.searchParams.get('lang');
      if (q && SUPPORTED.includes(q.toLowerCase())) return q.toLowerCase();
    } catch (_) {}
    return null;
  }

  function readStoredLang() {
    try {
      const v = localStorage.getItem(KEY);
      if (v && SUPPORTED.includes(v)) return v;
    } catch (_) {}
    return null;
  }

  function readNavigatorLang() {
    const raw = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (!raw) return null;
    const short = raw.slice(0, 2);
    if (SUPPORTED.includes(short)) return short;
    return null;
  }

  function detect() {
    return readUrlLang() || readStoredLang() || readNavigatorLang() || DEFAULT;
  }

  let current = detect();

  // Sync once on load — i18n.jsx is the first script that runs after React.
  function applyDocumentLevelChanges(lang) {
    try {
      document.documentElement.setAttribute('lang', lang);
    } catch (_) {}

    // Update <title> + meta tags marked with data-i18n-* attributes.
    const nodes = document.querySelectorAll('[data-i18n-es], [data-i18n-en]');
    nodes.forEach((el) => {
      const val = el.getAttribute('data-i18n-' + lang);
      if (val == null) return;
      if (el.tagName === 'META') {
        el.setAttribute('content', val);
      } else {
        el.textContent = val;
      }
    });

    // OG locale follows along.
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'es_ES');
  }

  function get() { return current; }

  function set(next) {
    if (!SUPPORTED.includes(next) || next === current) return;
    current = next;
    try { localStorage.setItem(KEY, next); } catch (_) {}
    applyDocumentLevelChanges(next);
    window.dispatchEvent(new CustomEvent('zb:langchange', { detail: next }));
  }

  // Initial document sync.
  applyDocumentLevelChanges(current);

  // -- React glue ------------------------------------------------------------

  function useLang() {
    const [, force] = React.useReducer((x) => x + 1, 0);
    React.useEffect(() => {
      const onChange = () => force();
      window.addEventListener('zb:langchange', onChange);
      return () => window.removeEventListener('zb:langchange', onChange);
    }, []);
    return [get(), set];
  }

  function tr(es, en) {
    return get() === 'en' ? en : es;
  }

  // -- Switcher component ----------------------------------------------------
  //
  // Pill segmentado ES / EN. Compacto, encaja en la barra de navegación y
  // también en el footer (variante `dark`).

  function LanguageSwitcher({ dark, compact }) {
    const [lang, setLang] = useLang();

    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      padding: 2,
      border: '1px solid ' + (dark ? 'rgba(255,255,255,0.22)' : 'var(--line)'),
      borderRadius: 2,
      background: dark ? 'transparent' : 'transparent',
    };

    const btn = (code) => {
      const active = lang === code;
      const fg = dark
        ? (active ? 'var(--navy)' : 'rgba(255,255,255,0.7)')
        : (active ? '#fff' : 'var(--ink-2)');
      const bg = active
        ? (dark ? 'var(--teal)' : 'var(--navy)')
        : 'transparent';
      return {
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: compact ? 10.5 : 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: compact ? '5px 9px' : '6px 11px',
        background: bg,
        color: fg,
        border: 'none',
        cursor: active ? 'default' : 'pointer',
        borderRadius: 1,
        fontWeight: 500,
        transition: 'background 0.18s, color 0.18s',
      };
    };

    return (
      <div
        role="group"
        aria-label={tr('Selector de idioma', 'Language selector')}
        style={base}
      >
        {['es', 'en'].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            style={btn(code)}
          >{code}</button>
        ))}
      </div>
    );
  }

  // Public surface
  window.I18N = { get, set, SUPPORTED, detect };
  window.useLang = useLang;
  window.tr = tr;
  window.LanguageSwitcher = LanguageSwitcher;
})();
