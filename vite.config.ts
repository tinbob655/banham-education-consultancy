import {defineConfig} from 'vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import {visualizer} from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    visualizer({open: true}),
    babel({ presets: [reactCompilerPreset()] }),
  ],

  server: {
    port: 3000,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'vendor-react';
          }
          if (id.includes('firebase')) {
            return 'vendor-firebase';
          }
        }
      }
    }
  },
})
