import { createHoverColor, createPressedColor } from '@/utils/color'

interface PageTabCssVarsProps {
  primaryColor: string
  primaryColor1: string
  primaryColor2: string
  primaryColorOpacity1: string
  primaryColorOpacity2: string
  primaryColorOpacity3: string
  primaryColorOpacity4: string
}

function createCssVars(props: PageTabCssVarsProps) {
  const cssVars = {
    '--hb-primary-color': props.primaryColor,
    '--hb-primary-color1': props.primaryColor1,
    '--hb-primary-color2': props.primaryColor2,
    '--hb-primary-color-opacity1': props.primaryColorOpacity1,
    '--hb-primary-color-opacity2': props.primaryColorOpacity2,
    '--hb-primary-color-opacity3': props.primaryColorOpacity3,
    '--hb-primary-color-opacity4': props.primaryColorOpacity4,
  }

  return cssVars
}

export function createTabCssVars(primaryColor: string) {
  const cssProps: PageTabCssVarsProps = {
    primaryColor,
    primaryColor1: createHoverColor(primaryColor, 0.9),
    primaryColor2: createPressedColor(primaryColor, 0.6),
    primaryColorOpacity1: createHoverColor(primaryColor, 0.95),
    primaryColorOpacity2: createPressedColor(primaryColor, 0.75),
    primaryColorOpacity3: createHoverColor(primaryColor, 0.65),
    primaryColorOpacity4: createPressedColor(primaryColor, 0.65),
  }
  return createCssVars(cssProps)
}
