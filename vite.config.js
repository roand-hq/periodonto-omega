import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Entrada al componente (asegurate que este archivo exista)
      entry: path.resolve(__dirname, 'index.js'),
      name: 'Periodontograma',
      fileName: (format) => `Periodontograma.${format}.cjs`, // genera .js y .umd.cjs
      formats: ['es', 'umd']
    },
    cssCodeSplit: true,
    rollupOptions: {
      // No incluir react y react-dom en el bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});