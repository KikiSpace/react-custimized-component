import { useState } from "react";
import { getHinds } from "./api/http";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [active, setActive] = useState("none");
  const [hints, setHints] = useState([]);

  const inputChangeHandler = async (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      await getHinds(e.target.value, setHints);
      setActive("block");
    }
  };
  return (
    <div className="App" value={value} onChange={(e) => inputChangeHandler(e)}>
      <h1>Autocomplete</h1>
      <input type="text" />
      <div className="hintdisplay" style={{ display: `${active}` }}>
        {hints.length !== 0 &&
          hints.map((hint, i) => <div key={i}>{hint}</div>)}
      </div>
    </div>
  );
}

export default App;
