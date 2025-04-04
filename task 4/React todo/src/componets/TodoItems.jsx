import React from 'react'
import Checked from '../assets/Checked.png'; 
import unchecked from '../assets/unchecked.png'; 
import delet from '../assets/delet.png';
import edit from '../assets/edit.png';

const TodoItems = ({text,id,isComplete,deletetodo,checked,edittodo}) => {
  return (
    <div>
      <div className='flex items-center my-3 gab-2 space-x-4'>
        <div onClick={()=>{checked(id)}}className='flex flex-1 items-center cursor-pointer w-7 '>
            <img src={isComplete ? Checked:unchecked}alt='' className='w-7'/>
            <p className={'tex-slate-700 ml-4 tex-[17px] decoration-slate-500  ${ isComplete ? "line-through" : ""}'}>
                {text}</p>
        </div>
        <button>
        <img onClick={()=>{deletetodo(id)}}src={delet}alt='delete' className='w-6 h-6 cursor-pointer rounded'/>
        </button>
        <button>
        <img  onClick={() => {
    const updatedText = prompt("Enter new task text:", text);
    if (updatedText) {
      edittodo(id, { text: updatedText });
    }
  }}src={edit}alt='edit' className='w-6 h-6 cursor-pointer rounded '/>
        </button>

      </div>
    </div> 
  )
}

export default TodoItems
