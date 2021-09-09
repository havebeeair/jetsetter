import React, {useState} from "react";
import './App.css';

function App() {

  let [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  }
  
  const handleSubmit = () =>{
    console.log(state);
  }

  const handleButton =() => {
    console.log("Desempacando...")
  }

  return (
    <div className="container">
      <form>
        <label>
          <input className="textTopBar" type="text" value={state} onChange={handleChange} />
        </label>
        <input className="submitTopBar" onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      <div>
        <button className="button" onClick={handleButton}> Marcar todos como desempacados </button>
      </div>
    </div>
  );
}

export default App;
