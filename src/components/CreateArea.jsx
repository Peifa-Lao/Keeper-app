import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  
  //the initial state of the ojbect(title&content) set to ""

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  //Once onChange on input & textarea get event, will trigger this function
  function handleChange(event) {
    
    //Destructure the event.target
    //Equal to event.target.name/event.target.value
    
    const { name, value } = event.target;
    
    //setNode first receive the preNote, add name and value into setNote, then return to setNode
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  
  //the event is trigger by onClick
  function submitNote(event) {
    
    //calling this onAdd is equivalent to calling onAdd at app.js
    //pass over current created note back to app.jsx
    props.onAdd(note);
    
    //clear the node inside the box after submition
    setNote({
      title: "",
      content: ""
    });
    
    //prevent reload the web
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
    
        //In input and textarea, it get note.title & note.content from note above 
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        
        <textarea
          name="content"
          //trigger expand function
          onClick={expand}
          //Trigger handleChange function
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
            
        <zoom in={isExpanded}>
           //trigger sumbitNote function here
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </zoom>

      </form>
    </div>
  );
}

export default CreateArea;
