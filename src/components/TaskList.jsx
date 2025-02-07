import TaskItem from "./TaskItem";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem 
            key={index} 
            task={task} 
            completeTask={() => completeTask(index)} 
            deleteTask={() => deleteTask(index)} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
