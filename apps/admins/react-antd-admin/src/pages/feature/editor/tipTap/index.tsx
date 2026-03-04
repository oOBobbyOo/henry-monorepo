import { EditorContent, useEditor } from '@tiptap/react'
// import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'

const MAX_CHARS = 500 // 最大字符数限制

const extensions = [StarterKit]

function TipTap() {
  const { t } = useTranslation('route')

  const [content, setContent] = useState('<p>初始内容</p>')
  const [charCount, setCharCount] = useState(0)

  const editor = useEditor({
    extensions, // 扩展
    content, // 初始内容
    onUpdate: ({ editor }) => {
      // 获取纯文本，去除换行符（可根据需求决定是否保留）
      const text = editor.getText().replace(/\n/g, '')
      setCharCount(text.length)
      // 将编辑器内容同步到 state
      setContent(editor.getHTML())
    },
  })

  // 初始计数
  useEffect(() => {
    if (editor) {
      const text = editor.getText().replace(/\n/g, '')
      setCharCount(text.length)
    }
  }, [editor])

  // 当外部 content 变化时更新编辑器
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  return (
    <div className="flex-col gap-2 h-full">
      <Card
        title={t('feature.tipTap')}
        className="card-wrapper"
        variant="borderless"
        size="small"
      >
        <EditorContent editor={editor} className="tiptap-wrapper">
          <div className="tiptap-footer">
            <span className={`tiptap-counter ${charCount > MAX_CHARS ? 'exceed' : ''}`}>
              {charCount}
              {' '}
              /
              {MAX_CHARS}
            </span>
          </div>
        </EditorContent>

      </Card>

      <Card
        title="内容展示"
        className="card-wrapper"
        variant="borderless"
        size="small"
      >
        {/* 编辑器内容展示 */}
        <div className="mb-2" dangerouslySetInnerHTML={{ __html: content }}></div>
      </Card>
    </div>
  )
}

export default TipTap
