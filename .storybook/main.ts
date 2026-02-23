import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    //'../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
};

export default config;
