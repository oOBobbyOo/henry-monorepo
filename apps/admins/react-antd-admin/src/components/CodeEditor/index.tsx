// @see https://github.com/uiwjs/react-codemirror
import type {
  BasicSetupOptions,
  Extension,
} from '@uiw/react-codemirror'
import type { CSSProperties, FC, RefObject } from 'react'
import {
  EditorView,
} from '@uiw/react-codemirror'
import CodeMirror from '@uiw/react-codemirror'
import { memo, useCallback, useImperativeHandle, useMemo, useRef } from 'react'
import { useBlurHandler, useHeightListener, useLanguageExtensions, useSaveKeymap } from './hook'

export interface CodeEditorHandles {
  save?: () => void
}

interface CodeEditorProps {
  ref?: RefObject<CodeEditorHandles | null>
  value: string
  placeholder?: string | HTMLElement
  language: string
  onSave?: (newContent: string) => void
  onChange?: (newContent: string) => void
  onBlur?: (newContent: string) => void
  onHeightChange?: (scrollHeight: number) => void
  height?: string
  minHeight?: string
  maxHeight?: string
  fontSize?: string
  /** 用于覆写编辑器的某些设置 */
  options?: {
    stream?: boolean // 用于流式响应场景，默认 false
    lint?: boolean
    keymap?: boolean
  } & BasicSetupOptions
  /** 用于追加 extensions */
  extensions?: Extension[]
  /** 用于覆写编辑器的样式，会直接传给 CodeMirror 的 style 属性 */
  style?: CSSProperties
  className?: string
  editable?: boolean
  expanded?: boolean
  unwrapped?: boolean
}

/** 最大折叠代码高度 */
export const MAX_COLLAPSED_CODE_HEIGHT = 350

const CodeEditor: FC<CodeEditorProps> = ({
  ref,
  value,
  placeholder,
  language,
  onSave,
  onChange,
  onBlur,
  onHeightChange,
  height,
  minHeight,
  maxHeight,
  fontSize,
  options,
  extensions,
  style,
  className,
  editable = true,
  expanded = true,
  unwrapped = false,
}) => {
  const enableKeymap = useMemo(() => options?.keymap, [options?.keymap])

  const customBasicSetup = useMemo(() => {
    return {
      ...(options as BasicSetupOptions),
    }
  }, [options])

  const customFontSize = useMemo(() => fontSize ?? `${fontSize}px`, [fontSize])

  const initialContent = useRef(
    options?.stream ? (value ?? '').trimEnd() : (value ?? ''),
  )

  const editorViewRef = useRef<EditorView | null>(null)

  const langExtensions = useLanguageExtensions(language, options?.lint)
  const saveKeymapExtension = useSaveKeymap({ onSave, enabled: enableKeymap })
  const blurExtension = useBlurHandler({ onBlur })
  const heightListenerExtension = useHeightListener({ onHeightChange })

  const customExtensions = useMemo(() => {
    return [
      ...(extensions ?? []),
      ...langExtensions,
      ...(unwrapped ? [] : [EditorView.lineWrapping]),
      saveKeymapExtension,
      blurExtension,
      heightListenerExtension,
    ].flat()
  }, [
    extensions,
    langExtensions,
    unwrapped,
    saveKeymapExtension,
    blurExtension,
    heightListenerExtension,
  ])

  const handleSave = useCallback(() => {
    const currentDoc = editorViewRef.current?.state.doc.toString() ?? ''
    onSave?.(currentDoc)
  }, [onSave])

  useImperativeHandle(ref, () => ({
    save: handleSave,
  }))

  return (
    <CodeMirror
      // 维持一个稳定值，避免触发 CodeMirror 重置
      value={initialContent.current}
      placeholder={placeholder}
      width="100%"
      height={height}
      minHeight={minHeight}
      maxHeight={
        expanded ? 'none' : (maxHeight ?? `${MAX_COLLAPSED_CODE_HEIGHT}px`)
      }
      editable={editable}
      extensions={customExtensions}
      onCreateEditor={(view: EditorView) => {
        editorViewRef.current = view
        onHeightChange?.(view.scrollDOM?.scrollHeight ?? 0)
      }}
      onChange={(value, viewUpdate) => {
        if (onChange && viewUpdate.docChanged)
          onChange(value)
      }}
      basicSetup={{
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        bracketMatching: true,
        closeBrackets: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLineGutter: false,
        highlightSelectionMatches: true,
        closeBracketsKeymap: enableKeymap,
        searchKeymap: enableKeymap,
        foldKeymap: enableKeymap,
        completionKeymap: enableKeymap,
        lintKeymap: enableKeymap,
        ...customBasicSetup, // override basicSetup
      }}
      style={{
        fontSize: customFontSize,
        marginTop: 0,
        borderRadius: 'inherit',
        ...style,
      }}
      className={`code-editor ${className ?? ''}`}
    />
  )
}

export default memo(CodeEditor)
