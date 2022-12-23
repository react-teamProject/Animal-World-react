import React from "react";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";

const BoardList = () => {
  const board = useSelector((state) => state.boardSlice.board);

  return (
    <div>
      <div>
        <h2>최근 작성한 게시물</h2>
        {board &&
          board.map((item) => {
            return <BoardItem key={item.id} board={item} />;
          })}
      </div>
    </div>
  );
};

export default BoardList;
