import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  optimizeDeps: {
    exclude: ['lucide-react'], // Ensure this library isn't auto-optimized if not required
  },
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // If you use global SCSS, you can add global imports here
        additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`,
      },
    },
  },
  resolve: {
    alias: {
      // Optional: Create aliases for easier imports
      '@': '/src',
    },
  },
});
