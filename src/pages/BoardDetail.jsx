import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout";
// import styled from "styled-components";
//import { getBoardID } from "../redux/modules/boardSlice";
import BoardItem from "../components/features/board/BoardItem";

const Detail = () => {
  //const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);

  const param = useParams().id;

  // useEffect(() => {
  //   dispatch(getBoardID(id));
  // }, [dispatch, id]);

  return (
    <Layout>
      {board
        .filter((item) => item.id === param)
        .map((item) => {
          return <BoardItem key={item.id} board={item} />;
        })}
    </Layout>
  );
};

export default Detail;
