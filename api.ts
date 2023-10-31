import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:8000/api'; // Corrected the URL format

interface AddTaskResponse{
    status: String,
    message: String,
    body: ITask,
}

interface UpdateTaskResponse{
    status: String,
    message: String,
    body: ITask,
}

interface RemoveTaskResponse{
    status: String,
    message: String,
    body: ITask,
}


export const getAllTodos = async (): Promise<ITask[]> => {
    try {
        const res = await fetch(`${baseUrl}/todo`);
        console.log("getching data");
        
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const todos = await res.json();
        console.log("data in getAllTodos: ", todos);
        return todos.body;
    } catch (error) {
        console.error("Error getting all todos:", error);
        throw error;
    }
}

export const addTodo = async (todo: String): Promise<AddTaskResponse> => {
    try {
        const res = await fetch(`${baseUrl}/todo`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              todo: todo,
            }),
          });
        
        if (!res.ok) {
            throw new Error(`Failed to add new todo. Status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error)  {
        console.error("Error adding new todo: ", error);
        throw error;
    }

} 

export const updateTodo = async (task: ITask): Promise<UpdateTaskResponse> => {
    try {
        const res = await fetch(`${baseUrl}/todo/${task.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              todo: task.todo,
              isCompleted: task.isCompleted,
            }),
          });
        
        if (!res.ok) {
            throw new Error(`Failed to update todo. Status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error)  {
        console.error("Error updating todo: ", error);
        throw error;
    }
}

export const removeTodo = async (task: ITask): Promise<RemoveTaskResponse> => {
    try {
        const res = await fetch(`${baseUrl}/todo/${task.id}`, {
            method: 'DELETE',
          });
        
        if (!res.ok) {
            throw new Error(`Failed to remove todo. Status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error)  {
        console.error("Error removing todo: ", error);
        throw error;
    }
}



// import { ITask } from "./types/tasks";

// // const baseUrl = 'http://localhost:3001/tasks';
// const baseUrl = 'http://localhost8000/api';

// export const getAllTodos = async (): Promise<ITask[]> =>{
//     const res = await fetch(`${baseUrl}/todo`);
//     console.log("res: ", res.body);
//     const todos = res.json();
//     return todos;

// }

