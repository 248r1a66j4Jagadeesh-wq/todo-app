import TodoItem from "./TodoItem";

import "../styles/TodoList.css";

function TodoList({ tasks, deleteTask }) {

  return (

    <div className="todo-list">

      {tasks.map((task) => (

        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />

      ))}

    </div>

  );

}

export default TodoList;