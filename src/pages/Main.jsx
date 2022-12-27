import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BoardList from "../components/features/board/BoardList";
import Layout from "../components/UI/Layout";
import { __getBoards } from "../redux/modules/boardSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Main page 에 필요한 요소 import
// ex) boardList (게시글 전체 list)
// header & footer => Layout에 존재하기 때문에 자동 포함

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  return (
    <Layout>
      <DetailLink to={`/boardwrite`}>글쓰기</DetailLink>
      <h2>최근 작성한 게시물</h2>
      <BoardList />
    </Layout>
  );
};

export default Main;

const DetailLink = styled(Link)`
  text-decoration: none;
`;
