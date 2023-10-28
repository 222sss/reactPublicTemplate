import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// 兼容低版本浏览器
import legacy from '@vitejs/plugin-legacy';

// 配置乾坤微前端
import qiankun from 'vite-plugin-qiankun';
const useDevMode = true; // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    qiankun('appSub1', { useDevMode }) // 当作为子应用事才需要，子应用名为主应用注册的名字
  ],
  base: './',
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  }
});
