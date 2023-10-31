"use client"
import { ITask } from '@/types/tasks'
import {useEffect, useState} from 'react'
import TodoList from './TodoList'
import AddTask from './AddTask'
import { getAllTodos } from '@/api'

const TodoStructure = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTodos();
      setTasks(tasks);
    }

    fetchTasks();
  }, []);


  const addNewTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
  }


  return (
    <>
      <AddTask addNewTask={addNewTask}/>
      <TodoList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default TodoStructure