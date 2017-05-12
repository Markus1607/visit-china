import React from "react";
import ReactDOM from "react-dom";


const Menu = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

ReactDOM.render(
  <Menu title="Hello World"/>,
  document.getElementById("Menu")
);
