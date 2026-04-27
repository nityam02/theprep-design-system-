/**
 * Spacing tokens — built on an 8px grid.
 * Every gap, padding, and margin in the system resolves to one of these.
 * Half-step (4px) exists only for inline icon/text alignment.
 */
export const spacing = {
  '0': '0',
  '0.5': '4px',
  '1': '8px',
  '1.5': '12px',
  '2': '16px',
  '3': '24px',
  '4': '32px',
  '5': '40px',
  '6': '48px',
  '8': '64px',
  '10': '80px',
  '12': '96px',
  '16': '128px',
} as const;

export type SpacingToken = keyof typeof spacing;
