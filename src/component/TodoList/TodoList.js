import React from "react";
// import { Items } from "../../Constant/data";
import Item from "../item/item";

function TodoList({ list,deleteItem }) {
  return (
    <div>
      {list.map((el) => (
        <Item key={el.id} item={el} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoList;
