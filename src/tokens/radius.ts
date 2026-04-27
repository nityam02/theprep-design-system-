/**
 * Corner radius tokens.
 * Components reference roles ("control", "card", "section"), never raw values.
 */
export const radius = {
  none: '0',
  control: '4px',
  card: '8px',
  section: '16px',
  pill: '9999px',
} as const;

export type RadiusToken = keyof typeof radius;
