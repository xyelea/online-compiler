import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export default function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage("tsx")!]}
      onChange={onChange}
      theme={dracula}
    />
  );
}
