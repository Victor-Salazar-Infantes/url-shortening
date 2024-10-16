import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://victor-msi.github.io/url-shortening/',
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'], // Ajustando los formatos según los que uses
})
