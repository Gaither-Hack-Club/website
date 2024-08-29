import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  redirects: {
    "/adventure": "https://adventure.samuel.hackclub.app",
  },
});
