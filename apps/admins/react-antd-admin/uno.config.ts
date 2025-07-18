import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-between': 'flex justify-between items-center',
    'flex-col': 'flex flex-col',
    'flex-col-center': 'flex-center flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'flex-row': 'flex flex-row',
    'flex-row-center': 'flex flex-row items-center',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-col': 'flex-col inline-flex',
    'i-flex-col-center': 'flex-col i-flex-center',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'card-wrapper': 'rd-8px shadow-sm',
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
