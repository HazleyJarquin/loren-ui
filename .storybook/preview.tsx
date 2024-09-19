import React from "react";
import type { Preview } from "@storybook/react";
import { PaperProvider } from "react-native-paper";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <PaperProvider>
        <Story />
      </PaperProvider>
    ),
  ],
};

export default preview;
