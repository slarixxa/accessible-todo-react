import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <h1>Accessible To-Do App</h1> {/*headline*/}
      <label htmlFor="newToDo">
        {/*label for accessibility*/}
        <input
          id="newToDo"
          type="text"
          value={inputValue}
          onChange={changeInput}
        ></input>
        <button></button>
      </label>
      <p>Eingabewert: {inputValue}</p>
    </div>
  );
}

export default App;
