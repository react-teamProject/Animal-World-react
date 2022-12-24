import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __editBoards } from "../../../redux/modules/boardSlice";

const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const param = useParams().id;
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // title change
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // content change
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  // onsubmitHandler
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 입력칸 공백 방지
    if (!title || !content) {
      alert("제목과 내용 모두 입력하세요");
      return;
    }

    const newBoard = {
      title: title,
      content: content,
    };

    const newArr = [param, newBoard];

    dispatch(__editBoards(newArr));
    setTitle("");
    setContent("");

    alert("수정했습니다!");
    navigator("/");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력해주세요"
        />
        <textarea
          id="content"
          value={content}
          onChange={onContentChange}
          placeholder="내용을 입력해주세요"
        />
        <button>수정하기</button>
      </form>
    </div>
  );
};

export default BoardInput;
