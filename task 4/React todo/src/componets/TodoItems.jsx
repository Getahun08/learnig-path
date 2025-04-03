import React from 'react'
import Checked from '../assets/Checked.png'; 
import unchecked from '../assets/unchecked.png'; 
import delet from '../assets/delet.png'

const TodoItems = ({text,id,isComplete,deletetodo,checked}) => {
  return (
    <div>
      <div className='flex items-center my-3 gab-2'>
        <div onClick={()=>{checked(id)}}className='flex flex-1 items-center cursor-pointer w-7'>
            <img src={isComplete ? Checked:unchecked}alt='' className='w-7'/>
            <p className={'tex-slate-700 ml-4 tex-[17px] decoration-slate-500  ${ isComplete ? "line-through" : ""}'}>
                {text}</p>
        </div>
        <img onClick={()=>{deletetodo(id)}}src={delet}alt='' className='w-4 cursor-pointer'/>

      </div>
    </div> 
  )
}

export default TodoItems
