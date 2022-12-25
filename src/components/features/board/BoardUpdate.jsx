import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __editBoards } from "../../../redux/modules/boardSlice";

const BoardInput = () => {
  const param = useParams().id;
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);

  const [state, setState] = useState({
    id: param,
    title: "",
    content: "",
  });

  // 비밀번호 일치 시 삭제
  const a = board.filter((item) => item.id === param).map((item) => item)[0];
  const b = a["pw"];
  const [pwTest, setPWTest] = useState("");

  const pwChangeHandler = (event) => {
    setPWTest(event.target.value);
  };

  // onsubmitHandler
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    const { title, content } = state;

    // 입력칸 공백 방지
    if (!title || !content) {
      alert("제목과 내용 모두 입력하세요");
      return;
    }

    const newBoard = {
      id: param,
      title: title,
      content: content,
    };

    if (pwTest === b) {
      dispatch(__editBoards(newBoard));
      alert("수정했습니다!");
      setState({
        id: param,
        title: "",
        content: "",
      });
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setState({
        id: param,
        title: "",
        content: "",
      });
      return;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="title"
          value={state.title}
          onChange={(e) => {
            const { id, value } = e.target;
            setState({ ...state, [id]: value });
          }}
          placeholder="제목을 입력해주세요"
        />
        <textarea
          id="content"
          value={state.content}
          onChange={(e) => {
            const { id, value } = e.target;
            setState({ ...state, [id]: value });
          }}
          placeholder="내용을 입력해주세요"
        />
        <input
          id="pwpw"
          type="password"
          placeholder="비밀번호 입력"
          onChange={pwChangeHandler}
        />
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default BoardInput;
