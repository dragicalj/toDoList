import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {useState} from "react";
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveTitle = (event) => {
    setTitle(event.target.value);
  }

  const saveContent = (event) => {
    setContent(event.target.value);
  }

  const saveNote = () => {
    let note = {
      title: title,
      content: content  
    }

    setNotes([...notes, note]);
  }

  return (
    <>
    <Header />
    <NotesList notes={notes} />
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
    </>
  
  );
}

export default App;
