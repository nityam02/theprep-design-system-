import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Stepper.module.css';

export type StepStatus = 'done' | 'current' | 'upcoming';

export interface Step {
  label: string;
  description?: string;
  status: StepStatus;
}

export interface StepperProps extends HTMLAttributes<HTMLOListElement> {
  steps: Step[];
}

export const Stepper = ({ steps, className, ...rest }: StepperProps) => (
  <ol className={clsx(styles.list, className)} aria-label="Progress" {...rest}>
    {steps.map((step, i) => (
      <li
        key={i}
        className={clsx(styles.step, styles[`status-${step.status}`])}
        aria-current={step.status === 'current' ? 'step' : undefined}
      >
        <div className={styles.indicator}>
          <div className={styles.dot}>
            {step.status === 'done' ? (
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M2.5 6L5 8.5L9.5 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span className={styles.number}>{i + 1}</span>
            )}
          </div>
          {i < steps.length - 1 && <div className={styles.line} aria-hidden="true" />}
        </div>
        <div className={styles.content}>
          <p className={styles.label}>{step.label}</p>
          {step.description && <p className={styles.description}>{step.description}</p>}
        </div>
      </li>
    ))}
  </ol>
);
