import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Include the directory where your Sass files are located
        // includePaths: ['./src/sass'],
        // additionalData: `@import './src/sass/style.scss';`, // Adjust as needed
        includePaths: ['./src/sass'], // Ensure paths are correct
      },
    },
  },
})
