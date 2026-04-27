import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './VoiceAssistant.module.css';

export type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking';

export interface VoiceAssistantProps extends HTMLAttributes<HTMLDivElement> {
  state?: VoiceState;
  size?: 'compact' | 'default' | 'hero';
  assistantName?: string;
  statusOverride?: string;
  transcript?: string;
  muted?: boolean;
  onMuteToggle?: () => void;
  onEnd?: () => void;
}

const STATUS_FOR_STATE: Record<VoiceState, string> = {
  idle: 'Tap to start',
  listening: 'Listening…',
  thinking: 'Thinking…',
  speaking: 'Speaking',
};

export const VoiceAssistant = forwardRef<HTMLDivElement, VoiceAssistantProps>(
  (
    {
      state = 'idle',
      size = 'default',
      assistantName = 'thePREP advisor',
      statusOverride,
      transcript,
      muted = false,
      onMuteToggle,
      onEnd,
      className,
      ...rest
    },
    ref,
  ) => {
    const status = statusOverride ?? STATUS_FOR_STATE[state];
    const isInteractive = state !== 'idle';

    return (
      <div
        ref={ref}
        className={clsx(styles.shell, styles[`size-${size}`], className)}
        role="region"
        aria-label={`Voice conversation with ${assistantName}`}
        {...rest}
      >
        <div className={clsx(styles.orb, styles[`state-${state}`])} aria-hidden="true">
          <div className={styles.halo} />
          <div className={styles.cloud} />
          <div className={styles.core} />
          <div className={styles.highlight} />
        </div>

        <div className={styles.meta}>
          <p className={styles.assistantName}>{assistantName}</p>
          <p className={styles.status} aria-live="polite">
            <span className={clsx(styles.statusDot, styles[`dot-${state}`])} aria-hidden="true" />
            {status}
          </p>
        </div>

        {transcript && (
          <p className={styles.transcript} aria-live="polite">
            {transcript}
          </p>
        )}

        {isInteractive && (
          <div className={styles.controls} role="group" aria-label="Voice controls">
            <button
              type="button"
              onClick={onMuteToggle}
              className={clsx(styles.control, muted && styles.controlMuted)}
              aria-label={muted ? 'Unmute microphone' : 'Mute microphone'}
              aria-pressed={muted}
            >
              {muted ? <MicMutedIcon /> : <MicIcon />}
            </button>
            <button
              type="button"
              onClick={onEnd}
              className={clsx(styles.control, styles.controlEnd)}
              aria-label="End conversation"
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    );
  },
);

VoiceAssistant.displayName = 'VoiceAssistant';

const MicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5 11a7 7 0 0 0 14 0M12 18v3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const MicMutedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5 11a7 7 0 0 0 14 0M12 18v3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
