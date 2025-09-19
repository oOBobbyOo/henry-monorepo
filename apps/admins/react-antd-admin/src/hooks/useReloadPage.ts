import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getReloadFlag, setReloadFlag } from '@/stores/modules/app/slice'
import { useThemeScheme } from './useThemeScheme'

export function useReloadPage(duration = 300) {
  const dispatch = useAppDispatch()

  const isReload = useAppSelector(getReloadFlag)

  const { themeSettings } = useThemeScheme()

  async function reloadPage() {
    dispatch(setReloadFlag(true))

    const d = themeSettings.page.animate ? duration : 40

    await new Promise((resolve) => {
      setTimeout(resolve, d)
    })

    dispatch(setReloadFlag(false))
  }

  return {
    isReload,
    reloadPage,
  }
}
