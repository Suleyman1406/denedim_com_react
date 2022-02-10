import React from "react";
import styled from "styled-components";
import { useComments } from "../Context/CommentsContext";
import { useProfile } from "../Context/ProfileContext";
import { ContentContainer as Container } from "./CommentPage";
import Comments from "./Comments";

const Header = styled.h2`
  padding: 20px 20px 10px 20px;
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0 0 10px;
  display: inline-block;
  border-bottom: 1px solid rgba(220, 220, 220, 0.7);
`;
const NoContent = styled.div`
  color: rgb(192, 192, 192);
  text-align: center;
  margin-top: 18%;
  font-size: 50px;
  font-weight: 500;
`;
const SavedComments = () => {
  const { isLogged, savedCommentsId } = useProfile();
  const { comments, setComments } = useComments();

  return (
    <Container isLogged={isLogged}>
      <Header>Kaydedilenler</Header>
      <Comments
        comments={comments.filter((e) => savedCommentsId.includes(e.id))}
        setComments={setComments}
      />
      {savedCommentsId.length === 0 && (
        <NoContent>Kaydettiğiniz bir yorum yok.</NoContent>
      )}
    </Container>
  );
};

export default SavedComments;
