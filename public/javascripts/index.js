import React from "react";
import ReactDOM from "react-dom";
import data from "../data/data.js";

const Menu = (props) => {
  return (
    <div style={{background: "#fff"}}>
      <figure className="image">
        <img src={props.image} />
      </figure>
      {props.menus.map((menu, idx)=>{
        return (
          <div>
            <h1 className="menu-title" key={idx}>{menu.title}</h1>
            <p className="menu-details text-center" key={idx + 5}>{menu.details}</p>
          </div>
        )
      })}
      <hr/>
      {props.dishes.map((dish, idx)=>{
        return(
          <div className="row">
            <div className="col-md-6">
              <h4 key={idx} className=" dishName">{dish.name}</h4>
            </div>
            <div className="col-md-4">
              <span key={idx + 1} className="dishStatus">{dish.status}</span>
            </div>
            <div className="col-md-2 pull-right">
                <span key={idx + 2} className="dishPrice">${dish.price}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
};

ReactDOM.render(
  <Menu image={data.image} menus={data.menus} dishes={data.dishes}/>,
  document.getElementById("menu")
);

ReactDOM.render(
  <Menu image={data.image2} menus={data.menus2} dishes={data.dishes2}/>,
  document.getElementById("menu2")
);
