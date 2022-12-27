import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

const CommentList = ({ param }) => {
  const comment = useSelector((state) => state.commentSlice.comment);

  // commentItem에 넣었더니 filter에서 걸려서 안 불러와진다.
  const { isLoading, error } = useSelector((state) => state.commentSlice);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div>
        {comment
          .filter((item) => item.boardId === param)
          .map((item) => {
            return <CommentItem key={item.id} comment={item} />;
          })
          .sort((a, b) => a.time - b.time)
          .reverse()}
      </div>
    </div>
  );
};

export default CommentList;
