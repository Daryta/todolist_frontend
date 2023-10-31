import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[],
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>; // setTasks Props
}
const TodoList: React.FC<TodoListProps> = ({tasks, setTasks}) => {
  const handleUpdateTask = (updatedTask: ITask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  }

  const handleRemoveTask = (removeTask: ITask) => {
    const removedTasks = tasks.filter((task) => task.id !== removeTask.id);
    console.log("removed Task:", removedTasks);
    setTasks(removedTasks);
  }

  return (
    <div>
        <table className="table-auto w-full">
            <thead className="text-left">
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Tasks Title</th>
                    <th>Status</th>
                    <th>CreatedAt</th>
                </tr>
            </thead>
            {
                <tbody>
                {Array.isArray(tasks) &&
                  tasks.map((task) => (
                    <Task 
                      handleRemoveTask={handleRemoveTask}
                      handleUpdateTask={handleUpdateTask}
                      key={task.id}
                      task={task}
                    />
                  ))}
              </tbody>
            }
        </table>
    </div>
  )
}

export default TodoList