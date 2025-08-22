import type { FC } from 'react'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import remarkCjkFriendly from 'remark-cjk-friendly'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import styled from 'styled-components'
import 'katex/dist/katex.min.css'
import 'github-markdown-css/github-markdown.css'

interface MarkdownEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  height?: string | number
  autoFocus?: boolean
}

const EditorContainer = styled.div`
  display: flex;
  border: 1px solid var(--hb-border-color);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`

const InputArea = styled.textarea`
  flex: 1;
  padding: 12px;
  border: none;
  resize: none;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 1.5;
  background-color: var(--hb-background-color);
  border-right: 1px solid var(--hb-border-color);
  outline: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(235, 235, 245, 0.38);
  }
`

const PreviewArea = styled.div`
  flex: 1;
  padding: 12px;
  overflow: auto;
`
const MarkdownEditor: FC<MarkdownEditorProps> = ({
  value,
  onChange,
  placeholder = '请输入Markdown格式文本...',
  height = '300px',
  autoFocus = false,
}) => {
  const { darkMode } = useThemeScheme()
  const [inputValue, setInputValue] = useState(value || '')

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange && onChange(newValue)
  }

  return (
    <EditorContainer style={{ height }}>
      <InputArea
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      <PreviewArea className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkCjkFriendly, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match
                ? (
                    <SyntaxHighlighter
                      showLineNumbers={true}
                      language={match[1]}
                      style={darkMode ? materialDark : materialLight}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  )
                : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
            },
          }}
        >
          {inputValue || placeholder}
        </ReactMarkdown>
      </PreviewArea>
    </EditorContainer>
  )
}

export default MarkdownEditor
