import React from "react";
import styled from "styled-components";

function AddNote(props) {
  const [Note, updateNote] = React.useState("");

  const handleNoteChange = (event) => {
    event.preventDefault();
    updateNote(event.target.value);
  };

  const handleFormSubmit = () => {
    props.onAddNote(Note);
    updateNote("");
  };

  return (
    <Container>
      <Wrap>
        <Form>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="Note">Write Your Post</label>
            <input type="text" value={Note} onChange={handleNoteChange} />
          </form>
        </Form>
        <Add onClick={handleFormSubmit}>Add Post</Add>
      </Wrap>
    </Container>
  );
}

export default AddNote;

const Container = styled.div`
   ;
`;

const Wrap = styled.div`
  height: 250px;
  width: 200px;
  margin-top: 50px;
  margin-left: 50px;
  border: 3px solid rgb(249, 249, 249);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  background: orange;
`;

const Add = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 15%;
  margin-left: 25%;
  border: 3px solid rgb(249, 249, 249);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 10px 10px -10px;
`;

const Form = styled.div`
  margin-top: 10px;
  margin-left: 15px;

  input {
    height: 100px;
    border-radius: 5px;
    margin-top: 10px;
  }

  label {
    margin-left: 4px;
  }
`;

const Edit = styled.div`
  height: 23px;
  width: 23px;
  cursor: pointer;

  margin-bottom: 5px;
  margin-left: 10px;
  img {
    height: 100%;
    width: 100%;
  }
`;
