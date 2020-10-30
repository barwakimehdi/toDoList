import React,{useState} from "react";

function Add({handleItem}) {
 const [todo, setTodo] = useState("")
  return (
    <div>
      <input onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={()=> handleItem(todo)}>add</button>
    </div>
  );
}

export default Add;
