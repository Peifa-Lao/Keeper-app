import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    //Destructure the event.target
    //Equal to event.target.name/event.target.value
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    //pass it back to app.jsx
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
            //trigger sumbit note here
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </zoom>
      </form>
    </div>
  );
}

export default CreateArea;
