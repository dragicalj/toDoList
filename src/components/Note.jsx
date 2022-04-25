import React from 'react'
import {MdDoneAll} from 'react-icons/md';

function Note(props) {
    
  return (
    <div className="note">
          <div className="content">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
          </div>
          <button className='btn' onClick={props.add}><MdDoneAll /></button>
    </div>
  )
}

export default Note;