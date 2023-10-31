"use client"
import React, {useState} from 'react';
import { getAllTodos, addTodo } from '@/api';
import { ITask } from '@/types/tasks';

interface AddTaskProps {
  addNewTask: (task: ITask) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addNewTask }) => {
  const [newTaskValue, setNewTaskValue]= useState<string>("");

  const handlceAddNewTask = async () => {
    console.log("newTasakValue: ", newTaskValue);

    if (newTaskValue) {
      const res = await addTodo(newTaskValue);
      // this is wen success
      if (res?.status == '0000') {
        console.log("add task successfully: ", res);
        setNewTaskValue('');
        addNewTask(res.body)
      }
      else {
        alert(`Error adding task. Message: ${res.message}`);
      }
    }

  }

  return (
    <div>
      <input value={newTaskValue} onChange={e=>setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="border-2 p-2 mr-2 rounded" />
      <button
        onClick={handlceAddNewTask} 
        className="border-2 p-2 rounded-lg bg-blue-600">
        Add new task
        </button>
    </div>
  )
}

export default AddTask