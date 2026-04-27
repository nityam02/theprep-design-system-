import type { Preview } from '@storybook/react-vite';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import '../src/styles/reset.css';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'editorial',
      values: [
        { name: 'editorial', value: '#FFF8F9' },
        { name: 'surface', value: '#FFFFFF' },
        { name: 'authority', value: '#001F9D' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Principles',
          'Foundations',
          ['Color', 'Typography', 'Spacing', 'Elevation', 'Motion'],
          'Voice & Tone',
          'Accessibility',
          'Components',
          ['Button', 'Card', 'Input', 'Badge', 'Stepper', 'Nav', 'ChatMessage', 'VoiceAssistant'],
          'Compositions',
          ['Dashboard', 'Intake', 'Lawyer Review', 'Voice Consult'],
        ],
      },
    },
  },
};

export default preview;
