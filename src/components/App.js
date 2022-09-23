import React, { useState } from "react";
import ToDoItem from "./todoitem";
import InputArea from "./InputArea";

function App() {
  
  // const [iteams, setIteams]= useState([]);

  const [iteams, setIteams]= useState(new Set());

  

  // function addItem(){
  //   setIteams(
  //     prevValue => [...prevValue, inputText]
  //   )
  //   setInputText("");
  // }

  function addItem(inputText, setInputText){
    setIteams(
      prevValue => new Set([...prevValue, inputText])
    )
  }

  function deleteItem(id){
    const arr= Array.from(iteams);
    const newArr= arr.filter((item, index) => {
      return index !==id;
    });
    const set= new Set(newArr);
    setIteams(set);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
       <InputArea 
        onAdd= {addItem}
       />
      <div>
        <ul>        
          {Array.from(iteams).map((element, index) => {
            return (<ToDoItem 
              key= {index}
              id= {index}
              text= {element}
              onChecked= {deleteItem}
            />);
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
