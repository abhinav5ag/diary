import React from "react";
import styled from "styled-components";

function Comment() {
  const [comment, setComment] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);
  const [newComment, setNewComment] = React.useState("");
  const [toggleComment, setToggleComment] = React.useState(true);
  const handleComment = () => {
    setAddComment(true);
    setToggleComment(false);
  };

  const handleAddComment = () => {
    setAddComment(false);
    setComment(true);
    setToggleComment(true);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  return (
    <Container>
      {comment && (
        <Wrap>
          <Comments>{newComment}</Comments>
          <Functions>
            <Edit>
              <img src="/images/edit.png" alt="" />
            </Edit>
            <Delete>
              <img src="/images/delete.png" alt="" />
            </Delete>
          </Functions>
        </Wrap>
      )}
      {addComment && (
        <AddComment>
          <textarea onChange={handleChange}></textarea>
          <AddButton onClick={handleAddComment}>Post</AddButton>
        </AddComment>
      )}
      {toggleComment && (
        <CommentIcon onClick={handleComment}>
          <img src="/images/comment.png" alt="" />
        </CommentIcon>
      )}
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Comments = styled.div``;
const AddComment = styled.div`
  margin-top: 5px;
  margin-left: 17px;
  border: 3px solid rgb(249, 249, 249);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  background: red;
  height: 100px;
  width: 200px;

  textarea {
    width: 80%;
    height: 50%;
    margin-left: 18px;
    margin-top: 6px;
    border-radius: 10px;
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
const Delete = styled.div`
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin-left: 6px;
  margin-bottom: 5px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Functions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const AddButton = styled.button`
  cursor: pointer;
  padding: 2px 7px;
  margin-top: 1%;
  margin-left: 75px;
  border: 3px solid rgb(249, 249, 249);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 10px 10px -10px;
`;

const CommentIcon = styled.div`
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin-left: 208px;
  margin-bottom: 5px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Wrap = styled.div``;
