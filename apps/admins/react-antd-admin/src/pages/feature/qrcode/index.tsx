import type { ErrorCorrectionLevel } from '@/components/QrCode'
import type { UploadFile } from 'antd'
import QrCode from '@/components/QrCode'
import {
  Button,
  Card,
  Checkbox,
  Col,
  ColorPicker,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Switch,
  Typography,
  Upload,
} from 'antd'
import { useState } from 'react'

const { TextArea } = Input
const { Text } = Typography

interface QrCodeConfig {
  value: string
  size: number
  bgColor: string
  fgColor: string
  marginSize: number
  level: ErrorCorrectionLevel
  renderAs: 'svg' | 'canvas'
  includeMargin: boolean
  imageSettings?: {
    src: string
    height: number
    width: number
    excavate: boolean
    x?: number
    y?: number
  }
}

const defaultConfig: QrCodeConfig = {
  value: 'https://github.com/henry-monorepo',
  size: 200,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  marginSize: 4,
  level: 'M',
  renderAs: 'svg',
  includeMargin: true,
}

const levelOptions = [
  { label: 'L (~7%)', value: 'L' },
  { label: 'M (~15%)', value: 'M' },
  { label: 'Q (~25%)', value: 'Q' },
  { label: 'H (~30%)', value: 'H' },
]

const presetValues = [
  'https://github.com/henry-monorepo',
  'https://www.antd.com',
  'Hello QrCode!',
  'mailto:admin@example.com',
  'tel:+8613800138000',
  'https://github.com/zpao/qrcode.react',
]

function QrcodePage() {
  const [config, setConfig] = useState<QrCodeConfig>(defaultConfig)
  const [logoFileList, setLogoFileList] = useState<UploadFile[]>([])

  const updateConfig = (key: keyof QrCodeConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(config.value)
      window.$message?.success('内容已复制到剪贴板')
    }
    catch {
      window.$message?.error('复制失败')
    }
  }

  // 处理图片上传
  const handleLogoUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (result) {
        updateConfig('imageSettings', {
          src: result,
          height: 40,
          width: 40,
          excavate: true,
        })
        setLogoFileList([
          {
            uid: '-1',
            name: file.name,
            status: 'done',
            url: result,
          },
        ])
      }
    }
    reader.readAsDataURL(file)
    return false // 防止自动上传
  }

  // 移除图片
  const handleLogoRemove = () => {
    updateConfig('imageSettings', undefined)
    setLogoFileList([])
  }

  const handleDownload = () => {
    if (config.renderAs === 'svg') {
      const svg = document.querySelector('.qrcode-display svg')
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()

        img.onload = () => {
          canvas.width = config.size
          canvas.height = config.size
          ctx?.drawImage(img, 0, 0)
          const pngFile = canvas.toDataURL('image/png')

          const downloadLink = document.createElement('a')
          downloadLink.download = 'qrcode.png'
          downloadLink.href = pngFile
          downloadLink.click()
        }

        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
      }
    }
    else {
      const canvas = document.querySelector(
        '.qrcode-display canvas',
      ) as HTMLCanvasElement
      if (canvas) {
        const pngFile = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.download = 'qrcode.png'
        downloadLink.href = pngFile
        downloadLink.click()
      }
    }
    window.$message?.success('二维码已下载')
  }

  const presetExamples = [
    {
      title: '网站链接',
      value: 'https://github.com/henry-monorepo',
      bgColor: '#FFFFFF',
      fgColor: '#000000',
    },
    {
      title: '彩色二维码',
      value: 'Hello Colorful QrCode!',
      bgColor: '#F0F8FF',
      fgColor: '#1890FF',
    },
    {
      title: '深色主题',
      value: 'Dark Theme QrCode',
      bgColor: '#1F1F1F',
      fgColor: '#FFFFFF',
    },
    {
      title: '渐变风格',
      value: 'Gradient Style QrCode',
      bgColor: '#FFE4E1',
      fgColor: '#DC143C',
    },
    {
      title: '邮箱地址',
      value: 'mailto:admin@example.com',
      bgColor: '#FFFFFF',
      fgColor: '#52C41A',
    },
    {
      title: '电话号码',
      value: 'tel:+8613800138000',
      bgColor: '#FFFFFF',
      fgColor: '#722ED1',
    },
    {
      title: '带 Logo 示例',
      value: 'https://ant.design',
      bgColor: '#FFFFFF',
      fgColor: '#1890FF',
      hasLogo: true,
      logoUrl:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0iIzE4OTBGRiIvPgo8cGF0aCBkPSJNMTYgOEwxOSAxNEgxM0wxNiA4WiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMTYgMjRMMTMgMThIMTlMMTYgMjRaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik04IDE2TDE0IDE5VjEzTDggMTZaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0yNCAxNkwxOCAxM1YxOUwyNCAxNloiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==', // 简单的蓝色图标
    },
  ]

  return (
    <div className="h-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">二维码生成器</h1>
        <p className="text-gray-600">
          基于 qrcode.react 的二维码组件封装和使用示例
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {/* 配置面板 */}
        <Col xs={24} xl={8}>
          <Card title="配置参数" className="h-fit">
            <Space direction="vertical" size="large" className="w-full">
              {/* 二维码内容 */}
              <div>
                <Text strong className="block mb-2">
                  二维码内容
                </Text>
                <TextArea
                  value={config.value}
                  onChange={e => updateConfig('value', e.target.value)}
                  placeholder="请输入要生成二维码的内容"
                  rows={3}
                  showCount
                  maxLength={500}
                />
                <div className="mt-2">
                  <Text type="secondary" className="text-xs">
                    快速选择：
                  </Text>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {presetValues.map((value, index) => (
                      <Button
                        key={index}
                        size="small"
                        type="link"
                        onClick={() => updateConfig('value', value)}
                        className="h-auto p-1 text-xs"
                      >
                        {value.length > 25 ? `${value.slice(0, 25)}...` : value}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 尺寸设置 */}
              <div>
                <Text strong className="block mb-2">
                  尺寸大小
                </Text>
                <InputNumber
                  value={config.size}
                  onChange={value => updateConfig('size', value || 200)}
                  min={50}
                  max={500}
                  step={10}
                  className="w-full"
                  addonAfter="px"
                />
              </div>

              {/* 颜色设置 */}
              <div>
                <Text strong className="block mb-2">
                  颜色设置
                </Text>
                <Space className="w-full">
                  <div className="flex-1">
                    <Text className="block mb-1 text-xs">前景色</Text>
                    <ColorPicker
                      value={config.fgColor}
                      onChange={color =>
                        updateConfig('fgColor', color.toHexString())}
                      showText
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <Text className="block mb-1 text-xs">背景色</Text>
                    <ColorPicker
                      value={config.bgColor}
                      onChange={color =>
                        updateConfig('bgColor', color.toHexString())}
                      showText
                      className="w-full"
                    />
                  </div>
                </Space>
              </div>

              {/* 边距设置 */}
              <div>
                <Text strong className="block mb-2">
                  边距大小
                </Text>
                <InputNumber
                  value={config.marginSize}
                  onChange={value => updateConfig('marginSize', value || 4)}
                  min={0}
                  max={20}
                  className="w-full"
                />
              </div>

              {/* 错误修正级别 */}
              <div>
                <Text strong className="block mb-2">
                  错误修正级别
                </Text>
                <Select
                  value={config.level}
                  onChange={value => updateConfig('level', value)}
                  options={levelOptions}
                  className="w-full"
                />
              </div>

              {/* 渲染类型 */}
              <div>
                <Text strong className="block mb-2">
                  渲染类型
                </Text>
                <Select
                  value={config.renderAs}
                  onChange={value => updateConfig('renderAs', value)}
                  options={[
                    { label: 'SVG', value: 'svg' },
                    { label: 'Canvas', value: 'canvas' },
                  ]}
                  className="w-full"
                />
              </div>

              {/* 包含边距 */}
              <div>
                <Text strong className="block mb-2">
                  包含边距
                </Text>
                <Switch
                  checked={config.includeMargin}
                  onChange={checked => updateConfig('includeMargin', checked)}
                />
              </div>

              {/* Logo 设置 */}
              <div>
                <Text strong className="block mb-2">
                  Logo 设置
                </Text>
                <Space direction="vertical" className="w-full">
                  <Upload
                    accept="image/*"
                    beforeUpload={handleLogoUpload}
                    onRemove={handleLogoRemove}
                    fileList={logoFileList}
                    listType="picture-card"
                    maxCount={1}
                  >
                    {logoFileList.length === 0 && (
                      <div>
                        <div className="text-sm text-gray-500">上传 Logo</div>
                      </div>
                    )}
                  </Upload>

                  {config.imageSettings && (
                    <Space direction="vertical" className="w-full">
                      <div>
                        <Text className="block mb-1 text-xs">Logo 尺寸</Text>
                        <Space>
                          <InputNumber
                            value={config.imageSettings.width}
                            onChange={value =>
                              updateConfig('imageSettings', {
                                ...config.imageSettings!,
                                width: value || 40,
                              })}
                            min={10}
                            max={100}
                            addonAfter="px"
                            placeholder="宽度"
                          />
                          <InputNumber
                            value={config.imageSettings.height}
                            onChange={value =>
                              updateConfig('imageSettings', {
                                ...config.imageSettings!,
                                height: value || 40,
                              })}
                            min={10}
                            max={100}
                            addonAfter="px"
                            placeholder="高度"
                          />
                        </Space>
                      </div>

                      <Checkbox
                        checked={config.imageSettings.excavate}
                        onChange={e =>
                          updateConfig('imageSettings', {
                            ...config.imageSettings!,
                            excavate: e.target.checked,
                          })}
                      >
                        挖空背景（防止遮挡）
                      </Checkbox>
                    </Space>
                  )}
                </Space>
              </div>
            </Space>
          </Card>
        </Col>

        {/* 预览面板 */}
        <Col xs={24} xl={8}>
          <Card
            title="实时预览"
            extra={(
              <Space>
                <Button onClick={handleCopy} size="small">
                  复制内容
                </Button>
                <Button onClick={handleDownload} size="small">
                  下载
                </Button>
              </Space>
            )}
          >
            <div className="flex justify-center items-center min-h-[300px] bg-gray-50 rounded-lg qrcode-display">
              {config.value
                ? (
                    <QrCode {...config} />
                  )
                : (
                    <Text type="secondary">请输入二维码内容</Text>
                  )}
            </div>

            {config.value && (
              <div className="mt-4 text-center text-sm text-gray-500">
                <div>
                  尺寸:
                  {config.size}
                  ×
                  {config.size}
                </div>
                <div>
                  容错级别:
                  {config.level}
                </div>
                <div>
                  渲染方式:
                  {config.renderAs.toUpperCase()}
                </div>
              </div>
            )}
          </Card>
        </Col>

        {/* 示例展示 */}
        <Col xs={24} xl={8}>
          <Card title="预设示例">
            <div className="space-y-4">
              {presetExamples.map((example, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Text strong className="text-sm">
                      {example.title}
                    </Text>
                    <Button
                      size="small"
                      type="primary"
                      ghost
                      onClick={() => {
                        const newConfig = {
                          ...config,
                          value: example.value,
                          bgColor: example.bgColor,
                          fgColor: example.fgColor,
                        }

                        // 如果示例有 Logo，则设置 imageSettings
                        if (
                          (example as any).hasLogo
                          && (example as any).logoUrl
                        ) {
                          newConfig.imageSettings = {
                            src: (example as any).logoUrl,
                            height: 32,
                            width: 32,
                            excavate: true,
                          }
                          setLogoFileList([
                            {
                              uid: '-1',
                              name: 'logo.svg',
                              status: 'done',
                              url: (example as any).logoUrl,
                            },
                          ])
                        }
                        else {
                          newConfig.imageSettings = undefined
                          setLogoFileList([])
                        }

                        setConfig(newConfig)
                      }}
                    >
                      应用
                    </Button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <QrCode
                      value={example.value}
                      size={60}
                      bgColor={example.bgColor}
                      fgColor={example.fgColor}
                      marginSize={2}
                      imageSettings={
                        (example as any).hasLogo
                          ? {
                              src: (example as any).logoUrl,
                              height: 16,
                              width: 16,
                              excavate: true,
                            }
                          : undefined
                      }
                    />
                    <div className="flex-1 min-w-0">
                      <Text className="text-xs text-gray-600 break-all">
                        {example.value}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default QrcodePage
