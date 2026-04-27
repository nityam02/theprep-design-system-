/**
 * Motion tokens — duration + easing, treated as a systemic language.
 * Components compose: `transition: color var(--duration-fast) var(--easing-standard);`
 * All transitions defined in this system are wrapped with `prefers-reduced-motion`
 * in `global.css` so they no-op for users who request reduced motion.
 */
export const motion = {
  duration: {
    instant: '80ms',
    fast: '120ms',
    base: '200ms',
    slow: '320ms',
    deliberate: '480ms',
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasized: 'cubic-bezier(0.3, 0, 0.1, 1)',
    decelerate: 'cubic-bezier(0, 0, 0, 1)',
    accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
  },
} as const;

export type MotionDuration = keyof typeof motion.duration;
export type MotionEasing = keyof typeof motion.easing;
