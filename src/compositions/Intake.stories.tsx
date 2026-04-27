import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav, SidebarNav } from '../components/Nav';
import { Stepper } from '../components/Stepper';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card, CardHeader, CardEyebrow, CardTitle, CardBody } from '../components/Card';

const Intake = () => (
  <div style={{ minHeight: '100vh', background: 'var(--color-surface-canvas)', display: 'flex', flexDirection: 'column' }}>
    <TopNav active="Plan" />
    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 320px', flex: 1 }}>
      <SidebarNav title="Add an asset">
        <Stepper
          steps={[
            { label: 'Asset type', description: 'Property, account, item', status: 'done' },
            { label: 'Details', description: 'Identifying info', status: 'current' },
            { label: 'Beneficiary', description: 'Who inherits', status: 'upcoming' },
            { label: 'Review', description: 'Confirm and save', status: 'upcoming' },
          ]}
        />
      </SidebarNav>

      <main style={{ padding: '48px 64px', maxWidth: 720 }}>
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
          Step 2 of 4 · Details
        </p>
        <h1
          style={{
            fontWeight: 700,
            fontSize: 32,
            lineHeight: '40px',
            letterSpacing: '-0.01em',
            margin: '8px 0 12px',
            color: 'var(--color-text-primary)',
          }}
        >
          Tell us about this digital asset.
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: '24px',
            color: 'var(--color-text-secondary)',
            margin: '0 0 32px',
          }}
        >
          One thing at a time. You can edit anything later.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
          <Input
            label="Account or asset name"
            placeholder="e.g. 1Password"
            defaultValue="1Password"
            helperText="A name only you need to recognise."
          />
          <Input
            label="Where it lives"
            placeholder="e.g. 1password.com"
            defaultValue="1password.com"
            helperText="A URL or app name. We won't store credentials."
          />
          <Input
            label="Anything else worth knowing"
            placeholder="Recovery key is in the safe…"
            optional
          />
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="primary" size="large">Save and continue</Button>
          <Button variant="ghost" size="large">Save draft</Button>
        </div>
      </main>

      <aside style={{ padding: 32, borderLeft: '1px solid var(--color-border-subtle)' }}>
        <Card elevation="flat" padding="default">
          <CardHeader>
            <CardEyebrow>Helpful context</CardEyebrow>
            <CardTitle>What counts as a digital asset?</CardTitle>
          </CardHeader>
          <CardBody>
            Anything online that has personal or financial value: password managers, cloud backups,
            crypto wallets, social profiles, even loyalty points worth recovering.
          </CardBody>
        </Card>
      </aside>
    </div>
  </div>
);

const meta = {
  title: 'Compositions/Intake',
  component: Intake,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Intake>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
