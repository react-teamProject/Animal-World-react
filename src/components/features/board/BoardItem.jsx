import React from "react";
import { useSelector } from "react-redux";
import { __deleteBoards } from "../../../redux/modules/boardSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardItem = ({ board }) => {
  const { isLoading, error } = useSelector((state) => state.boardSlice);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <DetailLink to={`/${board.id}`} key={board.id}>
        <h3>{board.title}</h3>
        <p>{board.user}</p>
        <p>{board.content}</p>
        <ImgTag
          src="https://firebasestorage.googleapis.com/v0/b/palpalhajo.appspot.com/o/images%2F30f68189-fb3f-4017-983a-6e71a4402291?alt=media&token=c2234fc3-7f8f-4115-a9e6-91b366c0c9a3"
          alt="boardImg"
        />
      </DetailLink>
    </div>
  );
};

export default BoardItem;

const DetailLink = styled(Link)`
  text-decoration: none;
`;

const ImgTag = styled.img`
  width: 100px;
  height: 100px;
`;
