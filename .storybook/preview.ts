import type { Preview } from "@storybook/react";
import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import withAppRouterContext from '../app/provider/withAppRouterContext';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withAppRouterContext],
};

export default preview;
