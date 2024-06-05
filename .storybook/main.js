/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // core: {
  //   builder: {
  //     name: '@storybook/builder-webpack5',
  //     options: {
  //       fsCache: true,
  //       lazyCompilation: true,
  //     },
  //   },
  // },
};
export default config;
