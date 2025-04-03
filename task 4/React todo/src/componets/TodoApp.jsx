import React, { useEffect, useRef, useState } from 'react'
import todo from "../assets/todo.png"
import TodoItems from './TodoItems'
import js from '@eslint/js';
const TodoApp = () => {
    const inputREF=useRef();
    const [todolist,settodolist]=useState(localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]);
    const Add = () => {
        const inputText=inputREF.current.value.trim();
        if(inputText==""){
            return null;
        }
        const newtodo= {
            id:Date.now(),
            text:inputText,
            isComplete:false,
       }
       settodolist((prev)=>[...prev,newtodo]);
       inputREF.current.value ="";


    };
    const deletetodo=(id)=>{
        settodolist((prvtodo)=>{
            return prvtodo.filter((todo)=>todo.id !==id)
        })


    }
    const checked=(id)=>{
        settodolist((prtd)=>{
            return prtd.map((todo)=>{
            if(todo.id===id){
            return{...todo,isComplete:!todo.isComplete}
            }
            return todo;
        })
    })
    }
    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(todolist));
    },[todolist])

    
  return (
    <div className='bg-gradient-to-b from-blue-500 to-yellow-500 place-self-center 
    w-11/12 max-w-md flex flex-col p-7 
    min-h-[550px] rounded-xl'>


    <div className=' flex items-center mt-7 gap-2'> 
    <img className='w-10' src={todo} alt=""/>

      <h1 className=' text-3x1 font-semibold'>TO_Do List App</h1>
      </div>
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputREF} className='bg-transparent border-0 outline-none flex-1
         h-14 pl-6 pr-2 placeholder:text-slate-600'type="text"placeholder='add your task'/>
        <button onClick={Add} className='border-none rounded-full bg-green-600 w-32
         h-14 text-white text-1g font-midium cursor-pointer'>ADD +</button> 

         
      </div>
        <div>
            {todolist.map((item,index)=>{
                return<TodoItems key={index}text={item.text} id={item.id} isComplete={item.isComplete} deletetodo={deletetodo} checked={checked}/>
            })}
          
        </div>
    </div> 
  )
}

export default TodoApp
