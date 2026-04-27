import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardEyebrow, CardTitle, CardBody, CardFooter } from './Card';
import { Button } from '../Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A content vessel. Elevation expresses layering (flat / raised / overlay); tone establishes surface authority.',
      },
    },
  },
  argTypes: {
    elevation: { control: 'inline-radio', options: ['flat', 'raised', 'overlay'] },
    tone: { control: 'inline-radio', options: ['default', 'authority', 'subtle'] },
    padding: { control: 'inline-radio', options: ['compact', 'default', 'spacious'] },
  },
  args: { elevation: 'raised', tone: 'default', padding: 'default' },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderDocumentCard: Story['render'] = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardEyebrow>Documents</CardEyebrow>
      <CardTitle>Last will and testament</CardTitle>
    </CardHeader>
    <CardBody>Drafted on April 12. Reviewed by Maria Olsen, advokat.</CardBody>
    <CardFooter>
      <Button variant="primary">Open</Button>
      <Button variant="ghost">Share</Button>
    </CardFooter>
  </Card>
);

export const Default: Story = { render: renderDocumentCard };

export const Authority: Story = {
  args: { tone: 'authority' },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardEyebrow>Lawyer review</CardEyebrow>
        <CardTitle>Maria left a comment</CardTitle>
      </CardHeader>
      <CardBody>
        "I've added clarification to clause 3 about digital assets. Have a look when you can."
      </CardBody>
    </Card>
  ),
};

export const Flat: Story = { args: { elevation: 'flat' }, render: renderDocumentCard };

export const Overlay: Story = {
  args: { elevation: 'overlay' },
  render: (args) => (
    <Card {...args}>
      <CardHeader><CardTitle>Confirm deletion</CardTitle></CardHeader>
      <CardBody>This action can't be undone.</CardBody>
      <CardFooter>
        <Button variant="destructive">Delete</Button>
        <Button variant="ghost">Keep</Button>
      </CardFooter>
    </Card>
  ),
};
