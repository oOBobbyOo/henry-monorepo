import { transformRecordToOption, translateOptions } from '@/utils/common'

export const thmemAnimateModeRecord: Record<Theme.ThemeAnimateMode, string> = {
  'fade': 'theme.pageSetting.animateName.fade',
  'fade-slide': 'theme.pageSetting.animateName.fade-slide',
  'fade-bottom': 'theme.pageSetting.animateName.fade-bottom',
  'fade-scale': 'theme.pageSetting.animateName.fade-scale',
  'zoom-fade': 'theme.pageSetting.animateName.zoom-fade',
  'zoom-out': 'theme.pageSetting.animateName.zoom-out',
  'none': 'theme.pageSetting.animateName.none',
}

export const thmemAnimateModeRecords = transformRecordToOption(thmemAnimateModeRecord)

export const themeAnimateModeOptions = translateOptions(thmemAnimateModeRecords)
