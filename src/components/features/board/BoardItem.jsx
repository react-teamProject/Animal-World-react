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
        <ImgTag src={board.ImgUrl} alt="boardImg" />
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
