import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __editBoards } from "../../../redux/modules/boardSlice";

const BoardInput = () => {
  const param = useParams().id;
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [state, setState] = useState({
    id: param,
    title: "",
    content: "",
  });

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

    dispatch(__editBoards(newBoard));

    alert("수정했습니다!");
    // navigator("/");
    setState({
      id: param,
      title: "",
      content: "",
    });
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
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default BoardInput;
