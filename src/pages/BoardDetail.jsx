import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deleteBoards, __getBoards } from "../redux/modules/boardSlice";
import CommentInput from "../components/features/comment/CommentInput";
import CommentList from "../components/features/comment/CommentList";
import { useEffect } from "react";
import { __getComments } from "../redux/modules/commentSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const board = useSelector((state) => state.boardSlice.board);
  const param = useParams().id;

  //렌더링할 때 댓글리스트 조회
  useEffect(() => {
    dispatch(__getBoards());
    dispatch(__getComments());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(__deleteBoards(id));
    navigator("/");
  };

  //해당 게시물의 댓글만 불러오도록 filter 하고나서 map
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
      <CommentList param={param} />
    </Layout>
  );
};

export default Detail;
