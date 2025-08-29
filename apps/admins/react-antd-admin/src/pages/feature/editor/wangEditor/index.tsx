import WangEditor from '@/components/WangEditor'
import { Button, Card, Space } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function WangEditorDemo() {
  const { t } = useTranslation('route')

  const [conetnt, setConetnt] = useState(`<h2>欢迎使用 wangEditor</h2>`)

  const handleReset = () => {
    setConetnt('')
  }

  const handleGetContent = () => {
    console.log('编辑器内容：', conetnt)
  }

  return (
    <div className="flex-col gap-2">
      <Card
        title={t('feature.wangEditor')}
        className="card-wrapper"
        variant="borderless"
        size="small"
      >
        <WangEditor
          value={conetnt}
          onChange={setConetnt}
          height="400px"
          placeholder="请输入内容..."
        />
      </Card>

      <Card
        title="操作示例"
        className="card-wrapper"
        variant="borderless"
        size="small"
      >
        {/* 编辑器内容展示 */}
        <div className="mb-2" dangerouslySetInnerHTML={{ __html: conetnt }}></div>
        <Space>
          <Button type="primary" onClick={handleGetContent}>
            获取内容
          </Button>
          <Button onClick={handleReset}>重置内容</Button>
        </Space>
      </Card>
    </div>
  )
}

export default WangEditorDemo
