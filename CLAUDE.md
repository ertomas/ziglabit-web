# CLAUDE.md — Ziglabit Design System

> Instrucciones permanentes para Claude (Claude Code y Claude Design).
> Si abres este repo en una sesión nueva, lee este archivo antes de empezar.

Este repositorio es el **design system de Ziglabit** — una empresa de
ciberseguridad e integración para banca, FinTech y procesadores de pago en
LATAM. Aquí viven los tokens, la tipografía, los assets de marca, los
componentes y el sitio de referencia.

---

## 0. Lectura obligatoria antes de tocar nada

1. **`README.md`** — fundamentos de voz, paleta, tipografía, espaciado,
   iconografía y reglas duras. Es la fuente única de verdad.
2. **`SKILL.md`** — versión condensada para invocación rápida como skill.
3. **`colors_and_type.css`** — tokens implementados como CSS variables.
4. **`index.html` + `src/*.jsx`** — implementación viva del sistema. Cuando
   dudes de cómo se ve algo, abre el sitio.
5. **`preview/*.html`** — cards de revisión del DS (color, type, spacing,
   components, brand). Cada card es un ejemplo aislado del token o
   componente.

---

## 1. Hard rules (innegociables)

- **No gradientes.** Color sólido siempre.
- **No emoji.** Jamás. Ni en producto, ni en marketing, ni en comentarios
  de UI.
- **No reproducir el logo en SVG.** Usar siempre los PNG de `assets/`.
- **Poppins + JetBrains Mono** son las únicas fuentes. Sin Inter, sin
  Roboto, sin system-ui.
- **Cream `#F4F1EA`** como fondo principal — nunca blanco puro.
- **Bordes 1px** en lugar de sombras (excepción única: panel de telemetría
  del hero).
- **Radius máximo 4px.** Todo recto.
- **Sin caracteres unicode como iconos** (✓ → ★). Dibujar en SVG.
- **Métricas concretas** antes que adjetivos vacíos. Castellano LATAM
  neutro, sentence case en titulares.

Cualquier desviación de estas reglas requiere una decisión explícita del
usuario, documentada en el commit.

---

## 2. Estructura del repo

```
/
├── README.md                ← fuente de verdad del DS (voz + visual)
├── SKILL.md                 ← skill cross-compatible para Claude Code
├── CLAUDE.md                ← este archivo
├── colors_and_type.css      ← tokens + semantic CSS vars
├── index.html               ← homepage Ziglabit (referencia viva)
├── *.html                   ← otras vistas (atm-keygen, hsm-gateway, etc.)
├── src/                     ← componentes React/JSX del sitio y prototipos
├── assets/                  ← logos PNG normalizados
├── fonts/                   ← Poppins (TTF, todos los pesos)
├── preview/                 ← cards 700×N del Design System tab
└── ui_kits/web/             ← wrapper del UI kit que apunta a /index.html
```

**Qué NO va en el repo** (ver `.gitignore`):

- `uploads/` — staging de la plataforma Anthropic; los archivos útiles ya
  están en `assets/`.
- `screenshots/`, `scraps/`, `*.pptx`, `*.pdf` — outputs locales.
- `node_modules/`, `dist/`, `.env*`.

---

## 3. Cómo añadir cosas nuevas

### Nuevo componente reutilizable
1. Implementarlo en `src/` como JSX, importable por más de una vista.
2. Crear una card de preview en `preview/component-<nombre>.html`
   (max 700px de ancho, fondo cream o navy según corresponda).
3. Registrarlo en el manifest de assets si va a estar en revisión.
4. Documentar en `README.md` → sección `INDEX` y en `ui_kits/web/README.md`
   si aplica al sitio.

### Nueva vista del sitio
1. HTML al root (`<nombre>.html`), JSX en `src/<nombre>.jsx`.
2. Reutilizar `chrome.jsx` (TopNav + Footer) y tokens existentes.
3. Verificar que no se introduzcan colores/fuentes/radios fuera del
   sistema.

### Nuevo color, fuente o token
**Casi siempre la respuesta es: no.** Pero si es necesario:
1. Añadirlo a `colors_and_type.css` con un nombre semántico (`--algo`, no
   `--azul-7`).
2. Documentar en `README.md` → tabla de paleta o tipografía.
3. Crear card de preview que demuestre el uso.
4. Commit dedicado con justificación en el mensaje.

### Nuevo icono
1. Lucide-compatible, stroke 1.5–2px, `stroke-linecap="square"`.
2. Añadir a `src/icons.jsx` como componente nombrado.
3. No usar Lucide por CDN — copiarlo inline para mantener consistencia
   de stroke.

---

## 4. Convenciones de commit (sugerido)

Formato `tipo(scope): mensaje en sentence case`.

- `feat(components): añadir Tag de severidad`
- `fix(home): corregir gap entre cards de solución en 1280px`
- `docs(readme): actualizar reglas de iconografía`
- `chore(repo): ignorar screenshots/ en gitignore`
- `style(tokens): renombrar --navy-soft a --navy-3` (cambios sin lógica)
- `refactor(home): extraer LiveTelemetry a su propio archivo`

Un cambio por commit. Mensajes en español, igual que el resto del repo.

---

## 5. Flujo de trabajo con Claude Code

Cuando trabajes con Claude Code en este repo:

1. Lee `README.md` y este archivo antes de tocar nada.
2. Si vas a producir HTML/CSS/JSX nuevo, verifica primero los tokens en
   `colors_and_type.css` y los patrones en `src/`.
3. **No inventes valores** — si necesitas un color/spacing/radius que no
   está, pregunta antes de añadirlo.
4. **No instales dependencias** sin avisar. Este repo es HTML estático
   puro hoy; cualquier build step se discute primero.
5. Al terminar, deja un resumen breve de qué archivos tocaste y por qué.

---

## 6. Flujo de trabajo con Claude Design

Cuando trabajes con Claude Design (esta plataforma):

1. La skill `ziglabit-design` (definida en `SKILL.md`) carga este sistema
   automáticamente.
2. Outputs visuales (slides, mocks, prototipos) van a archivos HTML al
   root del proyecto.
3. Los assets de marca se copian desde `assets/` — nunca se referencian
   por ruta externa.
4. Cualquier cambio al DS se hace primero en los archivos canónicos
   (`README.md`, `colors_and_type.css`, `src/`, `preview/`), y luego se
   propaga a los artefactos.

---

## 7. Sincronización con Gitea

Este repo vive en un Gitea privado. Flujo recomendado:

```bash
# primera vez
git clone https://<gitea-host>/<org>/ziglabit-design-system.git
cd ziglabit-design-system

# trabajo diario
git checkout -b feat/<descripcion-corta>
# ... cambios ...
git add .
git commit -m "feat(scope): mensaje"
git push -u origin feat/<descripcion-corta>
# abrir Pull Request en Gitea
```

Si trabajas con Claude Code apuntando al repo local clonado, este archivo
se lee automáticamente al iniciar la sesión.
