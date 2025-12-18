import path from "path"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { dest: ".", src: "manifest.json" },
        { dest: ".", src: "devtools.html" },
        { dest: ".", src: "src/main.js" },
      ],
    }),
  ],
  resolve: {
    alias: {
      "#library": path.resolve(__dirname, "./src/library"),
    },
  },
})
