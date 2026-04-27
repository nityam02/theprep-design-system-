import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav } from '../components/Nav';
import { VoiceAssistant } from '../components/VoiceAssistant';
import type { VoiceState } from '../components/VoiceAssistant';
import { Badge } from '../components/Badge';
import { Card, CardEyebrow, CardTitle, CardBody } from '../components/Card';

const SCRIPT: { state: VoiceState; transcript?: string; hold: number }[] = [
  { state: 'idle', hold: 1500 },
  { state: 'listening', transcript: '"What happens to my apartment if I die without a will?"', hold: 4500 },
  { state: 'thinking', hold: 2000 },
  {
    state: 'speaking',
    transcript:
      "Norwegian law gives your spouse a quarter and your children three-quarters by default. If you'd like to leave more to your partner, we can write that into your will now.",
    hold: 6000,
  },
  { state: 'listening', transcript: '"Yes — let\'s do that."', hold: 3500 },
];

const VoiceConsult = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setStep((s) => (s + 1) % SCRIPT.length), SCRIPT[step].hold);
    return () => clearTimeout(t);
  }, [step]);

  const current = SCRIPT[step];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-surface-canvas)', display: 'flex', flexDirection: 'column' }}>
      <TopNav active="Plan" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', flex: 1, minHeight: 0 }}>
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 32px',
            gap: 24,
          }}
        >
          <header style={{ textAlign: 'center', maxWidth: 560 }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              Voice consult · Norwegian inheritance law
            </p>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '40px',
                letterSpacing: '-0.01em',
                margin: '8px 0 0',
                color: 'var(--color-text-primary)',
              }}
            >
              Talk it through.
            </h1>
          </header>

          <VoiceAssistant
            size="hero"
            state={current.state}
            transcript={current.transcript}
            assistantName="Maria, AI legal assistant"
            onMuteToggle={() => undefined}
            onEnd={() => undefined}
          />

          <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: 0, maxWidth: 480, textAlign: 'center' }}>
            Conversations are summarised into your draft. A licensed advokat reviews everything before signing.
          </p>
        </main>

        <aside
          style={{
            borderLeft: '1px solid var(--color-border-subtle)',
            background: 'var(--color-surface-default)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            overflowY: 'auto',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              Live summary
            </p>
            <p style={{ fontSize: 16, lineHeight: '24px', color: 'var(--color-text-primary)', margin: '8px 0 0' }}>
              You're exploring inheritance defaults under Norwegian law and considering an explicit
              clause for your partner.
            </p>
          </div>

          <Card elevation="flat" padding="default">
            <CardEyebrow>Topics covered</CardEyebrow>
            <CardTitle style={{ fontSize: 16 }}>So far in this call</CardTitle>
            <CardBody>
              <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: '22px', color: 'var(--color-text-secondary)' }}>
                <li>Default inheritance shares (spouse vs. children)</li>
                <li>Apartment in Frogner — primary residence</li>
                <li>Custom clause for partner protection</li>
              </ul>
            </CardBody>
          </Card>

          <Card elevation="flat" padding="default">
            <CardEyebrow>Suggested next</CardEyebrow>
            <CardTitle style={{ fontSize: 16 }}>Add a partner clause to draft</CardTitle>
            <CardBody>
              Maria can draft this clause for review by an advokat before you sign.
            </CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <Badge tone="info">Will be reviewed</Badge>
            </div>
          </Card>

          <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)', lineHeight: '18px', margin: 0 }}>
            Voice is processed locally where possible. No audio is stored after the conversation
            ends.
          </p>
        </aside>
      </div>
    </div>
  );
};

const meta = {
  title: 'Compositions/Voice Consult',
  component: VoiceConsult,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof VoiceConsult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
