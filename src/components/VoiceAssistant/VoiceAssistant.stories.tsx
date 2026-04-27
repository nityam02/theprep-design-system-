import type { Meta, StoryObj } from '@storybook/react-vite';
import { VoiceAssistant } from './VoiceAssistant';

const meta = {
  title: 'Components/VoiceAssistant',
  component: VoiceAssistant,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'editorial' },
    docs: {
      description: {
        component:
          'A voice-mode surface for talking with the AI advisor. The orb is composed of four animated layers — halo, cloud, core, highlight — each tied to a state token. Idle breathes; listening pulses; thinking rotates; speaking distorts organically.',
      },
    },
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['idle', 'listening', 'thinking', 'speaking'] },
    size: { control: 'inline-radio', options: ['compact', 'default', 'hero'] },
    muted: { control: 'boolean' },
    assistantName: { control: 'text' },
    transcript: { control: 'text' },
  },
  args: {
    state: 'listening',
    size: 'default',
    assistantName: 'thePREP advisor',
    muted: false,
  },
} satisfies Meta<typeof VoiceAssistant>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = { args: { state: 'idle' } };

export const Listening: Story = {
  args: {
    state: 'listening',
    transcript: '"…and I want my apartment in Frogner to go to my partner."',
  },
};

export const Thinking: Story = { args: { state: 'thinking' } };

export const Speaking: Story = {
  args: {
    state: 'speaking',
    assistantName: 'Maria, AI legal assistant',
    transcript: 'Got it. Norwegian inheritance law gives your partner an automatic share — let me show you what that looks like.',
  },
};

export const Muted: Story = {
  args: { state: 'listening', muted: true, transcript: 'Microphone is muted' },
};

export const Hero: Story = {
  args: { state: 'speaking', size: 'hero' },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (S) => (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-surface-canvas)',
        }}
      >
        <S />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: { state: 'listening', size: 'compact' },
};

export const AllStates: Story = {
  parameters: { layout: 'fullscreen' },
  decorators: [
    (S) => (
      <div style={{ padding: 48, background: 'var(--color-surface-canvas)' }}>
        <S />
      </div>
    ),
  ],
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 32,
        maxWidth: 880,
        margin: '0 auto',
      }}
    >
      <VoiceAssistant size="compact" state="idle" />
      <VoiceAssistant size="compact" state="listening" />
      <VoiceAssistant size="compact" state="thinking" />
      <VoiceAssistant size="compact" state="speaking" />
    </div>
  ),
};
