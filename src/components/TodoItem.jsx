import "../styles/TodoItem.css";

function TodoItem({ task }) {

  return (

    <div className="todo-item">

      <p>{task.text}</p>

    </div>

  );

}

export default TodoItem;