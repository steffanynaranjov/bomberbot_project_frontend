import React, { useState, useEffect } from "react";
import Editor from "../components/Editor";
import { useLocalStorage } from "../storage/useLocalStorage";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function TextEditor() {
  const [title, setTitle] = useLocalStorage("title", "");
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const classes = useStyles();

  return (
    <>
      <div className="border border-gray-300 rounded mt-1 mx-4">
        <div className="h-20  text-right py-8 px-4 bg-bom-blue text-gray-500">
          GUARDADO
        </div>
        <div className="flex flex-row ">
          <div className="md:w-1/5 w-1/3 boder border-gray-300 rounded mt-1 bg-bom-orange text-gray-500">
            <button className="bg-bom-green shadow-md hover:bg-green-300 w-full py-2 px-4 mb-4">
              Guardar
            </button>
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label={title}>
                <TreeItem nodeId="2" label="Html" />
                <TreeItem nodeId="3" label="CSS" />
                <TreeItem nodeId="4" label="JS" />
              </TreeItem>
              <br></br>
              <TreeItem nodeId="5" label="proyect2">
                <TreeItem nodeId="10" label="html" />
                <TreeItem nodeId="6" label="Msubproject2">
                  <TreeItem nodeId="7" label="html">
                    <TreeItem nodeId="8" label="css" />
                    <TreeItem nodeId="9" label="js" />
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeView>
          </div>
          <div className="md:w-2/5 w-2/6 border border-gray-300">
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
            />
          </div>
          <div className="w-2/3">
            <iframe
              id="preview-window"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextEditor;
