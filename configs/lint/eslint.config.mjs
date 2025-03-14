import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    unocss: false,
    typescript: true,
    vue: true,
    react: true,
    ignores: ['node_modules', 'dist', 'auto-imports.d.ts', 'compoents.d.ts'],
  },
)
