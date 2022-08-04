import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
    //header component
      <Header />
    //create area component and {} is javascript expression
      <CreateArea onAdd={addNote} />
     //{} indicates javascript 
     //use arrow function to pass Note to map throught all array of notes  
     //map function is going to loop throught the notes array
     //noteItem has index, or can use UUID
      {notes.map((noteItem, index) => {
        return (
          //render note component and create a new note using the properties from that note
          //pass properties to Node component 
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      //Footer component
      <Footer />
    </div>
  );
}

export default App;
