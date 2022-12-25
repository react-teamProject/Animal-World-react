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
    } else {
      alert("비밀번호가 틀렸습니다");
      setPassword("");
    }
  };

  return (
    <div>
      <div>
        <p>{user}</p>
        <p>{content}</p>
        <p>임시 비번: {pw}</p>
        <button onClick={() => onClickDeleteHandler(id)}>삭제</button>
        <button onClick={() => OnClickEditCommentHandler(id)}>수정</button>
        <div>
          <input
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            value={password}
          />
          <button onClick={() => OnClickEditCommentHandler(id)}>
            수정완료
          </button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
