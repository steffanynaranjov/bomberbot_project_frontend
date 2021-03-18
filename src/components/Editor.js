import "codemirror/lib/codemirror.css";
import "codemirror/theme/xq-light.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/trailingspace";

import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="">
      <div className="bg-green-200">{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className=""
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "xq-light",
          lineNumbers: true,
          autoCloseTags: true,
          trailingspace: true,
        }}
      />
    </div>
  );
}
