import React from "react";
import "./styles.css";

const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
  event.preventDefault();
  const selection = document.getSelection();
  const focusNode = selection?.focusNode;
  const parentElement = focusNode?.parentElement;
  console.log("LENCONDA:", parentElement, parentElement?.childNodes);
};

export default function App() {
  return (
    <div contentEditable={true} onKeyPress={handleKeyPress}>
      <button
        contentEditable={false}
        onClick={() => console.log(document.getSelection())}
      >
        test
      </button>
      <div
        tabIndex={0}
        data-id="1"
        onInput={(e) => console.log("LENCONDA:onInput", e)}
      >
        aposkdpaoskdasd
      </div>
      <div data-id="2">
        asodkapsokdaposdk
        <span data-id="3">fuckyoubitch</span>
        asodkapsodkapsodkaisjdaosidjaosijdaosidjaosidjaosidjaoisjdoaisjdoasijdoasijdoaisjdoasijdoasijdaosidjoasijdoasijdaosidjaoisjd
      </div>
    </div>
  );
}
