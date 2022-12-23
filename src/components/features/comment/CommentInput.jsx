import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../redux/modules/commentSlice";
import { useNavigate } from "react-router-dom";

const CommentInput = ({ param }) => {
  const [comment, setComment] = useState({
    boardId: param,
    id: "",
    user: "",
    pw: "",
    content: "",
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();

  // onsubmitHandler
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 입력칸 공백 방지
    const { content, user, pw } = comment;
    if (!content || !user || !pw) {
      alert(" 모든 칸에 입력하세요");
      return;
    }

    const newComment = {
      boardId: param,
      id: uuidv4(),
      user: user,
      pw: pw,
      content: content,
    };

    dispatch(__postComment(newComment));
    setComment({
      boardId: param,
      id: "",
      user: "",
      pw: "",
      content: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="content"
        id="user"
        value={comment.user}
        onChange={(e) => {
          const { id, value } = e.target;
          setComment({ ...comment, [id]: value });
        }}
        placeholder="닉네임"
      />
      <input
        type="password"
        id="pw"
        value={comment.pw}
        onChange={(e) => {
          const { id, value } = e.target;
          setComment({ ...comment, [id]: value });
        }}
        placeholder="비밀번호"
      />
      <textarea
        id="content"
        value={comment.content}
        onChange={(e) => {
          const { id, value } = e.target;
          setComment({ ...comment, [id]: value });
        }}
        placeholder="내용을 입력해주세요"
      />
      <button>댓글 등록하기</button>
    </form>
  );
};

export default CommentInput;
