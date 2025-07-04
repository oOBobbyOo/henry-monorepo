import type { BuildEnvironmentOptions } from 'vite'

// @see https://cn.vite.dev/config/build-options.html
export function setupBuildConfig(): BuildEnvironmentOptions {
  return {
    outDir: 'dist', // 指定打包输出目录，默认'dist'
    assetsDir: 'assets', // 指定静态资源存放目录，默认'assets'
    minify: 'terser', // 压缩工具：'esbuild' | 'terser' | false，默认 'esbuild' 很快
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-venders': ['vue', 'vue-router', '@vueuse/core', 'pinia'],
          'vue-lib-venders': ['vue-i18n', 'vue3-count-to', 'vue3-emoji-picker'],
          'lib-venders': ['@better-scroll/core', 'js-calendar-converter', 'jsbarcode', 'qrcode', 'seemly', 'splitpanes'],
          'editor-venders': ['@bytemd/plugin-gfm', '@bytemd/vue-next', 'bytemd', '@wangeditor/editor', '@wangeditor/editor-for-vue', '@vueup/vue-quill'],
          'vhooks': ['@henry/vhooks'],
          'naive-ui': ['naive-ui'],
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        experimentalMinChunkSize: 10 * 1024, // 单位b，合并较小的模块
      },
    },
  }
}
