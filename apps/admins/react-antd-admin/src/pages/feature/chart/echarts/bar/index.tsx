import type { ReactNode } from 'react'
import { Grid, GridItem } from '@/components/Grid'
import CylinderBar from './CylinderBar'
import PictogramBar from './PictogramBar'

interface Chart {
  id: string
  component: () => ReactNode
}

const charts: Chart[] = [
  { id: 'CylinderBar', component: CylinderBar },
  { id: 'PictogramBar', component: PictogramBar },
]

function BarChart() {
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

export default BarChart
