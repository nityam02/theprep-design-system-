/**
 * Color tokens — semantic, role-based.
 * Names describe purpose, not appearance, so themes can be swapped without
 * changing component code. Every pairing below is documented with its
 * WCAG contrast ratio in `docs/3-Foundations-Color.mdx`.
 */
export const color = {
  // Action — interactive surfaces and brand-forward affordances
  'action-primary': '#1032CF',
  'action-primary-hover': '#0A26A8',
  'action-primary-pressed': '#001F9D',
  'on-action-primary': '#FFFFFF',

  // Authority — used where legal/professional gravitas is required
  'surface-authority': '#001F9D',
  'on-surface-authority': '#FFFFFF',

  // Surfaces — ambient layers that hold content
  'surface-default': '#FFFFFF',
  'surface-canvas': '#FFF8F9',
  'surface-subtle': '#FFF0F5',
  'surface-accent-soft': '#FFE8F2',

  // Text
  'text-primary': '#1A1618',
  'text-secondary': '#765568',
  'text-tertiary': '#A48A99',
  'text-inverse': '#FFFFFF',

  // Border
  'border-subtle': '#FFE8F2',
  'border-default': '#E8C8D6',
  'border-strong': '#765568',

  // Status — feedback states
  'status-info': '#001F9D',
  'status-info-surface': '#E5EAFF',
  'status-success': '#2E7D32',
  'status-success-surface': '#E8F5E9',
  'status-warning': '#ED6C02',
  'status-warning-surface': '#FFF3E0',
  'status-danger': '#C62828',
  'status-danger-surface': '#FFEBEE',

  // Focus — used by all interactive components
  'focus-ring': '#1032CF',
} as const;

export type ColorToken = keyof typeof color;
