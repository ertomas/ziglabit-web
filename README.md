# Ziglabit Design System

> "Integración avanzada para proteger tus activos digitales."

Ziglabit es una empresa de **ciberseguridad e integración de software** dirigida a banca, procesadores de pago y FinTech en LATAM. El nombre combina **Zigla** — la runa vikinga *Algiz* en reverso, símbolo de protección, defensa, fuerza y progreso — con **bit**, anclaje tecnológico. El sistema visual debe transmitir confianza profesional, autoridad técnica y avance, sin caer en el cliché "cyber neón" del sector.

Este design system es la fuente única de verdad para diseñar productos, presentaciones y comunicación de marca Ziglabit.

## Sources

- **Brand brief** entregado por el cliente (paleta navy + teal, motivo Algiz, slogan oficial).
- **Logos** light y dark provistos en `uploads/`, normalizados en `assets/`.
- **Sitio Ziglabit** (`index.html` + `src/*.jsx` en la raíz del proyecto) — primera implementación de referencia del sistema; toda decisión de componente está cristalizada ahí.

No se contó con codebase previo ni Figma — este DS se construyó *desde* el sitio y el brief.

---

## CONTENT FUNDAMENTALS

### Voz
**Profesional, técnico, accesible.** Autoridad sin distancia. Suena como un arquitecto de seguridad senior explicándole a otro arquitecto: no condesciende, no infla, no vende humo.

### Tono
- Concreto sobre conceptual.
- Específico sobre genérico.
- Métricas reales antes que adjetivos.
- Castellano LATAM neutro; anglicismos técnicos aceptados del sector (gateway, WAF, tokenización, p95, MFA) se usan sin cursiva ni explicación.

### Ejemplos
| ✅ Sí | ❌ No |
|---|---|
| "Decisión anti-fraude en menos de 35ms." | "Velocidad ultrarrápida de última generación." |
| "Migramos 14 canales digitales en 9 semanas." | "Soluciones llave en mano para tu transformación." |
| "Una sesión de 30 minutos vale más que diez auditorías." | "¡Agenda tu demo gratis hoy mismo!" |
| "Sin pitch, sin formularios eternos." | "Descubre cómo podemos potenciar tu negocio." |

### Casing & estilo
- **Titulares**: sentence case, NUNCA Title Case. Un punto al final si la frase es declarativa.
- **Eyebrows / labels técnicos**: UPPERCASE, mono, letter-spacing 0.15em.
- **Botones**: sentence case ("Solicitar demo", no "SOLICITAR DEMO").
- **Cifras**: separador local (`1,247` o `1.247` según país); siempre con la unidad pegada (`47ms`, `99.99%`, `€4.2B`).
- **Tratamiento "Zigla**bit**"**: en cuerpo de texto siempre se escribe junto, sin estilizar. El logo es el lugar para el énfasis tipográfico.

### Reglas duras
- **Cero emoji** en producto, marketing o slides. La marca es seria.
- **Cero exclamaciones** salvo en errores genuinos.
- **Cero superlativos vacíos** ("revolucionario", "líder mundial", "best-in-class").
- **Cero promesas absolutas** sobre seguridad ("100% seguro", "imposible de hackear").
- Frases cortas. `text-wrap: pretty` en CSS para que el navegador rompa con criterio.

---

## VISUAL FOUNDATIONS

### Paleta
Una paleta deliberadamente acotada. Tres colores hacen el 95% del trabajo: **navy**, **crema**, **teal**.

| Token | Hex | Uso |
|---|---|---|
| `--navy` | `#00274D` | Color primario. Texto sobre claro, fondos oscuros, botones primarios. |
| `--navy-2` | `#001A36` | Hover de superficies navy, fondos extra-oscuros. |
| `--navy-soft` | `#14365E` | Texto secundario sobre claro; énfasis en cursivas. |
| `--teal` | `#00D1B2` | Acento de marca. Del logo. Live indicators, métricas destacadas, accents en oscuro. |
| `--teal-deep` | `#00B59A` | Hover del teal. |
| `--cream` | `#F4F1EA` | Fondo principal. Reemplaza al blanco por defecto — más cálido, menos clínico. |
| `--cream-2` | `#ECE7DB` | Zonas alternadas, strips, fondos de chips. |
| `--white` | `#FFFFFF` | Cards sobre crema, paneles de claridad máxima. |
| `--line` | `#D9D3C3` | Bordes 1px sobre crema. |
| `--line-soft` | `#E8E3D4` | Separadores internos sutiles. |
| `--ink` | `#0F1A2B` | Texto base de cuerpo. |
| `--ink-2` | `#3A4A5E` | Texto secundario. |
| `--ink-3` | `#6B7A8E` | Captions, labels muted, metadata. |
| `--alert` | `#FF6B5B` | Eventos críticos en telemetría, badges high-severity. NO usar para CTA. |

**Reglas duras:**
- **NUNCA gradientes.** Ni de marca, ni de fondo, ni "para darle vida". Color sólido siempre.
- Fondos: alternar `cream` y `navy` para secciones; nunca usar blanco como fondo de página.
- Teal se usa con moderación — es acento, no superficie. Botones teal aparecen sobre navy oscuro y nunca sobre crema (excepto el CTA principal del hero, intencional).

### Tipografía
- **Display + UI**: Poppins, pesos 300-800. Por defecto 500-600 en headlines.
- **Mono**: JetBrains Mono, 400-500. Reservada para datos, eyebrows, métricas, timestamps, labels técnicos.
- **Tracking display**: `-0.035em` en titulares 60px+, `-0.03em` en 40-50px, `-0.02em` en 20-30px.
- **Tracking mono uppercase**: `0.12em–0.18em`.
- **Line-height**: 1.02-1.05 en displays, 1.55-1.6 en cuerpo, 1.7 en listas densas.
- **Wrapping**: `text-wrap: pretty` en `<p>` y `<h2>` cuando sea posible.
- **Sin Inter, Roboto, system-ui.** Poppins es el carácter de marca.

### Espaciado
Escala basada en 4: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`.
- **Container**: max-width 1280px, padding lateral 32px.
- **Secciones grandes**: 120px de padding vertical.
- **Secciones medianas**: 64-80px.
- **Card padding**: 32-40px en cards principales, 24-28px en secundarias.
- **Gap entre elementos relacionados**: 8-16px. Entre bloques: 24-32px.

### Bordes y radios
- **Radius máximo 4px.** Casi cero. Los rectángulos rectos refuerzan la sensación de precisión.
- **Bordes 1px** sólidos en lugar de sombras. Las sombras grandes están permitidas solo para "elevar" el panel de telemetría del hero (caso especial, profundidad dramática).
- **Sin border-radius en chips, badges, inputs.** Todo recto.

### Fondos y texturas
- Cream como fondo de página, **nunca** blanco.
- Navy con `dot-pattern` (radial-gradient de puntos de 24px de espaciado) para texturas sobre fondos oscuros — añade densidad sin distraer.
- **Algiz watermark**: el motivo geométrico Y/escudo (línea vertical + dos diagonales saliendo desde un punto superior) aparece como watermark sutil (opacidad 0.05–0.12) en hero sections, cards de soluciones y CTAs.
- **Esquinas "tick"** en paneles de datos en vivo: pequeños ángulos L de 10px en las 4 esquinas, color teal — refuerzan el feel de "operación / monitor / HUD".

### Animación
- **Easing único**: `cubic-bezier(0.2, 0.7, 0.2, 1)` — desaceleración suave pero decidida.
- **Duraciones**: 0.2s para hovers, 0.35s para transiciones de estado, 0.45-0.7s para entradas/reveals.
- **Patrón "view-enter"**: opacity 0 → 1 + translateY(12px → 0) en cambios de vista.
- **Live data**: pulses de 2s (opacity 1 ↔ 0.5) en indicadores activos. Counters que incrementan en tiempo real refuerzan "esto está vivo".
- **Sin bounces, sin elasticidad, sin overshoots.** Movimiento mecánico, no cartoonish.

### Estados interactivos
- **Hover botón primario**: `translateY(-1px)` + sutil cambio de color al `navy-2`.
- **Hover card neutra**: invierte a `bg: navy / text: white`. El cambio es completo, no un tinte.
- **Hover link**: opacity 0.85 → 1.0.
- **Press**: NO se shrinkea ni cambia de color visiblemente. El click es instantáneo.
- **Focus**: por implementar (no presente aún en el sitio) — usar outline teal 2px con offset 2px.

### Layout
- **Asimetría intencional** en grids: 1.15:1, 1:1.4, 1.4:1 — nunca 50/50 puro en hero/feature sections.
- **Min-height en cards** que viven en grids para alinear filas (ej. 480px en cards de solución).
- **Sticky nav** con blur (`backdrop-filter`) que activa solo al scrollear (`scrolled` state).
- **Footer** denso de 5 columnas, fondo navy, headings en teal mono uppercase.

### Sombras
Una sola sombra grande, intencional, para el panel de telemetría del hero:
`box-shadow: 0 30px 60px -20px rgba(0, 39, 77, 0.35);`

Cualquier otra superficie usa **bordes 1px**, no sombras.

---

## ICONOGRAPHY

### Aproximación
Lineal, geométrica, angular. **Stroke 1.5–2px** con `stroke-linecap="square"` (no round). El feel debe ser de "ingeniería técnica", no "amistoso".

### Sistema usado
**Custom set inline** dibujado en `src/icons.jsx` del proyecto base. Solo se han definido los iconos estrictamente necesarios:
- `ArrowRight`, `ArrowLeft`, `ArrowUpRight` (navegación + outbound)
- `Plus`, `Check` (utilidad)
- `Shield`, `AlgizMark` (motivos de marca)

### Cuando hace falta un icono nuevo
**Substituir desde Lucide** (https://lucide.dev) — la familia de strokes y la geometría son compatibles. **Flag**: cuando se traiga un Lucide, ajustar `stroke-linecap` a `square` y stroke a 1.5px para mantener consistencia.

### Marca Algiz
La marca Algiz (Y/escudo geométrico) no es un icono — es **un motivo**. Aparece como watermark a baja opacidad (0.05–0.12) en hero sections, cards y CTAs. Tres trazos:
```
   \   |   /
    \  |  /
     \ | /
      \|/
       |
       |
       •
```
Nunca debe sustituir al logo. Nunca debe aparecer en alto contraste.

### Logos
- `assets/ziglabit-light.png` — versión para fondos claros (navy sobre transparente).
- `assets/ziglabit-dark.png` — versión para fondos oscuros (blanco/teal sobre transparente).
- Altura mínima 24px, máxima 48px en uso normal.
- Padding de aire alrededor del logo equivalente a la altura de la "Z".

### Reglas
- **Sin emoji.** Jamás.
- **Sin caracteres unicode usados como iconos** (✓, →, ★). Se dibujan como SVG.
- **Sin iconos coloridos** ni "filled" estilo iOS. Todo es line + monocromo + 1 acento teal cuando es necesario.

---

## INDEX (manifest)

```
/
├── README.md                ← este archivo (fuente de verdad)
├── CLAUDE.md                ← instrucciones permanentes para Claude
├── SKILL.md                 ← skill cross-compatible para Claude Code
├── .gitignore               ← qué NO se commitea
├── .gitattributes           ← line endings + binarios
├── colors_and_type.css      ← tokens + semantic CSS vars
├── index.html               ← homepage Ziglabit (referencia viva del sistema)
├── atm-keygen.html          ← vista ATM Key Generation
├── hsm-gateway.html         ← vista HSM Gateway
├── desarrollo-seguro.html   ← vista Desarrollo Seguro
├── intercambio-archivos.html← vista Intercambio de Archivos
├── src/                     ← componentes React de la homepage y vistas
│   ├── icons.jsx
│   ├── chrome.jsx           ← TopNav, Footer
│   ├── home.jsx             ← Hero, Solutions, Platform, Results, CTA
│   ├── solution.jsx         ← vista de detalle de solución
│   ├── atm-keygen.jsx       ← vista ATM key generation
│   └── atm-keygen-tui.jsx   ← TUI auxiliar
├── assets/                  ← logos y assets de marca
│   ├── ziglabit-light.png
│   └── ziglabit-dark.png
├── fonts/                   ← Poppins (TTF, todos los pesos)
├── preview/                 ← cards 700×N del Design System tab
│   ├── color-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   ├── component-*.html
│   └── brand-*.html
└── ui_kits/
    └── web/                 ← UI kit del sitio Ziglabit
        ├── README.md
        └── index.html       ← wrapper que apunta a la homepage
```

---

## WORKING WITH THIS REPO

### Clonar desde Gitea
```bash
git clone https://<gitea-host>/<org>/ziglabit-design-system.git
cd ziglabit-design-system
```

No hay build step — todo es HTML estático. Abre `index.html` en cualquier
navegador o sirve la carpeta con `python -m http.server 8000`.

### Con Claude Code
Al iniciar una sesión apuntando al repo local clonado, Claude Code lee
automáticamente `CLAUDE.md`. Ahí están las instrucciones permanentes:
reglas duras, estructura, convenciones de commit y cómo añadir cosas
nuevas sin romper el sistema.

### Con Claude Design (esta plataforma)
La skill `ziglabit-design` (definida en `SKILL.md`) carga este sistema
automáticamente. Si trabajas en otro proyecto y quieres usar la marca
Ziglabit, invoca la skill y se traerán los assets y reglas necesarios.

### Convenciones de commit
Formato `tipo(scope): mensaje en sentence case`, en español.

- `feat(components): añadir Tag de severidad`
- `fix(home): corregir gap entre cards en 1280px`
- `docs(readme): actualizar reglas de iconografía`
- `chore(repo): ignorar screenshots/`

Un cambio por commit. Mensajes claros sobre el porqué, no solo el qué.

### Próximos pasos sugeridos
- Productos de aplicación (dashboard SOC, consola Algiz) — pendientes de definir.
- Sistema de slides para keynote / sales — pendiente.
- Sistema de formularios accesible (focus rings, error states) — pendiente.
- Variantes responsive del sitio para tablet y mobile — pendiente.
