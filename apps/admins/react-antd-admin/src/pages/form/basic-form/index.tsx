import {
  Button,
  Card,
  Cascader,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Segmented,
  Select,
  Slider,
  Space,
  TimePicker,
  TreeSelect,
} from 'antd'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type LayoutType = Parameters<typeof Form>[0]['layout']
type SizeType = Parameters<typeof Form>[0]['size']

const { RangePicker } = DatePicker

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}

function BasicForm() {
  const { t } = useTranslation('route')

  const [form] = Form.useForm()
  const variant = Form.useWatch('variant', form)

  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')

  const [formSize, setFormSize] = useState<SizeType | 'default'>(
    'default',
  )

  const onValuesChange = ({
    layout,
    size,
  }: {
    layout: LayoutType
    size: SizeType
  }) => {
    setFormLayout(layout)

    setFormSize(size)
  }

  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }

  return (
    <Card
      className="card-wrapper"
      title={t('form.basicForm')}
      variant="borderless"
      size="small"
    >
      <Form
        {...formItemLayout}
        form={form}
        layout={formLayout}
        variant={variant || 'outlined'}
        initialValues={{
          variant: 'outlined',
          layout: formLayout,
          size: formSize,
        }}
        onValuesChange={onValuesChange}
        size={formSize as SizeType}
        autoComplete="off"
        onFinish={onFinish}
      >
        {/* Form Layout */}
        <Form.Item label="Form Layout" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* Form Size */}
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* Form variant */}
        <Form.Item label="Form variant" name="variant">
          <Segmented
            options={['outlined', 'filled', 'borderless', 'underlined']}
          />
        </Form.Item>

        {/* Input */}
        <Form.Item label="Input" name="Input" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        {/* InputNumber */}
        <Form.Item
          label="InputNumber"
          name="InputNumber"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        {/* InputOtp */}
        <Form.Item
          label="Input.OTP"
          name="InputOtp"
          rules={[{ required: true }]}
        >
          <Input.OTP style={{ width: '50%' }} />
        </Form.Item>

        {/* TextArea */}
        <Form.Item
          label="TextArea"
          name="TextArea"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        {/* Mentions */}
        <Form.Item
          label="Mentions"
          name="Mentions"
          rules={[{ required: true }]}
        >
          <Mentions />
        </Form.Item>

        {/* Select */}
        <Form.Item label="Select" name="Select" rules={[{ required: true }]}>
          <Select />
        </Form.Item>

        {/* Cascader */}
        <Form.Item
          label="Cascader"
          name="Cascader"
          rules={[{ required: true }]}
        >
          <Cascader />
        </Form.Item>

        {/* TreeSelect */}
        <Form.Item
          label="TreeSelect"
          name="TreeSelect"
          rules={[{ required: true }]}
        >
          <TreeSelect />
        </Form.Item>

        {/* DatePicker */}
        <Form.Item
          label="DatePicker"
          name="DatePicker"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        {/* RangePicker */}
        <Form.Item
          label="RangePicker"
          name="RangePicker"
          rules={[{ required: true }]}
        >
          <RangePicker />
        </Form.Item>

        {/* TimePicker */}
        <Form.Item
          label="TimePicker"
          name="TimePicker"
          rules={[{ required: true }]}
        >
          <TimePicker />
        </Form.Item>

        {/* Slider */}
        <Form.Item label="Slider" name="Slider" rules={[{ required: true }]}>
          <Slider />
        </Form.Item>

        {/* Slider with marks */}
        <Form.Item
          label="Slider"
          name="sliderMarks"
          rules={[{ required: true }]}
        >
          <Slider
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
        </Form.Item>

        {/* ColorPicker */}
        <Form.Item
          label="ColorPicker"
          name="ColorPicker"
          rules={[{ required: true }]}
        >
          <ColorPicker />
        </Form.Item>

        {/* Rate */}
        <Form.Item label="Rate" name="Rate" rules={[{ required: true }]}>
          <Rate />
        </Form.Item>

        {/* Radio Group  */}
        <Form.Item
          label="Radio.Group"
          name="RadioGroup"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { offset: 0, span: 24 },
            sm: { offset: 6, span: 18 },
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default BasicForm
