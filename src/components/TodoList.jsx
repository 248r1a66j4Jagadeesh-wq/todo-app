import TodoItem from "./TodoItem";

import "../styles/TodoList.css";

function TodoList({

tasks,

deleteTask,

toggleComplete

}) {

return (

<div className="todo-list">

{tasks.map((task)=>(

<TodoItem

key={task.id}

task={task}

deleteTask={deleteTask}

toggleComplete={toggleComplete}

/>

))}

</div>

);

}

export default TodoList;