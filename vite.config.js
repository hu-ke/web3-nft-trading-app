import { defineConfig } from 'vite'
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // visualizer({
    //   filename: 'dist/bundle-analysis.html', // 生成报告的文件名和路径
    //   open: true // 构建完成后自动打开报告
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
