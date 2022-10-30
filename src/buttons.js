import React, { useState } from "react";

function Button(props) {
  const handleClick = () => {
    props.onClickAct(props.btnColor);
  };
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: props.btnColor,
        width: "33%",
        padding: "5px",
        cursor: "pointer",
      }}
    >
      {props.text}
    </button>
  );
}
function DisplayBlock(props) {
  return (
    <div
      style={{
        backgroundColor: props.btnColor,
        width: "99%",
        margin: "0 auto",
        padding: "50px 0",
      }}
    >
      <p>Some text</p>
    </div>
  );
}
function ColoredButtons() {
  const [displayBtnColor, setDisplayBtnColor] = useState("white");
  const stateFunc = (newBtnColor) => {
    setDisplayBtnColor(newBtnColor);
  };
  return (
    <>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <div>
          <Button btnColor="red" text="Red" onClickAct={stateFunc}></Button>
          <Button btnColor="green" text="Green" onClickAct={stateFunc}></Button>
          <Button
            btnColor="yellow"
            text="Yellow"
            onClickAct={stateFunc}
          ></Button>
        </div>

        <DisplayBlock btnColor={displayBtnColor}></DisplayBlock>
      </div>
    </>
  );
}
export default ColoredButtons;
