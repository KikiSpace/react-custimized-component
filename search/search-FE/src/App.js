import { useState } from "react";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [addInput, setAddInput] = useState("");
  const [items, setItems] = useState([
    "orange",
    "apple",
    "peach",
    "banana",
    "strawberry",
    "blueberry",
    "orangee",
    "orrang",
    "peeeach",
  ]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const addEnterHandler = (e) => {
    if (e.key === "Enter") {
      setItems([addInput, ...items]);
      setAddInput("");
    }
  };

  const addChangeHandler = (e) => {
    e.preventDefault();
    setAddInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="inputfield">
        <div className="addField">
          <p>Add</p>
          <input
            className="addInput"
            value={addInput}
            onChange={addChangeHandler}
            onKeyDown={addEnterHandler}
          ></input>
        </div>
        <div className="searchField">
          <p>Search</p>
          <input
            className="searchInput"
            value={searchInput}
            onChange={onChangeHandler}
          ></input>
        </div>
      </div>
      <div className="display">
        {searchInput === ""
          ? items.map((item) => <h5>{item}</h5>)
          : items
              .filter((item) => item.startsWith(searchInput))
              .map((item) => <h5>{item}</h5>)}
      </div>
    </div>
  );
}

export default App;
