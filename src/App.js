import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {useState} from "react";
import Input from './components/Input';
import Button from './components/Button';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Done from './components/Done';
import {isFieldEmpty} from './components/Validate';
import {showMessage} from './components/Alerts'


function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [doneNote, setDoneNote] = useState([]);

  
  const [doneNum, setDoneNum] = useState(0);
 
  const[id, setId]=useState(0);

  const saveTitle = (event) => {
    setTitle(event.target.value);
  }

  const saveContent = (event) => {
    setContent(event.target.value);
  }
  
  const saveNote = () => {
    
    if (!isFieldEmpty(title) && !isFieldEmpty(content)) {
    let note = {
      id: id,
      title: title,
      content: content,
      done:false
    }

    setId(id+1);
    setDoneNum(doneNum+1);
    setNotes([...notes, note]);
    showMessage("Successfully created.", "success", "center", 3000);
  }else{
    showMessage("Title or content are empty", "error", "center", 3000);
  }
  }

  function addNote(id,setE){
    console.log("dodat je note");
    setE("Done");
     setDoneNum(doneNum-1);   
    
    console.log(notes);
    console.log(id);
    notes.forEach((note) => {
      if(note.id === id){note.done = true;console.log(note.done);}
        
      
    });
   
    refreshSaved();
  }

  
  

  const refreshSaved = () => {
    const newNote = notes.filter((note) => note.done === true);
    setDoneNote(newNote);
  };

  return (
    <>
    <BrowserRouter>
    <Header doneNum={doneNum} />

    <Routes>
      <Route path="/" element={<>
    <NotesList notes={notes} add={addNote}  />
    <hr />
            <div className="create-note">
                <Input 
                  fieldType="text" 
                  fieldPlaceholder="Enter title"
                  fieldOnChange={(event) => {saveTitle(event)}}
                />
                <Input 
                  fieldType="text" 
                  fieldPlaceholder="Enter content"
                  fieldOnChange={(event) => {saveContent(event)}}
                />
                
                <Button buttonOnSubmit={saveNote} buttonTitle="Create" />
            </div>
    </>}/>
      <Route path="/done/*" element={<Done notes={doneNote} />}/>
    </Routes>
    
  </BrowserRouter></>
  );
}

export default App;
