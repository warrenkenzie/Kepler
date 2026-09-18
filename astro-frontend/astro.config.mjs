// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      WEBSITE_URL: envField.string({
        context: "server",
        access: "public",
        url: true,
      }),
      CMS_URL: envField.string({
        context: "server",
        access: "secret",
        url: true,
      }),
      CMS_API_SECRET: envField.string({ context: "server", access: "secret" }),
      PORT: envField.number({
        context: "server",
        access: "public",
        default: 4321,
      }),
    },
  },
});
