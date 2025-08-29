import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import type { FC } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@wangeditor/editor/dist/css/style.css'

const EditorContainer = styled.div<{ height?: string }>`
  border: 1px solid var(--hb-border-color);
  z-index: 100;
  height: ${props => props.height || '400px'};
  display: flex;
  flex-direction: column;

  .w-e-toolbar {
    border-bottom: 1px solid var(--hb-border-color);
    background: inherit;
  }

  .w-e-bar-divider {
    background-color: var(--hb-border-color);
  }

  .w-e-text-container {
    flex: 1;
    overflow-y: hidden;
    background: inherit;
  }
`

export interface WangEditorProps {
  /** 编辑器初始内容 */
  value?: string
  /** 内容变化回调 */
  onChange?: (html: string) => void
  /** 编辑器高度 */
  height?: string
  /** 占位符 */
  placeholder?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 工具栏配置 */
  toolbarConfig?: Partial<IToolbarConfig>
  /** 编辑器配置 */
  editorConfig?: Partial<IEditorConfig>
  /** 编辑器创建完成回调 */
  onCreated?: (editor: IDomEditor) => void
  /** 编辑器销毁回调 */
  onDestroyed?: (editor: IDomEditor) => void
  /** 编辑器焦点回调 */
  onFocus?: (editor: IDomEditor) => void
  /** 编辑器失焦回调 */
  onBlur?: (editor: IDomEditor) => void
}

const WangEditor: FC<WangEditorProps> = ({
  value = '',
  onChange,
  height = '400px',
  placeholder = '请输入内容...',
  readOnly = false,
  toolbarConfig = {},
  editorConfig = {},
  onCreated,
  onDestroyed,
  onFocus,
  onBlur,
}) => {
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  const [html, setHtml] = useState(value)

  // 工具栏配置
  const defaultToolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: [
      'group-video', // 排除视频功能
    ],
    ...toolbarConfig,
  }

  // 编辑器配置
  const defaultEditorConfig: Partial<IEditorConfig> = {
    placeholder,
    readOnly,
    autoFocus: false,
    scroll: true,
    onCreated: (editor: IDomEditor) => {
      setEditor(editor)
      onCreated?.(editor)
    },
    onDestroyed: (editor: IDomEditor) => {
      onDestroyed?.(editor)
    },
    onFocus: (editor: IDomEditor) => {
      onFocus?.(editor)
    },
    onBlur: (editor: IDomEditor) => {
      onBlur?.(editor)
    },
    onChange: (editor: IDomEditor) => {
      const currentHtml = editor.getHtml()
      setHtml(currentHtml)
      onChange?.(currentHtml)
    },
    MENU_CONF: {
      // 上传图片配置
      uploadImage: {
        server: '/api/upload-image',
        fieldName: 'file',
        maxFileSize: 5 * 1024 * 1024, // 5MB
        allowedFileTypes: ['image/*'],
        metaWithUrl: false,
        withCredentials: true,
        onBeforeUpload(file: File) {
          console.log('onBeforeUpload', file)
          return file
        },
        onProgress(progress: number) {
          console.log('progress', progress)
        },
        onSuccess(file: File, res: any) {
          console.log('onSuccess', file, res)
        },
        onFailed(file: File, res: any) {
          console.log('onFailed', file, res)
        },
        onError(file: File, err: any, res: any) {
          console.log('onError', file, err, res)
        },
        customInsert(res: any, insertFn: any) {
          // 自定义插入图片
          if (res.data && res.data.url) {
            insertFn(res.data.url, res.data.alt || '', res.data.url)
          }
        },
      },
      // 上传视频配置
      uploadVideo: {
        server: '/api/upload-video',
        fieldName: 'file',
        maxFileSize: 100 * 1024 * 1024, // 100MB
        allowedFileTypes: ['video/*'],
        onBeforeUpload(file: File) {
          console.log('onBeforeUpload video', file)
          return file
        },
        onProgress(progress: number) {
          console.log('video progress', progress)
        },
        onSuccess(file: File, res: any) {
          console.log('video onSuccess', file, res)
        },
        onFailed(file: File, res: any) {
          console.log('video onFailed', file, res)
        },
        onError(file: File, err: any, res: any) {
          console.log('video onError', file, err, res)
        },
        customInsert(res: any, insertFn: any) {
          if (res.data && res.data.url) {
            insertFn(res.data.url, res.data.poster || '')
          }
        },
      },
      // 代码块配置
      codeSelectLang: {
        langs: [
          'HTML',
          'CSS',
          'JavaScript',
          'TypeScript',
          'Java',
          'Python',
          'C',
          'C++',
          'C#',
          'PHP',
          'Go',
          'Rust',
          'Swift',
          'Kotlin',
          'Dart',
          'JSON',
          'XML',
          'SQL',
          'Bash',
          'Shell',
        ],
        codeLangs: [
          { text: 'HTML', value: 'html' },
          { text: 'CSS', value: 'css' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'TypeScript', value: 'typescript' },
          { text: 'Java', value: 'java' },
          { text: 'Python', value: 'python' },
          { text: 'C', value: 'c' },
          { text: 'C++', value: 'cpp' },
          { text: 'C#', value: 'csharp' },
          { text: 'PHP', value: 'php' },
          { text: 'Go', value: 'go' },
          { text: 'Rust', value: 'rust' },
          { text: 'Swift', value: 'swift' },
          { text: 'Kotlin', value: 'kotlin' },
          { text: 'Dart', value: 'dart' },
          { text: 'JSON', value: 'json' },
          { text: 'XML', value: 'xml' },
          { text: 'SQL', value: 'sql' },
          { text: 'Bash', value: 'bash' },
          { text: 'Shell', value: 'shell' },
        ],
      },
    },
    ...editorConfig,
  }

  // 及时销毁 editor，重要！
  useEffect(() => {
    return () => {
      if (editor == null)
        return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  // 监听外部 value 变化
  useEffect(() => {
    if (editor == null)
      return
    if (value !== html) {
      setHtml(value)
      if (editor.getHtml() !== value) {
        editor.setHtml(value)
      }
    }
  }, [value, editor, html])

  return (
    <EditorContainer height={height}>
      <Toolbar
        editor={editor}
        defaultConfig={defaultToolbarConfig}
        mode="default"
      />
      <Editor
        defaultConfig={defaultEditorConfig}
        value={html}
        mode="default"
        style={{ height: 'calc(100% - 50px)', overflowY: 'hidden' }}
      />
    </EditorContainer>
  )
}

export default WangEditor
