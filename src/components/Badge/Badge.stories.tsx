import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['info', 'success', 'warning', 'danger', 'neutral'] },
  },
  args: { tone: 'info', children: 'In review' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { tone: 'success', children: 'Completed' } };
export const Warning: Story = { args: { tone: 'warning', children: 'Needs attention' } };
export const Danger: Story = { args: { tone: 'danger', children: 'Expired' } };

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="info">In review</Badge>
      <Badge tone="success">Completed</Badge>
      <Badge tone="warning">Needs attention</Badge>
      <Badge tone="danger">Expired</Badge>
      <Badge tone="neutral">Draft</Badge>
    </div>
  ),
};
