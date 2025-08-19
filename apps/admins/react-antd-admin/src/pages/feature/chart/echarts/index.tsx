import { Card } from 'antd'
import { useTranslation } from 'react-i18next'

import BarCharts from './bar'

function echarts() {
  const { t } = useTranslation('page')

  return (
    <Card
      className="card-wrapper"
      title={t('feature.chart.bar')}
      variant="borderless"
      size="small"
    >
      <BarCharts />
    </Card>
  )
}

export default echarts
