import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

type Elevation = 'flat' | 'raised' | 'overlay';
type Tone = 'default' | 'authority' | 'subtle';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: Elevation;
  tone?: Tone;
  padding?: 'compact' | 'default' | 'spacious';
  asChild?: boolean;
  children?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { elevation = 'raised', tone = 'default', padding = 'default', className, children, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx(
        styles.card,
        styles[`elevation-${elevation}`],
        styles[`tone-${tone}`],
        styles[`padding-${padding}`],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);
Card.displayName = 'Card';

export const CardHeader = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.header, className)} {...rest} />
);

export const CardTitle = ({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={clsx(styles.title, className)} {...rest} />
);

export const CardEyebrow = ({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) => (
  <span className={clsx(styles.eyebrow, className)} {...rest} />
);

export const CardBody = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.body, className)} {...rest} />
);

export const CardFooter = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.footer, className)} {...rest} />
);
