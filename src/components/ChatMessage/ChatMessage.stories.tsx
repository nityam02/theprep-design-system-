import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatMessage } from './ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: { layout: 'centered' },
  decorators: [(S) => <div style={{ width: 460 }}><S /></div>],
};

export default meta;
type Story = StoryObj<typeof ChatMessage>;

export const Lawyer: Story = {
  args: {
    author: 'lawyer',
    authorName: 'Maria Olsen',
    authorMeta: 'advokat · MNA',
    timestamp: '14:02',
    pinNumber: 3,
    children:
      "I've added a clarification to clause 3 about your digital assets — make sure your password manager beneficiaries are listed too.",
  },
};

export const User: Story = {
  args: {
    author: 'user',
    authorName: 'Erik Holm',
    timestamp: '14:08',
    pinNumber: 3,
    children: 'Got it — adding 1Password and my GitHub account as digital assets now.',
  },
};

export const System: Story = {
  args: {
    author: 'system',
    authorName: 'thePREP',
    timestamp: '14:15',
    children: 'Maria has signed off on this clause.',
  },
};

export const Thread: Story = {
  parameters: { layout: 'padded' },
  decorators: [(S) => <div style={{ width: 460 }}><S /></div>],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ChatMessage
        author="lawyer"
        authorName="Maria Olsen"
        authorMeta="advokat · MNA"
        timestamp="14:02"
        pinNumber={3}
      >
        I've added a clarification to clause 3 about your digital assets — make sure your password manager beneficiaries are listed too.
      </ChatMessage>
      <ChatMessage author="user" authorName="Erik Holm" timestamp="14:08" pinNumber={3}>
        Got it — adding 1Password and my GitHub account as digital assets now.
      </ChatMessage>
      <ChatMessage author="system" authorName="thePREP" timestamp="14:15">
        Maria has signed off on this clause.
      </ChatMessage>
    </div>
  ),
};
