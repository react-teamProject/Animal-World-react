import React from "react";
import Layout from "../components/UI/Layout";
import { useDispatch } from "react-redux";
import { __deleteBoards, __getBoards } from "../redux/modules/boardSlice";
import CommentInput from "../components/features/comment/CommentInput";
import CommentList from "../components/features/comment/CommentList";
import { useEffect } from "react";
import { __getComments } from "../redux/modules/commentSlice";
import BoardItemDetail from "../components/features/board/BoardItemDetail";

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams().id;

  //렌더링할 때 댓글리스트 조회
  useEffect(() => {
    dispatch(__getBoards());
    dispatch(__getComments());
  }, [dispatch]);

  //해당 게시물의 댓글만 불러오도록 filter 하고나서 map
  return (
    <Layout>
      <BoardItemDetail />
      <CommentInput param={param} />
      <CommentList param={param} />
    </Layout>
  );
};

export default Detail;
