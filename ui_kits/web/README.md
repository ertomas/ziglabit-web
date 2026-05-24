# Ziglabit Web UI Kit

Hi-fi recreation interactiva del sitio Ziglabit. La implementación viva está en la raíz del proyecto:

- **`/index.html`** — homepage completa con navegación interactiva a vistas de solución
- **`/src/chrome.jsx`** — `TopNav`, `Footer`
- **`/src/home.jsx`** — `Hero`, `LiveTelemetry`, `SectorStrip`, `SolutionsSection`, `PlatformSection`, `ResultsSection`, `CTASection`
- **`/src/solution.jsx`** — `SolutionView` con pilares, cumplimiento, integraciones y stats
- **`/src/icons.jsx`** — set custom (arrows, plus, check, shield, Algiz mark)
- **`/src/app.jsx`** — router cliente entre `home` y `solution`

## Screens cubiertos

| # | Screen | Source |
|---|---|---|
| 01 | Home — Hero + telemetría en vivo | `home.jsx` → `Hero` |
| 02 | Soluciones — 2 cards principales + 4 secundarias | `home.jsx` → `SolutionsSection` |
| 03 | Plataforma — 6 pilares sobre navy | `home.jsx` → `PlatformSection` |
| 04 | Resultados — testimonio + métricas | `home.jsx` → `ResultsSection` |
| 05 | Solution detail (Banca / FinTech) | `solution.jsx` → `SolutionView` |

## Componentes reusables (extraibles)

Para reutilizar en otros productos, copiar:
- **`Eyebrow`** — patrón `mono uppercase 11px + dot teal` antes de cada heading
- **`StatBlock`** — número grande en JetBrains Mono + label corto
- **`LiveTelemetry`** — panel navy con corner ticks, contador en vivo, feed de eventos
- **`SolutionCard`** — card grande clickeable con hover → invierte navy
- **`Button`** — 4 variantes (primary navy / teal / ghost / ghost-light)
- **`Chip`** — compliance (mono uppercase con borde) o integration (poppins regular)

## Patrones de layout

- **Container**: max-width 1280px, padding lateral 32px
- **Hero grids**: asimétricos `1.15fr 1fr` o `1.4fr 1fr`
- **Section padding**: 120px vertical
- **Cards en grid**: `min-height` para alinear filas

## Tweaks pendientes

- [ ] Versión mobile/tablet (actualmente desktop-first)
- [ ] Variante tematizada para Banca (más serio) vs FinTech (más rápido)
- [ ] Sistema de formularios accesible
- [ ] Dashboard / consola de operaciones (otro UI kit)
