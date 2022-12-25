import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/UI/Layout";
import { __deleteBoards, __getBoards } from "../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import BoardUpdate from "../components/features/board/BoardUpdate";

const Detail = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);
  const navigator = useNavigate();
  const param = useParams().id;
  //console.log(board);

  // 비밀번호 일치 시 삭제
  const a = board.filter((item) => item.id === param).map((item) => item)[0];
  const b = a["pw"];
  const [pwTest, setPWTest] = useState("");

  const pwChangeHandler = (event) => {
    setPWTest(event.target.value);
  };

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  // delete handler
  const onDeleteHandler = (id) => {
    if (pwTest === b) {
      dispatch(__deleteBoards(id));
      navigator("/");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
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
              <div>비밀번호 임시: {item.pw}</div>
              <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
              <input
                type="password"
                placeholder="비밀번호 입력"
                onChange={pwChangeHandler}
              />
            </div>
          );
        })}
      <BoardUpdate />
      <div>새로고침?</div>
    </Layout>
  );
};

export default Detail;
