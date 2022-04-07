import React from "react";
import styled from "styled-components";
import Notes from "./Notes";

function NotesList(props) {
  return (
    <Container>
      {props.notes.map((notes) => (
        <Notes
          id={notes.id}
          text={notes.Note}
          date={notes.date}
          handleDeleteNote={props.handleDeleteNote}
          handleEditNote={props.handleEditNote}
        />
      ))}
    </Container>
  );
}

export default NotesList;

const Container = styled.div`
  margin-top: -20px;
  grid-gap: 10px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
