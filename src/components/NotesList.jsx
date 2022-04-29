import React from 'react'
import Note from './Note';

export default function NotesList({notes,add,remove}) {
    return (
        <div className="notes-list">
            {notes.map((note) => {
                console.log(note.id);
                if(note.done === false){
                return <Note note={note} title={note.title} content={note.content} key={note.id} add={add} remove={remove} done={1}/>
                }else{
                    return <></>;
                }
            })}
        </div>
    );
}