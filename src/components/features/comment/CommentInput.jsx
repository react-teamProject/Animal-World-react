import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../redux/modules/commentSlice";
import { toast } from "react-toastify";

const CommentInput = ({ param }) => {
  //useState를 하나만 쓰고 객체 분해 할당하여 이용함.
  const [comment, setComment] = useState({
    boardId: param,
    id: "",
    user: "",
    pw: "",
    content: "",
    time: "",
  });

  // ref (빈칸 공백 방지에 이용)
  const userInput = useRef();
  const pwInput = useRef();
  const contentInput = useRef();

  const dispatch = useDispatch();

  // onsubmitHandler
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 입력칸 공백 방지

    //객체 분해 할당해주고 사용
    const { content, user, pw } = comment;

    //useRef 이용하여 리팩토링 (공백 방지)
    if (!user && !pw && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      userInput.current.focus();
      return;
    } else if (!content && !pw) {
      toast.warning("빈칸을 모두 입력해주세요!");
      pwInput.current.focus();
      return;
    } else if (!user && !pw) {
      toast.warning("빈칸을 모두 입력해주세요!");
      userInput.current.focus();
      return;
    } else if (!user && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      userInput.current.focus();
      return;
    } else if (!user) {
      toast.warning("닉네임을 입력해주세요!");
      userInput.current.focus();
      return;
    } else if (!pw) {
      toast.warning("비밀번호를 설정해주세요!");
      pwInput.current.focus();
      return;
    } else if (!content) {
      toast.warning("댓글 내용을 입력해주세요!");
      contentInput.current.focus();
      return;
    }

    const newComment = {
      boardId: param,
      id: uuidv4(),
      user: user,
      pw: pw,
      content: content,
      time: new Date().toLocaleString(),
    };

    dispatch(__postComment(newComment));

    //댓글 추가하고 인풋 비워주기
    setComment({
      boardId: param,
      id: "",
      user: "",
      pw: "",
      content: "",
      time: "",
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
        ref={userInput}
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
        ref={pwInput}
      />
      <textarea
        id="content"
        value={comment.content}
        onChange={(e) => {
          const { id, value } = e.target;
          setComment({ ...comment, [id]: value });
        }}
        placeholder="댓글을 입력해주세요"
        ref={contentInput}
      />
      <button>댓글 등록하기</button>
    </form>
  );
};

export default CommentInput;
