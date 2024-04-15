import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "@ピザ",
    host_permissions: ["*://*.nicovideo.jp/*"],
    permissions: ["activeTab", "background"],
    browser_specific_settings: {
      gecko: {
        id: "at-pizza-nico@hidaka.dev",
      },
    },
  },
  vite: () => ({
    plugins: [react()],
  }),
});
