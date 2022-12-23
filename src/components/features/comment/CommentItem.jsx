import React from "react";
import { useDispatch } from "react-redux";
import { __deleteComment } from "../../../redux/modules/commentSlice";

const CommentItem = ({ comment }) => {
  const dispatch = useDispatch();

  // delete handler
  const onDeleteHandler = (id) => {
    dispatch(__deleteComment(id));
  };

  return (
    <div>
      <div>
        <p>{comment.user}</p>
        <p>{comment.content}</p>
        <button onClick={() => onDeleteHandler(comment.id)}>삭제</button>
      </div>
    </div>
  );
};

export default CommentItem;
