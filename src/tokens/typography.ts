/**
 * Typography tokens — Inter family, role-based.
 * Each role pairs a weight, size, line-height, and tracking. Components
 * reference roles ("h2", "body", "label") never raw values.
 */
export const fontFamily = {
  base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
} as const;

export const typography = {
  display: {
    fontWeight: 900,
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.02em',
  },
  h1: {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.01em',
  },
  h3: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0',
  },
  subtitle: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
  },
  body: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
  },
  bodySmall: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0',
  },
  label: {
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
  caption: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.02em',
  },
} as const;

export type TypographyRole = keyof typeof typography;
