import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav, SidebarNav } from './Nav';
import { Stepper } from '../Stepper';

const meta = {
  title: 'Components/Nav',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  render: () => <TopNav />,
};

export const TopOnDocuments: Story = {
  render: () => <TopNav active="Documents" />,
};

export const Sidebar: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: 480, background: 'var(--color-surface-canvas)' }}>
      <SidebarNav title="Add an asset">
        <Stepper
          steps={[
            { label: 'Asset type', status: 'done' },
            { label: 'Details', status: 'current' },
            { label: 'Beneficiary', status: 'upcoming' },
            { label: 'Review', status: 'upcoming' },
          ]}
        />
      </SidebarNav>
      <div style={{ flex: 1, padding: 32 }}>Workspace area</div>
    </div>
  ),
};
