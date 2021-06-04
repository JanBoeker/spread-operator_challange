import React, {useState} from "react";
import ListItem from "./ListItem";

function App() {

  const [item, setItem] = useState("");
  const [list, addToList] = useState(["firstItem"]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const newItem = item;
    setItem("");

    addToList((prevValue) => {
      return (
        [...prevValue, newItem]
      );
    });
  }

  function createList(arrayItem, index) {
    return (
      <ListItem 
        key={index}
        item={arrayItem} 
      />
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item}/>
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(createList)}  
        </ul>
      </div>    
    </div>
  );
}

export default App;
