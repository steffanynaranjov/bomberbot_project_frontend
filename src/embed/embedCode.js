import React from "react";
import ReactDOM from "react-dom";

const iFrame = {
  TextEditor:
    '<iframe width="100%" height="1200" frameborder="no" src="https://bomberbot-project-frontend.vercel.app/TextEditor"></iframe>',
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function App() {
  return (
    <div className="">
      <Iframe iframe={iFrame["TextEditor"]} />,
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
