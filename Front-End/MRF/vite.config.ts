import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    react(),
    checker({ typescript: true, overlay: false }),          // Verifica errores de TypeScript
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      plugins: [
        typescript({
          tsconfig: './tsconfig.json',                      // Especificar el archivo de configuración de TypeScript
          outputToFilesystem: true,                         // Habilitar escritura en disco
        }),
      ],
    },
    outDir: 'dist',                                         // Cambia el directorio de salida principal
    sourcemap: true,                                        // Generar mapas de origen
  },
  server: {
    open: true,                                             // Abrir automáticamente en el navegador
    port: 4173,                                             // Puerto del servidor de desarrollo
    strictPort: true,                                       // Reservar el puerto; si está ocupado, mostrar error
    hmr: {
      overlay: true,
    },
  }, 
  base: './',
});
