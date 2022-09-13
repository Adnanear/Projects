import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import * as fs from 'fs';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      ...(mode === 'development'
        ? {
            https: {
              key: fs.readFileSync('./.cert/localhost-key.pem'),
              cert: fs.readFileSync('./.cert/localhost.pem'),
            },
          }
        : {}),
    },
    plugins: [
      react(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
      checker({ typescript: true }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  };
});
