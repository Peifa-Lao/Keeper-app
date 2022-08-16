import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  //receive the newNote object and add into the notes
  function addNote(newNote) {
    //add newNote to notes
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      //first return is return to notes above for update
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
    //receiving data from CreateArea and calling addNote function in app.jsx
      <CreateArea onAdd={addNote} />

     //{} indicates javascript 
     //use arrow function to pass Note to map throught all array of notes  
     //map function is going to loop throught the notes array
     //map function can provide index for id or using uuid
     //noteItem represent each of items in notes
   

      {notes.map((noteItem, index) => {
        return (
          //render note component and create a new note using the properties from that note
          //pass properties to Node component
          //pass props(key,id, title,content,ondelete) to Node component
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
