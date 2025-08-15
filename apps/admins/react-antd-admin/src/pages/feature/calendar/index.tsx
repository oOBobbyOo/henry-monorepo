import type { CalendarProps } from 'antd'
import type { Dayjs } from 'dayjs'
import { useResponsive } from '@/hooks/useResponsive'
import { Calendar, Card } from 'antd'
import { Lunar, Solar } from 'lunar-typescript'
import { useTranslation } from 'react-i18next'

function CalendarDemo() {
  const { t } = useTranslation('route')
  const { isMobile } = useResponsive()

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (date, info) => {
    const d = Lunar.fromDate(date.toDate())
    const s = Solar.fromDate(date.toDate())
    const ganZhi = d.getYearInGanZhi() // 干支
    const zodiac = d.getYearShengXiao() // 生肖
    const monthInChinese = `${d.getMonthInChinese()}月` // 阴历(月)
    const dayInChinese = `${d.getDayInChinese()}` // 阴历(日)
    const lunar = `${monthInChinese} ${dayInChinese}` // 阴历
    const festivals = d.getFestivals() // 节日
    const solarTerm = d.getJieQi() // 节气
    const constellation = `${s.getXingZuo()}座` // 星座

    if (info.type === 'month') {
      return (
        <div className="text-xs">
          <p className="flex-row justify-end flex-wrap gap-2">
            {monthInChinese}
          </p>
        </div>
      )
    }

    // 移动端
    if (isMobile) {
      return (
        <div className="text-xs">
          <p className="flex-row justify-end flex-wrap gap-2">
            <span>{dayInChinese}</span>
          </p>
        </div>
      )
    }

    return (
      <div className="text-xs">
        <p className="flex-row justify-end flex-wrap gap-2">
          <span>{ganZhi}</span>
          <span>{lunar}</span>
        </p>
        <p className="flex-row justify-end flex-wrap gap-2">
          {festivals.map(item => (
            <span key={item} className="text-red-500">
              {item}
            </span>
          ))}
        </p>
        <p className="flex-row justify-end flex-wrap gap-2">
          <span>{zodiac}</span>
          <span>{constellation}</span>
        </p>
        <p className="flex-row justify-end flex-wrap gap-2">
          <span>{solarTerm}</span>
        </p>
      </div>
    )
  }

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <Card
      className="card-wrapper"
      title={t('feature.calendar')}
      variant="borderless"
      size="small"
    >
      <Calendar cellRender={cellRender} onPanelChange={onPanelChange} />
    </Card>
  )
}

export default CalendarDemo
