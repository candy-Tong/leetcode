import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { qfDeploy } from '@tencent/vite-plugin-qf-deploy';
import WindiCSS from 'vite-plugin-windicss';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    createVuePlugin(),
    vueJsx(),
    svgLoader(),
    qfDeploy({
      appId: 'aml-tianyuan-web',
    }),
    WindiCSS(),
  ],

  server: {
    port: 3002,
    https: true,
  },
});
