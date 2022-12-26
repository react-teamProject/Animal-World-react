import React from "react";
import { useSelector } from "react-redux";
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
      </DetailLink>
    </div>
  );
};

export default BoardItem;

const DetailLink = styled(Link)`
  text-decoration: none;
`;
