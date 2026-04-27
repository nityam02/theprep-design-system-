import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  decorators: [(S) => <div style={{ width: 280, padding: 24, background: 'var(--color-surface-canvas)' }}><S /></div>],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IntakeFlow: Story = {
  args: {
    steps: [
      { label: 'Asset type', description: 'Property, account, item', status: 'done' },
      { label: 'Details', description: 'Identifying info', status: 'current' },
      { label: 'Beneficiary', description: 'Who inherits', status: 'upcoming' },
      { label: 'Review', description: 'Confirm and save', status: 'upcoming' },
    ],
  },
};

export const FreshStart: Story = {
  args: {
    steps: [
      { label: 'About you', status: 'current' },
      { label: 'Family', status: 'upcoming' },
      { label: 'Assets', status: 'upcoming' },
      { label: 'Wishes', status: 'upcoming' },
    ],
  },
};

export const NearComplete: Story = {
  args: {
    steps: [
      { label: 'About you', status: 'done' },
      { label: 'Family', status: 'done' },
      { label: 'Assets', status: 'done' },
      { label: 'Wishes', status: 'current' },
    ],
  },
};
