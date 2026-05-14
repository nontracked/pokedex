import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)) // lk
    }
  },
  css: {
    modules: {
      // Поведение CSS-модулей (используется редко, но пусть будет)
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Автоматически подключаем helpers во все SCSS-файлы
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        // Убираем варнинги от старого API
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  }
})
