import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theprepTheme = create({
  base: 'light',
  brandTitle: 'thePREP — Design System',
  brandUrl: 'https://theprep.no',
  brandTarget: '_self',

  colorPrimary: '#1032CF',
  colorSecondary: '#001F9D',

  appBg: '#FFF8F9',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFF8F9',
  appBorderColor: '#FFE8F2',
  appBorderRadius: 8,

  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, monospace',

  textColor: '#1A1618',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#765568',

  barTextColor: '#765568',
  barSelectedColor: '#1032CF',
  barHoverColor: '#001F9D',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: '#FFE8F2',
  inputTextColor: '#1A1618',
  inputBorderRadius: 4,
});

addons.setConfig({ theme: theprepTheme });
