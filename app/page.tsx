import { getAllTodos } from "@/api";
import { ITask } from "@/types/tasks";
import TodoStructure from "./components/TodoStructure";
import { useEffect, useState } from "react";

export default  async function Home({}) {


  return (
    <>
     <header className='bg-slate-500 p-4 rounded text-center'>
          <h1 className='text-3xl'>My Todo List</h1>
      </header>
    <main className="max-w-4xl mx-auto mt-4">
      <TodoStructure />
    </main>

    </>
  )
}
