import CodeEditor from '@/components/CodeEditor'

function Codemirror() {
  const code = `import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  
  return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
}
export default App;
`

  return (
    <CodeEditor
      value={code}
      height="100%"
      language="typescript"
      className="h-full"
    />
  )
}

export default Codemirror
