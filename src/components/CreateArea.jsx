import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => {
            setIsExpanded(true);
          }}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        {isExpanded && (
          <Zoom in={isExpanded}>
            <IconButton onClick={submitNote}>
              <AddIcon />
            </IconButton>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
