import type { AnyColor, RgbColor } from 'colord'
import { colord, extend } from 'colord'
import labPlugin from 'colord/plugins/lab'
import mixPlugin from 'colord/plugins/mix'
import namesPlugin from 'colord/plugins/names'

extend([namesPlugin, mixPlugin, labPlugin])

/**
 * Add color alpha
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 */
export function addColorAlpha(color: AnyColor, alpha: number) {
  return colord(color).alpha(alpha).toHex()
}

/**
 * Mix color
 * @param firstColor - First color
 * @param secondColor - Second color
 * @param ratio - The ratio of the second color (0 - 1)
 */
export function mixColor(firstColor: AnyColor, secondColor: AnyColor, ratio: number) {
  return colord(firstColor).mix(secondColor, ratio).toHex()
}

/**
 * Transform color with opacity to similar color without opacity
 * @param color - Color
 * @param alpha - Alpha (0 - 1)
 * @param bgColor Background color (usually white or black)
 */
export function transformColorWithOpacity(color: string, alpha: number, bgColor = '#ffffff') {
  const originColor = addColorAlpha(color, alpha)
  const { b: oB, g: oG, r: oR } = colord(originColor).toRgb()

  const { b: bgB, g: bgG, r: bgR } = colord(bgColor).toRgb()

  function calRgb(or: number, bg: number, al: number) {
    return bg + (or - bg) * al
  }

  const resultRgb: RgbColor = {
    b: calRgb(oB, bgB, alpha),
    g: calRgb(oG, bgG, alpha),
    r: calRgb(oR, bgR, alpha),
  }

  return colord(resultRgb).toHex()
}
