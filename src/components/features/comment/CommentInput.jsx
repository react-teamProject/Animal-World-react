import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../redux/modules/commentSlice";

const CommentInput = ({ param }) => {
  //useState를 하나만 쓰고 객체 분해 할당하여 이용함.
  const [comment, setComment] = useState({
    boardId: param,
    id: "",
    user: "",
    pw: "",
    content: "",
  });

  const dispatch = useDispatch();

  // onsubmitHandler
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 입력칸 공백 방지

    //객체 분해 할당해주고 사용
    const { content, user, pw } = comment;

    if (!user) {
      alert("닉네임을 입력하세요");
      document.getElementById("user").focus();
      return;
    } else if (!pw) {
      alert("비밀번호를 입력하세요");
      document.getElementById("pw").focus();
      return;
    } else if (!content) {
      alert("댓글을 입력하세요");
      document.getElementById("content").focus();
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

    //댓글 추가하고 인풋 비워주기
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
        placeholder="댓글을 입력해주세요"
      />
      <button>댓글 등록하기</button>
    </form>
  );
};

export default CommentInput;
