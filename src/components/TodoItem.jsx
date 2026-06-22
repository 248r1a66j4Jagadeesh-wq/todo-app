import "../styles/TodoItem.css";

function TodoItem({ task, deleteTask }) {

  return (

    <div className="todo-item">

      <p>{task.text}</p>

      <button
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </div>

  );

}

export default TodoItem;