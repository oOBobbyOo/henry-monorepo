import { Editor } from '@tinymce/tinymce-react'
import { Card } from 'antd'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

function TinyMCE() {
  const { t } = useTranslation('route')

  const editorRef = useRef(null)
  const [content, setContent] = useState('<p>初始内容</p>')

  return (
    <div className="flex-col gap-2">

      <Card
        title={t('feature.tinyMCE')}
        className="card-wrapper"
        variant="borderless"
        size="small"
      >
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY} // 从环境变量读取
          onInit={(_evt, editor) => editorRef.current = editor}
          value={content}
          onEditorChange={(newContent) => {
            setContent(newContent)
          }}
          init={{
            height: 400, // 编辑器高度
            menubar: false, // 显示菜单栏
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'preview',
              'help',
              'wordcount',
            ],
            toolbar: 'undo redo | blocks | '
              + 'bold italic forecolor | alignleft aligncenter '
              + 'alignright alignjustify | bullist numlist outdent indent | '
              + 'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
            statusbar: false, // 是否应在编辑器底部显示状态栏
          }}
        />
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

export default TinyMCE
