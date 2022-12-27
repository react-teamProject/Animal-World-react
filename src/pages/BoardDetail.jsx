import React from "react";
import Layout from "../components/UI/Layout";
import BoardItemDetail from "../components/features/board/BoardItemDetail";
import MainLayout from "../components/UI/MainLayout";
import CommentList from "../components/features/comment/CommentList";
import CommentInput from "../components/features/comment/CommentInput";
import { useParams } from "react-router";

const Detail = () => {
  const param = useParams().id;
  console.log(param);
  return (
    <Layout>
      <MainLayout>
        <BoardItemDetail />
        <CommentInput param={param} />
        <CommentList param={param} />
      </MainLayout>
    </Layout>
  );
};

export default Detail;
