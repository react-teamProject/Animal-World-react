import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteBoards } from "../redux/modules/boardSlice";
import CommentInput from "../components/features/comment/CommentInput";

const Detail = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);

  const param = useParams().id;

  const navigator = useNavigate();

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
              <h3>{item.title}</h3>
              <p>{item.user}</p>
              <p>{item.content}</p>
              <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
            </div>
          );
        })}
      <CommentInput param={param} />
      <div>댓글 입력</div>
      <div>댓글 리스트</div>
    </Layout>
  );
};

export default Detail;
