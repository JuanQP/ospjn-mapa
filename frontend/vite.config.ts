import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default ()  => {
  return defineConfig({
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src')},
        { find: '@components', replacement: path.resolve(__dirname, './src/components')},
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001/',
          changeOrigin: true,
          secure: false,
        }
      }
    },
    plugins: [react()],
  });

}
