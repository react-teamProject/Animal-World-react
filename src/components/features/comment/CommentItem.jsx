import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteComment,
  __editComment,
} from "../../../redux/modules/commentSlice";
const CommentItem = ({ comment }) => {
  const { id, user, content } = comment;
  const dispatch = useDispatch();

  // delete handler
  const onClickDeleteHandler = (id) => {
    dispatch(__deleteComment(id));
  };
  const [commentContent, setCommentContent] = useState(content);
  console.log(commentContent);

  const OnClickEditCommentHandler = (id) => {
    const newComment = {
      id: id,
      content: commentContent,
    };
    dispatch(__editComment(newComment));
  };

  return (
    <div>
      <div>
        <p>{user}</p>
        <p>{content}</p>
        <button onClick={() => onClickDeleteHandler(id)}>삭제</button>
        <button onClick={() => OnClickEditCommentHandler(id)}>수정</button>
        <div>
          <input
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <input type="password" placeholder="비밀번호" />
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
