import React from "react";
import Item from "./Item.jsx";

function Items(props) {
  return (
    <div>
      <h1>
        {props.title}({props.items.length})
      </h1>
      <input type="text" />
      {props.items.map((item) => {
        return <Item nombre={item.value} />;
      })}
    </div>
  );
}

export default Items;
