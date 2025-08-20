import { Card } from 'antd'
import { useTranslation } from 'react-i18next'

import BarCharts from './bar'
import LineCharts from './line'

function echarts() {
  const { t } = useTranslation('page')

  return (
    <>
      <Card
        className="card-wrapper"
        title={t('feature.chart.bar')}
        variant="borderless"
        size="small"
      >
        <BarCharts />
      </Card>

      <Card
        className="card-wrapper"
        title={t('feature.chart.line')}
        variant="borderless"
        size="small"
      >
        <LineCharts />
      </Card>
    </>
  )
}

export default echarts
