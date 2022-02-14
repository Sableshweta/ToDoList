import React, { useState } from 'react';


const App = () => {
  const [inputList , setInputList] = useState("");
  const [Item, setItems] = useState([]);
 
  const listOfItem = () => {
    if(!inputList){

    }else{
    setItems([...Item, inputList]);
    setInputList('');
    }
  };

  const deleteItem =(id) => {
    console.log(id);
    const updatedItem = Item.filter((arrElem, index) => {
      return index !== id;
    });
    setItems(updatedItem);
    
};

  return (
    <>
    <div className='main_div'>
    <div className='center_div'>
    <br />
    <h1> ToDo List </h1>
    <br />
    <input type="text" placeholder="Add the Item.." value={inputList} onChange={(e) => setInputList(e.target.value) }/>
    <button onClick={listOfItem}> add </button>
     
     <div className='Showdata'>
       {
         Item.map((arrElem, index) =>{
            return(
              <div className='todo_style' key={index}>
              <h1>{arrElem}</h1>
              <i className="fas fa-times add-btn"  title='delete Item' onClick={() => deleteItem(index)}></i> 
              </div>
            )
         })
       }
     </div>
    
    
    </div>
    </div>
</>
  );
};
export default App