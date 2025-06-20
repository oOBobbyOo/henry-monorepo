import { transformRecordToOption, translateOptions } from '@/utils/common'

/**
 * Page Animate
 */
export const thmemAnimateModeRecord: Record<Theme.ThemeAnimateMode, string> = {
  'fade': 'theme.page.animateName.fade',
  'fade-slide': 'theme.page.animateName.fade-slide',
  'fade-bottom': 'theme.page.animateName.fade-bottom',
  'fade-scale': 'theme.page.animateName.fade-scale',
  'zoom-fade': 'theme.page.animateName.zoom-fade',
  'zoom-out': 'theme.page.animateName.zoom-out',
  'none': 'theme.page.animateName.none',
}
export const thmemAnimateModeRecords = transformRecordToOption(thmemAnimateModeRecord)
export const themeAnimateModeOptions = translateOptions(thmemAnimateModeRecords)

/**
 * Tab Mode
 */
export const themeTabModeRecord: Record<Theme.ThemeTabMode, string> = {
  chrome: 'theme.tab.mode.chrome',
  button: 'theme.tab.mode.button',
}
export const themeTabModeRecords = transformRecordToOption(themeTabModeRecord)
export const themeTabModeOptions = translateOptions(themeTabModeRecords)
