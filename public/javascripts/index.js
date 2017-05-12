import React from "react";
import ReactDOM from "react-dom";


const h1 = {
  color: "#000",
  fontSize: "20px",
  fontStyle: "bold"
};

const Menu = (props) => {
  return (
    <div>
      <h1 style={h1}> {props.title}</h1>
    </div>
  )
};

Menu.propTypes = {
  title: React.PropTypes.String
};

ReactDOM.render(
  <Menu title="Hello World"/>,
  document.getElementById("menu")
);
