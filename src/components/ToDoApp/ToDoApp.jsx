import React, { useState } from 'react'

const ToDoApp = () => {
 
  

const [inputVal , getInput] = useState("");

const [TodoList,setTodoList] = useState([]);

console.log(TodoList);


const addTodo = ()=>{
  if(inputVal === ""){
alert("type sometyhing")

  }
  setTodoList( (prev)=>[...prev,inputVal])
  getInput("")
}

  return (
    <div>


      <div style={{height:"30vh"}} className='d-flex justify-content-center align-items-center'>


<div>
  <h1 className='text-center'>Todo App</h1>

<input value={inputVal} onChange={(e)=>{getInput(e.target.value);
}} type="text" />
        <button onClick={addTodo}>add +</button>

</div>


      </div>

      <div className='text-center'>
        <ul>
          {
            TodoList.map((item)=>{
              return(
<li className='list-unstyled'>{item}</li>
              )
            })
          }
          
        </ul>
      </div>
    </div>
    
  )
}

export default ToDoApp
