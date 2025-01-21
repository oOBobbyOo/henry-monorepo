import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  typescript: true,
  vue: true,
  react: true,
  ignores: ['node_modules', 'dist'],
})
