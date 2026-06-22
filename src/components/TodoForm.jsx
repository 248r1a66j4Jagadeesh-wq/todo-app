import { useState } from "react";

import "../styles/TodoForm.css";

function TodoForm({ addTask }) {

  const [input, setInput] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    addTask(input);

    setInput("");

  }

  return (

    <form className="todo-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>

  );
}

export default TodoForm;