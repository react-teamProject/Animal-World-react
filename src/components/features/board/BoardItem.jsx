import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteBoards } from "../../../redux/modules/boardSlice";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.boardSlice);

  const navigator = useNavigate();

  // delete handler
  const onDeleteHandler = (id) => {
    dispatch(__deleteBoards(id));
    navigator("/");
  };

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <DetailLink to={`/${board.id}`} key={board.id}>
          자세히보기
        </DetailLink>
        <h3>{board.title}</h3>
        <p>{board.user}</p>
        <p>{board.content}</p>
        <button onClick={() => onDeleteHandler(board.id)}>삭제</button>
      </div>
    </div>
  );
};

export default BoardItem;

const DetailLink = styled(Link)`
  text-decoration: none;
`;
