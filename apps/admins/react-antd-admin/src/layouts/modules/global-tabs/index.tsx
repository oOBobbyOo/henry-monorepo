import BetterScroll from '@/components/BetterScroll'
import SvgIcon from '@/components/SvgIcon'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import clsx from 'clsx'
import PageTab from './components/PageTab'
import useTabAction from './useTabAction'
import { useTabScroll } from './useTabScroll'

function GlobalTabs() {
  const { themeSettings, darkMode } = useThemeScheme()

  const { activeTabKey, tabs } = useTabAction()

  const { bsWrapper, setBsScroll, tabRef } = useTabScroll(activeTabKey)

  const tabWrapperClass
    = themeSettings.tab.mode === 'chrome' ? 'items-end' : 'items-center gap-12px'

  return (
    <div
      className={clsx(
        'global-layout-tabs flex-y-center px-4 z-98',
        'bg-[rgb(255,255,255)] dark:bg-[rgb(28,28,28)]',
      )}
      style={{ height: `${themeSettings.tab.height}px` }}
      ref={bsWrapper}
    >
      <div className="h-full flex-1-hidden">
        <BetterScroll
          options={{ scrollX: true, scrollY: false }}
          setBsScroll={setBsScroll}
        >
          <div
            className={clsx('h-full flex pr-18px', tabWrapperClass)}
            ref={tabRef}
          >
            {tabs.map(item => (
              <PageTab
                key={item.routeKey}
                active={item.routeKey === activeTabKey}
                activeColor={themeSettings.themeColor}
                mode={themeSettings.tab.mode}
                darkMode={darkMode}
                prefix={(
                  <SvgIcon
                    className="inline-block align-text-bottom text-16px"
                    icon={item.icon}
                  />
                )}
              >
                <div className="max-w-240px text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.label}
                </div>
              </PageTab>
            ))}
          </div>
        </BetterScroll>
      </div>
    </div>
  )
}

export default GlobalTabs
