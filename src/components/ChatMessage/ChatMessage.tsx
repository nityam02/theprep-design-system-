import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './ChatMessage.module.css';

type Author = 'lawyer' | 'user' | 'system';

export interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {
  author: Author;
  authorName: string;
  authorMeta?: string;
  timestamp: string;
  children: ReactNode;
  pinNumber?: number;
}

export const ChatMessage = ({
  author,
  authorName,
  authorMeta,
  timestamp,
  pinNumber,
  className,
  children,
  ...rest
}: ChatMessageProps) => (
  <article
    className={clsx(styles.message, styles[`author-${author}`], className)}
    aria-label={`Message from ${authorName}`}
    {...rest}
  >
    <header className={styles.header}>
      <span className={styles.avatar} aria-hidden="true">
        {authorName
          .split(' ')
          .map((s) => s[0])
          .slice(0, 2)
          .join('')}
      </span>
      <div className={styles.meta}>
        <span className={styles.name}>{authorName}</span>
        {authorMeta && <span className={styles.metaSecondary}>{authorMeta}</span>}
      </div>
      {pinNumber !== undefined && (
        <span className={styles.pin} aria-label={`Annotation ${pinNumber}`}>
          {pinNumber}
        </span>
      )}
      <time className={styles.time}>{timestamp}</time>
    </header>
    <div className={styles.body}>{children}</div>
  </article>
);
