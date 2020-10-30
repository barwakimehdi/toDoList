import React,{useState} from "react";
import "./App.css";
import { Items } from "../src/Constant/data";
//list of component
import TodoList from "./component/TodoList/TodoList";
import Add from "./component/Add/Add"

function App() {
  const [items, setItems] = useState(Items);
  //function handleItem
  const handleItem=(item)=>{
    setItems([...items,{id:Math.random,name:item,done:false}])
  }
  const deleteItem=(id)=>{
    setItems(items.filter((el)=>el.id !==id))
  }
  return (
    <div>
      <h1>To Do List</h1>
      <Add handleItem={handleItem} />
      <TodoList  deleteItem={deleteItem} list={items}/>
    </div>
  );
}

export default App;
