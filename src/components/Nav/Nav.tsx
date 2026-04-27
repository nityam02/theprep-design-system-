import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Nav.module.css';

export interface TopNavProps extends HTMLAttributes<HTMLElement> {
  active?: string;
  items?: { label: string; href?: string }[];
  trailing?: ReactNode;
}

export const TopNav = ({
  active = 'Plan',
  items = [
    { label: 'Plan' },
    { label: 'Documents' },
    { label: 'Lawyers' },
    { label: 'Account' },
  ],
  trailing,
  className,
  ...rest
}: TopNavProps) => (
  <nav className={clsx(styles.topnav, className)} aria-label="Primary" {...rest}>
    <div className={styles.brand}>
      <span className={styles.brandMark} aria-hidden="true" />
      <span className={styles.brandWord}>thePREP</span>
    </div>
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href ?? '#'}
            className={clsx(styles.link, item.label === active && styles.linkActive)}
            aria-current={item.label === active ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.trailing}>
      {trailing ?? (
        <span className={styles.account} aria-label="Account menu">
          EH
        </span>
      )}
    </div>
  </nav>
);

export interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  children?: ReactNode;
}

export const SidebarNav = ({ title, children, className, ...rest }: SidebarNavProps) => (
  <aside className={clsx(styles.sidebar, className)} aria-label={title ?? 'Workflow'} {...rest}>
    {title && <h2 className={styles.sidebarTitle}>{title}</h2>}
    {children}
  </aside>
);
