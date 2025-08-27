import MarkdownEditor from '@/components/MarkdownEditor'
import { useEffect, useState } from 'react'
import readmeFile from './demo.md'

function Markdown() {
  const [markdownText, setMarkdownText] = useState('')

  useEffect(() => {
    // 使用 fetch 获取Markdown文件的内容
    fetch(readmeFile)
      .then(response => response.text())
      .then((text) => {
        setMarkdownText(text)
      })
  }, [])

  return (
    <>
      <MarkdownEditor height="100%" value={markdownText}></MarkdownEditor>
    </>
  )
}

export default Markdown
