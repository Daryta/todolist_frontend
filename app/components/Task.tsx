import { removeTodo, updateTodo } from '@/api';
import { ITask } from '@/types/tasks'
import React from 'react'
interface TaskProps{
    task: ITask,
    handleUpdateTask: (task: ITask) => void;
    handleRemoveTask: (task: ITask) => void;
}


const Task: React.FC<TaskProps> = ({task, handleUpdateTask, handleRemoveTask}) => {

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const handleCheckIsComplete = async () => {
    const updateTask = { ...task, isCompleted: !task.isCompleted };

    const res = await updateTodo(updateTask);
    // this is wen success
    if (res?.status == '0000') {
      console.log("update task successfully: ", res);
      handleUpdateTask(res.body); // just get the newly updated task
    }
    else {
      alert(`Error adding task. Message: ${res.message}`);
    }
  }

  const handleRemove = async () => {
    const res = await removeTodo(task);
    // this is wen success
    if (res?.status == '0000') {
      console.log("update task successfully: ", res);
      handleRemoveTask(task); // just get the newly updated task
    }
    else {
      alert(`Error adding task. Message: ${res.message}`);
    }
  }


  const taskClass = task.isCompleted ? 'completed-task' : '';

  return (
    <tr 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={task.id} 
      className={`task-row ${taskClass}`}
    >
        <td>
          <input 
            type='checkbox'
            checked={task.isCompleted}
            onChange={handleCheckIsComplete}
          />
        </td>
        <td>{task.id}</td>
        <td>{task.todo}</td> 
        <td>{task.isCompleted ? "Done" : "Pending"}</td>
        <td>{task.createdAt.toString()}</td>
        <td>
          <button 
            onClick={handleRemove}
            disabled={!isHovered}
            className={`btn-remove ${!isHovered ? "d-invisible" : ""}`}
          >Remove
          </button>
        </td>
    </tr>
  )
}

export default Task