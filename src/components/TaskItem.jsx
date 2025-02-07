const TaskItem = ({ task, completeTask, deleteTask }) => {
    return (
      <div className={`task-item ${task.completed ? "completed" : ""}`}>
        <span>{task.text}</span>
        <button onClick={completeTask}>✔️</button>
        <button onClick={deleteTask}>❌</button>
      </div>
    );
  };
  
  export default TaskItem;
  