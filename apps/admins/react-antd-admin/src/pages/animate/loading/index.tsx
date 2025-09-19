import DoraLoading from '@/components/Animate/Loading/DoraLoading'

import { Grid, GridItem } from '@/components/Grid'

function LoadingAnimate() {
  const loadings = [
    {
      key: 'DoraLoading',
      component: <DoraLoading />,
    },
  ]

  return (
    <div className="m-10">
      <Grid gutter={[40, 60]}>
        {loadings.map((item) => {
          return (
            <GridItem key={item.key} span={{ xs: 24, sm: 12, md: 8 }} className="flex-center">
              {item.component}
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

export default LoadingAnimate
