import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: '@storybook/react-vite',

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  core: {
    disableWhatsNewNotifications: true
  }
};
export default config;
