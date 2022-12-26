import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteComment,
  __editComment,
} from "../../../redux/modules/commentSlice";
const CommentItem = ({ comment }) => {
  const { id, user, content, pw } = comment;
  const dispatch = useDispatch();

  // 댓글 삭제 handler, 비밀번호 확인 후 삭제
  const onClickDeleteHandler = (id) => {
    if (pw === password) {
      dispatch(__deleteComment(id));
      toggledeleteInput();
    } else {
      alert("비밀번호가 틀렸습니다");
      setPassword("");
    }
  };
  const [commentContent, setCommentContent] = useState(content);
  const [password, setPassword] = useState("");

  //댓글 수정 handler, 비밀번호 확인 후 수정
  const OnClickEditCommentHandler = (id) => {
    if (pw === password) {
      const newComment = {
        id: id,
        content: commentContent,
      };
      dispatch(__editComment(newComment));
      toggleEditInput();
    } else {
      alert("비밀번호가 틀렸습니다");
      setPassword("");
    }
  };

  // show 여부를 결정하는 state
  const [showEdit, setShowEdit] = useState(true);
  const [showDelete, setShowDelete] = useState(true);

  //수정 input 토글
  const toggleEditInput = () => {
    setShowEdit((current) => !current);
    setPassword("");
  };

  // 삭제 input 토글
  const toggledeleteInput = () => {
    setShowDelete((current) => !current);
    setPassword("");
  };

  return (
    <div>
      <p>닉네임: {user}</p>

      <p style={{ display: showEdit ? "block" : "none" }}>내용: {content}</p>
      <input
        style={{ display: showEdit ? "none" : "block" }}
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      <p>임시 비번: {pw}</p>

      <div style={{ display: showDelete && showEdit ? "block" : "none" }}>
        <button onClick={toggledeleteInput}>삭제</button>
        <button onClick={toggleEditInput}>수정</button>
      </div>

      <div style={{ display: showEdit ? "none" : "block" }}>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          value={password}
        />
        <button
          onClick={() => {
            OnClickEditCommentHandler(id);
          }}
        >
          수정완료
        </button>
        <button onClick={toggleEditInput}>취소</button>
      </div>

      <div style={{ display: showDelete ? "none" : "block" }}>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          value={password}
        />
        <button onClick={() => onClickDeleteHandler(id)}>삭제완료</button>
        <button onClick={toggledeleteInput}>취소</button>
      </div>
    </div>
  );
};

export default CommentItem;
