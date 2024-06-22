import vercel from "vite-plugin-vercel";
import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = resolve(__dirname, ".");

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(root, "src"),
    },
  },
  plugins: [
    react({}),
    ssr({
      prerender: true,
    }),
    vercel(),
  ],
});
