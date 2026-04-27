import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary interaction surface. Variant communicates intent (primary, secondary, ghost, destructive); size signals hierarchy in the layout.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: { control: 'inline-radio', options: ['medium', 'large'] },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Save and continue',
    variant: 'primary',
    size: 'medium',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: 'secondary', children: 'Save draft' } };

export const Ghost: Story = { args: { variant: 'ghost', children: 'Cancel' } };

export const Destructive: Story = { args: { variant: 'destructive', children: 'Delete will' } };

export const Large: Story = { args: { size: 'large' } };

export const Loading: Story = { args: { isLoading: true } };

export const Disabled: Story = { args: { disabled: true } };

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
