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
      // { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@interfaces', replacement: path.resolve(__dirname, './src/interfaces') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@databases', replacement: path.resolve(__dirname, './src/databases') },
      { find: '@store', replacement: path.resolve(__dirname, './src/redux') },
      { find: '@managers', replacement: path.resolve(__dirname, './src/modules/managers') },
      { find: '@manager-components', replacement: path.resolve(__dirname, './src/modules/managers/components') },
      { find: '@users', replacement: path.resolve(__dirname, './src/modules/users') },
      { find: '@user-components', replacement: path.resolve(__dirname, './src/modules/users/components') },
    ]
  }
})
