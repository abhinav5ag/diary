import React from "react";
import AddNote from "./Components/AddNote";
import styled from "styled-components";

import NotesList from "./Components/NotesList";

function App() {
  const [userNote, setUserNote] = React.useState([
    { id: Math.random(), Note: "This is my first Note.", date: "02/09/2020" },
    { id: Math.random(), Note: "This is my second Note.", date: "02/03/2021" },
    { id: Math.random(), Note: "This is my third Note.", date: "02/01/2022" },
  ]);
  const [openEditNote, setOpenEditNote] = React.useState(false);
  const handleNote = (uNote) => {
    const date = new Date();
    setUserNote((prevNote) => {
      return [
        ...prevNote,
        { Note: uNote, id: Math.random(), date: date.toLocaleDateString() },
      ];
    });
  };

  const handleChange = () => {};

  const deleteNode = (id) => {
    const newNotes = userNote.filter((note) => note.id !== id);
    setUserNote(newNotes);
  };

  const editNote = (id) => {
    const newEditNote = userNote.find((note) => {
      return note.id === id;
    });
    setOpenEditNote(true);
  };

  const handleEditedNote = () => {
    setOpenEditNote(false);
  };

  return (
    <div>
      <AddNote onAddNote={handleNote} />
      {openEditNote && (
        <Wrap>
          <textarea onChange={handleChange} />
          <Button onClick={handleEditedNote}>Edit</Button>
        </Wrap>
      )}

      <NotesList
        notes={userNote}
        handleDeleteNote={deleteNode}
        handleEditNote={editNote}
      />
    </div>
  );
}

export default App;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 5px;
  margin-left: 110px;
  border: 3px solid rgb(249, 249, 249);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 10px 10px -10px;
`;

const Wrap = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  border: 3px solid rgb(249, 249, 249);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  background: red;
  height: 150px;
  width: 300px;

  textarea {
    width: 80%;
    height: 50%;
    margin-left: 27px;
    margin-top: 10px;
    border-radius: 10px;
  }
`;
