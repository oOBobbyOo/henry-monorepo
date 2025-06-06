// @see https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  vue: true,
  rules: {
    'import-x/no-duplicates': 'off',
    'no-console': 'off',
  },
  ignores: [
    'node_modules',
    'dist',
    '.turbo',
    '.vscode',
    '.nuxt',
    '.output',
    '.visualizer',
    'auto-imports.d.ts',
    'compoents.d.ts',
  ],
})
