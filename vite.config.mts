import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When building for production (GitHub Pages), base is '/cns_s2s_holiday/'. In dev server, base is '/'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cns_s2s_holiday/' : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
}));
