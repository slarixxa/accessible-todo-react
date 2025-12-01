import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(""); //Text Input
  const [tasks, setTasks] = useState<Task[]>([]); //List Tasks
  type Task = {
    id: number;
    text: string;
    done: boolean;
  };

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  function handleAddTask() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
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
        <button onClick={handleAddTask}>Add</button>
      </label>
      <p>Eingabewert: {inputValue}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
