import { useState, useEffect } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

function App() {

 const [tasks, setTasks] = useState(() => {

  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];

});
  // Add Task
  function addTask(taskText) {

    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  // Delete Task
  function deleteTask(id) {

    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  // Toggle Complete
  function toggleComplete(id) {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {

        return {
          ...task,
          completed: !task.completed,
        };

      }

      return task;

    });

    setTasks(updatedTasks);
  }
useEffect(() => {

  localStorage.setItem(

    "tasks",

    JSON.stringify(tasks)

  );

}, [tasks]);
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
          toggleComplete={toggleComplete}
        />
      )}

      <Footer
        totalTasks={tasks.length}
        completedTasks={
          tasks.filter((task) => task.completed).length
        }
      />

    </div>
  );
}

export default App;