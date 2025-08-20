import type { ReactNode } from 'react'
import { Grid, GridItem } from '@/components/Grid'
import AreaChart from './AreaChart'

interface Chart {
  id: string
  component: () => ReactNode
}

const charts: Chart[] = [{ id: 'AreaChart', component: AreaChart }]

function LineChart() {
  return (
    <Grid gutter={[16, 24]}>
      {charts.map((item) => {
        const Component = item.component
        return (
          <GridItem key={item.id} span={{ xs: 24, lg: 12 }}>
            <Component />
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default LineChart
