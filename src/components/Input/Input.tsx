import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

type State = 'default' | 'success' | 'error';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  helperText?: string;
  state?: State;
  optional?: boolean;
  leadingAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, helperText, state = 'default', optional, leadingAdornment, id, className, ...rest },
    ref,
  ) => {
    const reactId = useId();
    const inputId = id ?? reactId;
    const helperId = `${inputId}-helper`;
    const isError = state === 'error';

    return (
      <div className={clsx(styles.field, className)}>
        <label htmlFor={inputId} className={styles.label}>
          <span>{label}</span>
          {optional && <span className={styles.optional}>Optional</span>}
        </label>
        <div className={clsx(styles.shell, styles[`state-${state}`])}>
          {leadingAdornment && <span className={styles.adornment}>{leadingAdornment}</span>}
          <input
            ref={ref}
            id={inputId}
            className={styles.input}
            aria-describedby={helperText ? helperId : undefined}
            aria-invalid={isError || undefined}
            {...rest}
          />
        </div>
        {helperText && (
          <p id={helperId} className={clsx(styles.helper, styles[`helper-${state}`])}>
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
