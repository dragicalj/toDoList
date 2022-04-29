import React from 'react'
import Note from './Note';

function Done(props) {
  return (
      <div className='done-containter'>
    <h1 >Done:</h1>
    {props.notes.map((note,index) => {
        return <Note title={note.title} content={note.content} key={index} done={0} />
    })}
    </div>
  )
}

export default Done;