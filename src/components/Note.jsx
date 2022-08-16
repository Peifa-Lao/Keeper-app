import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

//(props) receiving data from App.js 

function Note(props) {
  
  function handleClick() {
    //trigger the deleteNode function on app.js since <Note /> has onDelete and call deleteNote
    //(props.id) is pick up the id sent from app.js <Node />
    props.onDelete(props.id);
  }

  return (
    //className note in css
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      //when the button is clicked, going to handleClick
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
