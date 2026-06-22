import { useState } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {

    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
function deleteTask(id) {

  const updatedTasks = tasks.filter((task) => {

    return task.id !== id;

  });

  setTasks(updatedTasks);

}
    setTasks([...tasks, newTask]);

  }

  return (
    <div className="app">

      <Header />

      <TodoForm addTask={addTask} />

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <TodoList
    tasks={tasks}
    deleteTask={deleteTask}
/>
      )}

      <Footer totalTasks={tasks.length} />

    </div>
  );
}

export default App;