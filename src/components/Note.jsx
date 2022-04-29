import React, { useState } from 'react'
import {MdDoneAll} from 'react-icons/md';

function Note({note,title,content,add,remove,done}) {
    const[e,setE]=useState("To do");
  return (
    <div className="note">
          <div className="content">
            <h5>{title}</h5>
            <p>{content}</p>
          </div>
          
          {done === 1 ? <><button className='btn' onClick={() => add(note.id,setE)}>
            <span>{e}</span> 
            <span> <MdDoneAll /></span>
            </button></> : 
            <>
           </>
            
            } 
          
    </div>
  )
}

export default Note;