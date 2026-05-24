# TODO — Ziglabit Web

Recordatorios de trabajo pendiente en el sitio. No es un backlog formal;
es un colchón para no perder pistas entre sesiones.

---

## CTAs de contacto — destino temporal

Actualmente **todos los CTAs de contacto/comercial apuntan a `contacto.html`**
como destino genérico. Cada uno debería tener su propio flujo específico
(calendario, formulario corto, mailto con asunto pre-poblado, etc.) según
la intención del usuario.

CTAs implicados:

- **"Solicitar demo"** — TopNav desktop y mobile ([src/chrome.jsx](src/chrome.jsx))
- **"Solicitar demo"** — Hero home ([src/home.jsx:191](src/home.jsx#L191))
- **"Agendar diagnóstico"** — CTA final home ([src/home.jsx:1105](src/home.jsx#L1105))
- **"Hablar con ventas"** — CTA final home ([src/home.jsx:1109](src/home.jsx#L1109))
- **"Solicitar diagnóstico"** — Hero de cada solución ([src/solution.jsx:1130](src/solution.jsx#L1130))
- **"Agendar 30 min"** — CTA cierre soluciones ([src/solution.jsx:1417](src/solution.jsx#L1417))
- **"Solicitar demo en vivo"** — Hero ATM Keygen ([src/atm-keygen.jsx:88](src/atm-keygen.jsx#L88))

Posibles destinos definitivos:

- "Agendar …" → integración con Cal.com / Calendly para reserva directa.
- "Solicitar demo" → formulario corto (stack actual + contacto) o calendario.
- "Hablar con ventas" → mailto a comercial con asunto pre-poblado, o
  ruta dedicada con calificación rápida.
- Diferenciar el copy del asunto del email según el CTA de origen para
  trazabilidad en bandeja.
