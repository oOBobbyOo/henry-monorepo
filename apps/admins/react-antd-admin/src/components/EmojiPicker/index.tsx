import type { EmojiClickData } from 'emoji-picker-react'
import type { FC } from 'react'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { Button, Popover } from 'antd'
import EmojiPicker, { EmojiStyle, SkinTones, Theme } from 'emoji-picker-react'
import { useState } from 'react'

export interface EmojiPickerProps {
  /** 选择emoji时的回调 */
  onEmojiClick?: (emojiData: EmojiClickData) => void
  /** 初始选中的emoji */
  value?: string
  /** 触发按钮的样式类名 */
  className?: string
  /** 触发按钮的文本，默认显示emoji或😀 */
  buttonText?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 弹窗的位置 */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'
  /** emoji样式风格 */
  emojiStyle?: EmojiStyle
  /** 默认肤色 */
  defaultSkinTone?: SkinTones
  /** 是否显示预览 */
  previewConfig?: {
    showPreview: boolean
    defaultCaption?: string
    defaultEmoji?: string
  }
  /** 搜索配置 */
  searchConfig?: {
    searchDisabled?: boolean
    searchPlaceholder?: string
  }
  /** 尺寸大小 */
  width?: number
  height?: number
}

const EmojiPickerComponent: FC<EmojiPickerProps> = ({
  onEmojiClick,
  value = '',
  className,
  buttonText,
  disabled = false,
  placement = 'bottomLeft',
  emojiStyle = EmojiStyle.APPLE,
  defaultSkinTone = SkinTones.NEUTRAL,
  previewConfig = { showPreview: true },
  searchConfig = { searchDisabled: false },
  width = 350,
  height = 400,
}) => {
  const [selectedEmoji, setSelectedEmoji] = useState(value)
  const [open, setOpen] = useState(false)
  const { darkMode } = useThemeScheme()

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.emoji)
    onEmojiClick?.(emojiData)
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const renderTriggerButton = () => {
    const displayText = buttonText || selectedEmoji || '😀'

    return (
      <Button
        className={className}
        disabled={disabled}
        size="middle"
      >
        {displayText}
      </Button>
    )
  }

  const renderEmojiPicker = () => (
    <>
      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        theme={darkMode ? Theme.DARK : Theme.LIGHT}
        emojiStyle={emojiStyle}
        defaultSkinTone={defaultSkinTone}
        width={width}
        height={height}
        previewConfig={previewConfig}
        searchDisabled={searchConfig.searchDisabled}
        searchPlaceHolder={searchConfig.searchPlaceholder}
        lazyLoadEmojis={true}
      />
    </>
  )

  return (
    <Popover
      content={renderEmojiPicker()}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement={placement}
      arrow={false}
    >
      {renderTriggerButton()}
    </Popover>
  )
}

export default EmojiPickerComponent
export { EmojiStyle, SkinTones, Theme } from 'emoji-picker-react'
export type { EmojiClickData } from 'emoji-picker-react'
