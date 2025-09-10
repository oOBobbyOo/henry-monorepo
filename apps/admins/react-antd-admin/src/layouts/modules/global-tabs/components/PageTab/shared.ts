import { addColorAlpha, transformColorWithOpacity } from '@/utils'

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
    primaryColor1: transformColorWithOpacity(primaryColor, 0.1, '#ffffff'),
    primaryColor2: transformColorWithOpacity(primaryColor, 0.3, '#000000'),
    primaryColorOpacity1: addColorAlpha(primaryColor, 0.1),
    primaryColorOpacity2: addColorAlpha(primaryColor, 0.15),
    primaryColorOpacity3: addColorAlpha(primaryColor, 0.3),
    primaryColorOpacity4: addColorAlpha(primaryColor, 0.4),
  }
  return createCssVars(cssProps)
}
