import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBoards } from "../../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";

const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [pw, setPW] = useState("");

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

  // user, pw change
  const onUserChange = (e) => {
    setUser(e.target.value);
  };

  const onPWChange = (e) => {
    setPW(e.target.value);
  };

  // onsubmitHandler

  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 입력칸 공백 방지
    if (!title || !content || !user || !pw) {
      alert("제목과 내용 모두 입력하세요");
      return;
    }

    const newBoard = {
      id: uuidv4(),
      user: user,
      pw: pw,
      title: title,
      content: content,
    };

    dispatch(__postBoards(newBoard));
    setTitle("");
    setContent("");
    setUser("");
    setPW("");
    navigator("/");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        id="user"
        value={user}
        onChange={onUserChange}
        placeholder="닉네임"
      />
      <input
        type="password"
        id="pw"
        value={pw}
        onChange={onPWChange}
        placeholder="비밀번호"
      />
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
      <button>글 등록하기</button>
    </form>
  );
};

export default BoardInput;
