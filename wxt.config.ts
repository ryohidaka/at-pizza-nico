import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    host_permissions: ["*://*.nicovideo.jp/*"],
    permissions: ["activeTab", "background"],
  },
  vite: () => ({
    plugins: [react()],
  }),
});
