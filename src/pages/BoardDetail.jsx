import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/UI/Layout";
import { __deleteBoards } from "../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
// import BoardItem from "../components/features/board/BoardItem";

const Detail = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);
  const navigator = useNavigate();
  const param = useParams().id;

  // delete handler
  const onDeleteHandler = (id) => {
    dispatch(__deleteBoards(id));
    navigator("/");
  };

  return (
    <Layout>
      {board
        .filter((item) => item.id === param)
        .map((item) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.content}</div>
              <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
            </div>
          );
        })}
    </Layout>
  );
};

export default Detail;
