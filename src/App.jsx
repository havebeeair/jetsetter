import './App.css';
import React, {useState} from "react";

function App() {
  return (
    <div className="container">
      <TopBar/>
      <Button/>
    </div>
  );
}

export default App;

function TopBar(){

  let [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  }
  
  const handleSubmit = () =>{
    console.log(state);
  }

  return(
    <form>
        <label>
          <input className="textTopBar" type="text" value={state} onChange={handleChange} />
        </label>
        <input className="submitTopBar" onClick={handleSubmit} type="submit" value="Submit" />
      </form>
  )
}

function Button(){

  const handleButton =() => {
    console.log("desempacando...")
  }
  return(
    <div >
        <button className="button" onClick={handleButton}> Marcar todos como desempacados </button>
      </div>
  )
}