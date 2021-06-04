import React, {useState} from "react";
//import ListItem from "./ListItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, addItem] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(event) {
    //event.preventDefault();

    addItem((prevValues) => {
      return (
        [...prevValues, inputText]
      );
    });

    setInputText("");
  }

  // function createList(arrayItem, index) {
  //   return (
  //     <ListItem 
  //       key={index}
  //       item={arrayItem} 
  //     />
  //   );
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {items.map(createList)}   */}
          {items.map((todoItem)=> <li>{todoItem}</li>)}
        </ul>
      </div>    
    </div>
  );
}

export default App;
