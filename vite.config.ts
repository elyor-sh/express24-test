import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(
        {
          babel: {
            parserOpts: {
              plugins: ['decorators-legacy', 'classProperties']
            }
          }
        }
    ),
  ],
  server: {
    port: 3000
  },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
