import type { Options } from 'jsbarcode'
import BarCode from '@/components/BarCode'
import { Grid, GridItem } from '@/components/Grid'
import { Card } from 'antd'
import { useTranslation } from 'react-i18next'

interface CodeProps {
  id: string
  tag?: 'svg' | 'canvas' | 'img'
  title: string
  text: string
  options?: Options
}

function barcode() {
  const { t } = useTranslation('route')

  const text = 'Henry Admin'

  const codes: CodeProps[] = [
    {
      id: 'CODE39',
      title: 'CODE39 正常尺寸',
      text: 'Hello',
      options: {
        format: 'CODE39',
      },
    },
    {
      id: 'CODE128',
      title: 'CODE128 正常尺寸',
      text,
      options: {
        format: 'CODE128',
      },
    },
    {
      id: 'EAN13',
      title: 'ENA13 商品条形码',
      text: '1234567890128',
      options: {
        format: 'EAN13',
      },
    },
    {
      id: 'UPC',
      title: 'UPC-A 商品条形码',
      text: '123456789012',
      options: {
        format: 'UPC',
      },
    },
    {
      id: 'barcode',
      title: '不一样的高度，不一样的颜色',
      text: 'Hello',
      options: {
        height: 60,
        lineColor: '#9ca3af',
      },
    },
    {
      id: 'barcode1',
      title: '加个背景色',
      text,
      options: {
        background: '#9ca3af',
        lineColor: '#ffffff',
      },
    },
    {
      id: 'barcode2',
      title: '字体好大',
      text,
      options: {
        fontSize: 40,
      },
    },
    {
      id: 'barcode3',
      title: '粗狂的条码，文字离远点',
      text: 'Hi',
      options: {
        textMargin: 30,
        width: 4,
      },
    },
    {
      id: 'barcode4',
      title: '字体跑上面来，还是粗体',
      text,
      options: {
        textPosition: 'top',
        fontOptions: 'bold',
      },
    },
    {
      id: 'barcode5',
      title: '设置字体和倾斜',
      text,
      options: {
        font: 'fantasy',
        fontOptions: 'italic',
      },
    },
    {
      id: 'barcode6',
      tag: 'canvas',
      title: 'canvas 渲染',
      text,
    },
    {
      id: 'barcode7',
      tag: 'img',
      title: 'IMG 渲染',
      text,
    },
  ]

  return (
    <Card
      className="card-wrapper"
      title={t('feature.barcode')}
      variant="borderless"
      size="small"
    >
      <Grid gutter={[16, 24]}>
        {codes.map((item) => {
          return (
            <GridItem key={item.id} span={{ xs: 24, md: 12, xl: 8 }}>
              <div className="flex-col-center">
                <h3>{item.title}</h3>
                <BarCode
                  tag={item.tag}
                  text={item.text}
                  options={item.options}
                  className="h-130px"
                />
              </div>
            </GridItem>
          )
        })}
      </Grid>
    </Card>
  )
}

export default barcode
