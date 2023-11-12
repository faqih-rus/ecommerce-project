import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    root: ['./src', './dist'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/dist/css/main.scss";`,
      },
    },
 },
})
