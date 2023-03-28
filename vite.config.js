import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  root: './src',
  base: './',
  build: {
    outDir: '../docs',
  },
  server: { open: true },
  host: '0.0.0.0'
})
