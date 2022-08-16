import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    //trigger the deleteNode function on app.js
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
