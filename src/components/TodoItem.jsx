import "../styles/TodoItem.css";

function TodoItem({

task,

deleteTask,

toggleComplete

}) {

return (

<div className="todo-item">

<div className="task-left">

<input

type="checkbox"

checked={task.completed}

onChange={()=>

toggleComplete(task.id)

}

/>

<p

className={

task.completed

?

"completed"

:

""

}

>

{task.text}

</p>

</div>

<button
onClick={() => {

  if (window.confirm("Delete this task?")) {

    deleteTask(task.id);

  }

}}

>

Delete

</button>

</div>

);

}

export default TodoItem;