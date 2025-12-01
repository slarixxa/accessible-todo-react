import "./App.css";
import { useState } from "react";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState(""); //Text Input
  const [tasks, setTasks] = useState<Task[]>([]); //List Tasks

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  function handleAddTask() {
    const trimmed = inputValue.trim();
    if (!trimmed) return; // nix hinzufügen, wenn leer

    const newTask: Task = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  function handleToggleTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    const toggledTask = updatedTasks.find((task) => task.id === id);

    if (toggledTask?.done) {
      setTimeout(() => {
        setTasks((currentTasks) =>
          currentTasks.filter((task) => task.id !== id)
        );
      }, 10000);
    }
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
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleTask(task.id)}
              />
              <span className={task.done ? "done" : ""}>{task.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
