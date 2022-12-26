import React from "react";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";
import styled from "styled-components";

const BoardList = () => {
  const board = useSelector((state) => state.boardSlice.board);

  return (
    <div key={board}>
      <Container>
        {board.map((item) => {
          return <BoardItem key={item.id} board={item} />;
        })}
      </Container>
    </div>
  );
};

export default BoardList;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
