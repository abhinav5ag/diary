import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

function Notes(props) {
  const [comment, setComment] = React.useState(true);
  const editNoteHandler = () => {
    props.handleEditNote(props.id);
  };
  const deleteNoteHandler = (event) => {
    props.handleDeleteNote(props.id);
  };

  return (
    <Wrap>
      <Text>{props.text}</Text>
      <Date>{props.date}</Date>
      {comment && <Comment />}
      <Functions>
        <Edit onClick={editNoteHandler}>
          <img src="/images/edit.png" alt="" />
        </Edit>
        <Delete onClick={deleteNoteHandler}>
          <img src="/images/delete.png" alt="" />
        </Delete>
      </Functions>
    </Wrap>
  );
}

export default Notes;

const Wrap = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  border: 3px solid rgb(249, 249, 249);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  background: red;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 5px;
  line-height: 1.2;
  overflow: hidden;
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
const Delete = styled.div`
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin-left: 174px;
  margin-bottom: 5px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 5px;
  line-height: 1.2;
`;

const Functions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
