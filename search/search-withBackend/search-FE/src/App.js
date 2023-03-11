import { useEffect, useState } from "react";
import { getFruits } from "./axios/http";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [addInput, setAddInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFruits().then((data) => setItems(data));
  }, []);

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
      {items.length === 0 ? (
        <h5>Loading...</h5>
      ) : (
        <div className="display">
          {searchInput === ""
            ? items.map((item) => <h5>{item}</h5>)
            : items
                .filter((item) => item.startsWith(searchInput))
                .map((item) => <h5>{item}</h5>)}
        </div>
      )}
    </div>
  );
}

export default App;
