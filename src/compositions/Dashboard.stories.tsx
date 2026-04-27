import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav } from '../components/Nav';
import {
  Card,
  CardHeader,
  CardEyebrow,
  CardTitle,
  CardBody,
  CardFooter,
} from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const Dashboard = () => (
  <div style={{ minHeight: '100vh', background: 'var(--color-surface-canvas)' }}>
    <TopNav active="Plan" />
    <main style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px' }}>
      <header style={{ marginBottom: 40 }}>
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
          Velkommen tilbake
        </p>
        <h1
          style={{
            fontWeight: 900,
            fontSize: 40,
            lineHeight: '48px',
            letterSpacing: '-0.02em',
            margin: '8px 0 16px',
            color: 'var(--color-text-primary)',
          }}
        >
          Your plan is <span style={{ color: 'var(--color-action-primary)' }}>64%</span> complete.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: '28px',
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: 640,
          }}
        >
          Most people overlook digital assets — let's make sure yours are covered. We'll guide you, step by quiet step.
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          marginBottom: 32,
        }}
      >
        <Card elevation="raised">
          <CardHeader>
            <CardEyebrow>Assets · 7 items</CardEyebrow>
            <CardTitle>Property &amp; accounts</CardTitle>
          </CardHeader>
          <CardBody>
            Apartment in Frogner, two SBanken accounts, and your Vipps wallet are all linked.
          </CardBody>
          <CardFooter>
            <Badge tone="success">Up to date</Badge>
          </CardFooter>
        </Card>

        <Card elevation="raised">
          <CardHeader>
            <CardEyebrow>Documents · 3 of 4</CardEyebrow>
            <CardTitle>Will &amp; power of attorney</CardTitle>
          </CardHeader>
          <CardBody>
            Your will is drafted and reviewed. The healthcare directive is still in draft.
          </CardBody>
          <CardFooter>
            <Badge tone="warning">Needs attention</Badge>
          </CardFooter>
        </Card>

        <Card elevation="raised">
          <CardHeader>
            <CardEyebrow>Beneficiaries · 4 named</CardEyebrow>
            <CardTitle>People &amp; shares</CardTitle>
          </CardHeader>
          <CardBody>
            Sara, Aanya, your parents, and Stiftelsen Vi&nbsp;Bryr&nbsp;Oss are listed.
          </CardBody>
          <CardFooter>
            <Badge tone="info">In review</Badge>
          </CardFooter>
        </Card>
      </section>

      <Card elevation="raised" tone="authority" padding="spacious">
        <CardHeader>
          <CardEyebrow>Recommended next step</CardEyebrow>
          <CardTitle>Add your digital assets — 5 minutes</CardTitle>
        </CardHeader>
        <CardBody>
          Crypto, password managers, and online accounts are the most commonly forgotten part of an
          estate. Walk through ours together and you'll be done before your next coffee.
        </CardBody>
        <CardFooter>
          <Button variant="primary" size="large">
            Start the digital walkthrough
          </Button>
          <Button variant="ghost" size="large" style={{ color: 'var(--color-on-surface-authority)' }}>
            Maybe later
          </Button>
        </CardFooter>
      </Card>
    </main>
  </div>
);

const meta = {
  title: 'Compositions/Dashboard',
  component: Dashboard,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
