import React from "react";
import "./item.css"
function item({item,deleteItem}) {
  return (
    <div className="item">
      <div key={item.id}>
        <p> {item.name} </p>
        </div>
        <button onClick={()=>deleteItem(item.id)}>delete</button>
        <button>done</button>
      
    </div>
  );
}

export default item;
