// Iconography: simple, geometric, angular — echoing the Algiz rune
const Icon = {
  ArrowRight: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8h11M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  ),
  ArrowUpRight: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  ),
  Plus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 7.5L5.5 11L12 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  ),
  ArrowLeft: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M14 8H3M7.5 3.5L3 8l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  ),
  // The Algiz-inspired Y/shield motif — geometric, abstract
  AlgizMark: ({ size = 48, color = "currentColor", accent = "var(--teal)" }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 6 L24 42" stroke={color} strokeWidth="2.5" />
      <path d="M24 6 L10 20" stroke={accent} strokeWidth="2.5" />
      <path d="M24 6 L38 20" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="42" r="2" fill={accent} />
    </svg>
  ),
  // Shield abstract
  Shield: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 5v6.5c0 4.5 3.2 8.6 8 10.5 4.8-1.9 8-6 8-10.5V5l-8-3z" stroke={color} strokeWidth="1.5" />
    </svg>
  ),
};

window.Icon = Icon;
