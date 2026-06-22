import "../styles/TodoForm.css";

function TodoForm() {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter a new task..."
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;