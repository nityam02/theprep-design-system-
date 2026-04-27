import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav } from '../components/Nav';
import { ChatMessage } from '../components/ChatMessage';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const Pin = ({ n }: { n: number }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 600,
      background: 'var(--color-action-primary)',
      color: 'var(--color-on-action-primary)',
      verticalAlign: 'middle',
      margin: '0 4px',
    }}
  >
    {n}
  </span>
);

const LawyerReview = () => (
  <div style={{ minHeight: '100vh', background: 'var(--color-surface-canvas)', display: 'flex', flexDirection: 'column' }}>
    <TopNav active="Lawyers" />
    <header style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-default)' }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', margin: 0 }}>
          Lawyer review
        </p>
        <h1 style={{ fontWeight: 700, fontSize: 24, lineHeight: '32px', margin: '4px 0 0' }}>
          Last will and testament
        </h1>
      </div>
      <Badge tone="info">In review</Badge>
      <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
        Reviewed by <strong style={{ color: 'var(--color-text-primary)' }}>Maria Olsen</strong>, advokat
      </span>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', flex: 1, minHeight: 0 }}>
      <section style={{ padding: '32px 40px', overflowY: 'auto', borderRight: '1px solid var(--color-border-subtle)' }}>
        <p style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', margin: '0 0 16px' }}>
          Draft · v3 · Updated 14:01
        </p>

        <h2 style={{ fontWeight: 700, fontSize: 20, margin: '0 0 12px' }}>Clause 1 — Identification</h2>
        <p style={{ fontSize: 16, lineHeight: '28px', color: 'var(--color-text-primary)', margin: '0 0 24px' }}>
          I, <strong>Erik Holm</strong>, born 14 February 1991, residing at Bygdøy allé 3, 0257 Oslo, declare this to be my last will and testament.<Pin n={1} />
        </p>

        <h2 style={{ fontWeight: 700, fontSize: 20, margin: '0 0 12px' }}>Clause 2 — Distribution of estate</h2>
        <p style={{ fontSize: 16, lineHeight: '28px', color: 'var(--color-text-primary)', margin: '0 0 24px' }}>
          My estate, both physical and digital, shall be distributed as follows: 50% to my partner, 25% to each of my parents, with the residual portion donated to <em>Stiftelsen Vi Bryr Oss</em>.<Pin n={2} />
        </p>

        <h2 style={{ fontWeight: 700, fontSize: 20, margin: '0 0 12px' }}>Clause 3 — Digital assets</h2>
        <p style={{ fontSize: 16, lineHeight: '28px', color: 'var(--color-text-primary)', margin: 0 }}>
          All accounts listed in my thePREP digital ledger — including password managers, cryptocurrency wallets, and cloud backups — shall be transferred to my designated digital executor for distribution per the attached schedule.<Pin n={3} />
        </p>
      </section>

      <aside style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div style={{ padding: 24, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ChatMessage author="lawyer" authorName="Maria Olsen" authorMeta="advokat · MNA" timestamp="13:48" pinNumber={1}>
            Quick legal note: include your full national ID number here for the document to be admissible. We'll never display it elsewhere.
          </ChatMessage>
          <ChatMessage author="user" authorName="Erik Holm" timestamp="13:52" pinNumber={1}>
            Got it — adding it now.
          </ChatMessage>
          <ChatMessage author="system" authorName="thePREP" timestamp="13:53">
            Maria has signed off on Clause 1.
          </ChatMessage>

          <ChatMessage author="lawyer" authorName="Maria Olsen" authorMeta="advokat · MNA" timestamp="14:00" pinNumber={3}>
            I've added a clarification to Clause 3 about your digital assets. Make sure your password manager beneficiaries are listed in the schedule too.
          </ChatMessage>
          <ChatMessage author="user" authorName="Erik Holm" timestamp="14:02" pinNumber={3}>
            Adding 1Password and my GitHub account as digital assets now.
          </ChatMessage>
        </div>

        <div style={{ padding: 16, borderTop: '1px solid var(--color-border-subtle)', background: 'var(--color-surface-default)', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <Input label="Reply to Maria" placeholder="Type your reply…" />
          </div>
          <Button variant="primary">Send</Button>
        </div>
      </aside>
    </div>
  </div>
);

const meta = {
  title: 'Compositions/Lawyer Review',
  component: LawyerReview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof LawyerReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
