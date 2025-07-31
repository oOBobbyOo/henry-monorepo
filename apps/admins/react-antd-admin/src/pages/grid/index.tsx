import { Grid, GridItem } from '@/components/Grid'
import { Card } from 'antd'
import { useTranslation } from 'react-i18next'

function GridDemo() {
  const { t } = useTranslation('route')

  const cols = Array.from({ length: 8 })

  return (
    <Card
      className="card-wrapper"
      title={t('grid.page')}
      variant="borderless"
      size="small"
    >
      <Grid gutter={[16, 16]}>
        {cols.map((_, index) => {
          return (
            <GridItem key={index} span={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
              <div className="p-5 text-center bg-[#f5f5f5]">
                Col
                {index + 1}
              </div>
            </GridItem>
          )
        })}
      </Grid>
    </Card>
  )
}

export default GridDemo
