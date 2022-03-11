import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@interfaces', replacement: path.resolve(__dirname, './src/interfaces') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      // { find: '@views', replacement: path.resolve(__dirname, './src/views') },
      // { find: '@mixins', replacement: path.resolve(__dirname, './src/mixins') },
      // { find: '@svg', replacement: path.resolve(__dirname, './src/svg') },
      // { find: '@models', replacement: path.resolve(__dirname, './src/models') },
      // { find: '@components', replacement: path.resolve(__dirname, './src/components') },
    ]
  }
})
