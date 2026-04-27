/**
 * Elevation tokens — pair shadow with surface tint to create dimensional layering.
 * Three roles only: flat (no lift), raised (cards), overlay (modals, popovers).
 * Each role specifies *both* what shadow to use and which surface color to layer on.
 */
export const elevation = {
  flat: {
    shadow: 'none',
    surface: 'var(--color-surface-default)',
  },
  raised: {
    shadow: '0 1px 2px rgba(26, 22, 24, 0.04), 0 4px 12px rgba(26, 22, 24, 0.06)',
    surface: 'var(--color-surface-default)',
  },
  overlay: {
    shadow: '0 4px 8px rgba(26, 22, 24, 0.08), 0 16px 40px rgba(26, 22, 24, 0.12)',
    surface: 'var(--color-surface-default)',
  },
} as const;

export type ElevationRole = keyof typeof elevation;
