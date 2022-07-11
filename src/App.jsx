import React, { useState } from 'react'
import  ToDoLists from './ToDoLists';

function App() {
  
  const[current, updated] =useState("") // useState = INITIAL, setInput = new Value
  const[items, setItems] = useState([])
  
  function ItemEvent(event1){
    updated(event1.target.value)
  }
  const listOfItems = () => {
      setItems(() => {
        return [...items, current]
      })
      updated("");
  }
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index )=> {
        return index !== id;
      })
    })
  }
  return(
    <>
      <div className='main_div'>
        <h1>Create your own Todo List</h1>
        <div className='center_div'>
          <input type="text" id='text'placeholder = "Add an Item" 
          value={current} onChange={ItemEvent} />
          <button id= 'button' onClick={listOfItems}> + </button>
          <ul id='list_items'>
            {/* <li> {current} </li> */}
            
            {items.map((itemval, index)=> {
               return <ToDoLists 
                      key={index} 
                      text={itemval} 
                      id={index} 
                      onSelect = {deleteItems} />
            })}
           
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;