import React, { useState } from "react";

/*FATHER COMPONENT */
export default function SyncedInputs() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
        setText(e.target.value);
  }

  return (
    <>
      {/* <Input label="Primer input" onTextChange={handleChange} /> */}
      <SyncedInput label="Primer input" sentValue={text} onTextChange={handleChange} />
      <SyncedInput label="Segundo input" sentValue={text} onTextChange={handleChange} />
    </>
  );
}

/*SON COMPONENT */
function SyncedInput(props) {
  return (
    <label>
      {props.label} <input value={props.sentValue}  onChange={props.onTextChange} />
    </label>
  );
}
