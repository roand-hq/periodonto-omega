import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'), // Entrada del componente
      name: 'Periodontograma',
      fileName: (format) => `Periodontograma.${format}.js`, // Genera .js y .umd.js
      formats: ['es', 'umd'], // Formatos de salida (ES y UMD)
    },
    cssCodeSplit: true, // Divide el CSS en módulos si es necesario
    rollupOptions: {
      // Excluir react y react-dom del bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM', // Usado en entorno global
        },
      },
    },
  },
});
