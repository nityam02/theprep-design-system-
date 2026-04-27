import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

type Tone = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  children: ReactNode;
}

export const Badge = ({ tone = 'neutral', className, children, ...rest }: BadgeProps) => (
  <span className={clsx(styles.badge, styles[`tone-${tone}`], className)} {...rest}>
    <span className={styles.dot} aria-hidden="true" />
    {children}
  </span>
);
