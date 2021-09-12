import React, { useState } from "react";
import "./App.css";
import { defaultState } from "./consts/products.js";
import Items from "./Items.jsx";

function App() {
  let [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = () => {
    console.log(state);
  };

  const handleButton = () => {
    console.log("Desempacando...");
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <form>
          <label>
            <input
              className="textTopBar"
              type="text"
              value={state}
              onChange={handleChange}
            />
          </label>
          <input
            className="submitTopBar"
            onClick={handleSubmit}
            type="submit"
            value="Submit"
          />
        </form>
        <Items title="Items no empacados" items={defaultState} />
        <Items title="Items empacados" items={defaultState} />
        <div>
          <button className="btn-marcar-todos" onClick={handleButton}>
            {" "}
            Marcar todos como desempacados{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
