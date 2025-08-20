import type { ReactNode } from 'react'
import { Grid, GridItem } from '@/components/Grid'
import AreaLine from './AreaLine'
import MulTypeLine from './MulTypeLine'

interface Chart {
  id: string
  component: () => ReactNode
}

const charts: Chart[] = [
  { id: 'MulTypeLine', component: MulTypeLine },
  { id: 'AreaLine', component: AreaLine },
]

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
