import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Universal relative base ensures it works on any GitHub repository (e.g. CNSholiday, cns_s2s_holiday) or custom domain
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
