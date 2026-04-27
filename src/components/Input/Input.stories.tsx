import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single-line text input. Validation states are signaled in the border, never with red stripes or alarmed iconography — feedback should feel helpful, not punitive.',
      },
    },
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'success', 'error'] },
    optional: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Full legal name',
    placeholder: 'Erik Holm',
    helperText: 'As it appears on your passport.',
    state: 'default',
  },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = { args: { defaultValue: 'Erik Holm' } };

export const Optional: Story = {
  args: { label: 'Middle name', optional: true, helperText: undefined, placeholder: 'Optional' },
};

export const Success: Story = {
  args: { state: 'success', defaultValue: 'maria@advokat.no', helperText: 'Looks good.' },
};

export const Error: Story = {
  args: {
    state: 'error',
    defaultValue: 'maria@',
    helperText: 'Enter a complete email address.',
  },
};

export const Disabled: Story = { args: { disabled: true, defaultValue: '–' } };
