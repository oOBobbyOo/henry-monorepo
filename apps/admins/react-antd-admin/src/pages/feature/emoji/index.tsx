import type { EmojiClickData } from '@/components/EmojiPicker'
import EmojiPicker, { EmojiStyle, SkinTones } from '@/components/EmojiPicker'
import { Card, Input, Space, Typography } from 'antd'
import { useState } from 'react'

const { Title, Text, Paragraph } = Typography

function EmojiPage() {
  const [selectedEmoji, setSelectedEmoji] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    console.log('选择的emoji:', emojiData)
    setSelectedEmoji(emojiData.emoji)
    setInputValue(prev => prev + emojiData.emoji)
    window.$message?.success(`选择了 ${emojiData.emoji} (${emojiData.names?.[0] || 'emoji'})`)
  }

  return (
    <div className="flex-col gap-4">
      <div>
        <Title level={2}>Emoji Picker 组件</Title>
        <Paragraph>
          基于 emoji-picker-react 封装的 Emoji 选择器组件，支持主题切换、多种样式风格、搜索功能等。
        </Paragraph>
      </div>

      {/* 基础用法 */}
      <Card title="基础用法" size="small">
        <Space direction="vertical" size="middle" className="w-full">
          <div>
            <Text strong>选择一个 emoji：</Text>
            <div className="mt-8px">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          </div>

          {selectedEmoji && (
            <div>
              <Text>
                当前选择的 emoji：
                <span className="text-24px">{selectedEmoji}</span>
              </Text>
            </div>
          )}
        </Space>
      </Card>

      {/* 自定义按钮文本 */}
      <Card title="自定义按钮文本" size="small">
        <Space wrap>
          <EmojiPicker
            buttonText="选择表情"
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="🎉 点击选择"
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            value="😊"
            buttonText="自定义emoji"
            onEmojiClick={handleEmojiClick}
          />
        </Space>
      </Card>

      {/* 不同的 emoji 样式 */}
      <Card title="不同的 Emoji 样式" size="small">
        <Space wrap>
          <EmojiPicker
            buttonText="Apple 风格"
            emojiStyle={EmojiStyle.APPLE}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="Google 风格"
            emojiStyle={EmojiStyle.GOOGLE}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="Facebook 风格"
            emojiStyle={EmojiStyle.FACEBOOK}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="Twitter 风格"
            emojiStyle={EmojiStyle.TWITTER}
            onEmojiClick={handleEmojiClick}
          />
        </Space>
      </Card>

      {/* 不同肤色 */}
      <Card title="默认肤色设置" size="small">
        <Space wrap>
          <EmojiPicker
            buttonText="中性肤色"
            defaultSkinTone={SkinTones.NEUTRAL}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="浅色肤色"
            defaultSkinTone={SkinTones.LIGHT}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="中等浅色"
            defaultSkinTone={SkinTones.MEDIUM_LIGHT}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="中等肤色"
            defaultSkinTone={SkinTones.MEDIUM}
            onEmojiClick={handleEmojiClick}
          />
        </Space>
      </Card>

      {/* 自定义配置 */}
      <Card title="自定义配置" size="small">
        <Space wrap>
          <EmojiPicker
            buttonText="禁用搜索"
            searchConfig={{ searchDisabled: true }}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="无预览"
            previewConfig={{ showPreview: false }}
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="自定义尺寸"
            width={300}
            height={350}
            onEmojiClick={handleEmojiClick}
          />
        </Space>
      </Card>

      {/* 弹窗位置 */}
      <Card title="弹窗位置" size="small">
        <Space wrap>
          <EmojiPicker
            buttonText="顶部"
            placement="top"
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="底部"
            placement="bottom"
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="左侧"
            placement="left"
            onEmojiClick={handleEmojiClick}
          />
          <EmojiPicker
            buttonText="右侧"
            placement="right"
            onEmojiClick={handleEmojiClick}
          />
        </Space>
      </Card>

      {/* 与输入框结合使用 */}
      <Card title="与输入框结合使用" size="small">
        <Space direction="vertical" className="w-full">
          <div className="flex gap-8px">
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="点击emoji按钮添加表情到输入框"
              className="flex-1"
            />
            <EmojiPicker
              buttonText="😀"
              onEmojiClick={handleEmojiClick}
            />
          </div>
          <Text type="secondary">
            提示：选择 emoji 会自动添加到输入框中
          </Text>
        </Space>
      </Card>

      {/* 禁用状态 */}
      <Card title="禁用状态" size="small">
        <EmojiPicker
          buttonText="禁用状态"
          disabled={true}
          onEmojiClick={handleEmojiClick}
        />
      </Card>

      <Card title="组件特性" size="small">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12px">
          <div>
            <Title level={5}>🎨 主题适配</Title>
            <Text>自动适配项目的明暗主题</Text>
          </div>
          <div>
            <Title level={5}>🔍 搜索功能</Title>
            <Text>支持搜索emoji名称</Text>
          </div>
          <div>
            <Title level={5}>🌈 多种样式</Title>
            <Text>支持Apple、Google、Facebook等多种emoji风格</Text>
          </div>
          <div>
            <Title level={5}>👥 肤色选择</Title>
            <Text>支持不同肤色的emoji变体</Text>
          </div>
          <div>
            <Title level={5}>📱 响应式</Title>
            <Text>支持不同的弹窗位置和自定义尺寸</Text>
          </div>
          <div>
            <Title level={5}>⚡ 高性能</Title>
            <Text>懒加载emoji，提升性能</Text>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EmojiPage
