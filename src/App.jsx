import { useState, useEffect } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

function App() {

  // Load tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Save tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  }

  // Complete Task
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

  // Clear Completed Tasks
  function clearCompleted() {

    const activeTasks = tasks.filter(
      (task) => !task.completed
    );

    setTasks(activeTasks);
  }

  // Search Filter
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="app">

      <Header />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />

      <TodoForm addTask={addTask} />

      {filteredTasks.length === 0 ? (
        <EmptyState />
      ) : (
        <TodoList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      )}

      <button
        className="clear-btn"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>

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