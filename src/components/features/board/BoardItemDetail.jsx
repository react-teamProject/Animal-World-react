import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  __deleteBoards,
  __getBoards,
  __editBoards,
} from "../../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BoardItemDetail = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boardSlice.board);
  const navigator = useNavigate();
  const param = useParams().id;

  const [state, setState] = useState({
    id: param,
    title: "",
    content: "",
    pw: "",
  });

  // 비밀번호 일치 시 삭제
  const a = board.filter((item) => item.id === param).map((item) => item)[0];
  const password = a["pw"];
  const [pwTest, setPWTest] = useState("");

  const pwChangeHandler = (event) => {
    setPWTest(event.target.value);
  };

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  // delete handler
  const onDeleteHandler = (id) => {
    if (pwTest === password) {
      dispatch(__deleteBoards(id));
      toast.success("삭제가 완료되었습니다!");
      navigator("/");
    } else {
      toast.error("비밀번호가 일치하지 않습니다.");
      setPWTest("");
    }
  };

  // edit handler
  const onEditHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();

    const { title, content } = state;

    // 입력칸 공백 방지
    if (!title || !content) {
      toast.warning("제목과 내용 모두 입력하세요");
      return;
    }

    if (pwTest === password) {
      const newBoard = {
        id: param,
        title: title,
        content: content,
      };
      dispatch(__editBoards(newBoard));
      toast.success("수정했습니다!");
      toggleEditInput();
    } else {
      toast.error("비밀번호가 일치하지 않습니다.");
      setPWTest("");
    }
  };

  // show 여부를 결정하는 state
  const [showEdit, setShowEdit] = useState(true);
  const [showDelete, setShowDelete] = useState(true);

  // 수정 input toggle
  const toggleEditInput = () => {
    setShowEdit((current) => !current);
    setPWTest("");
  };

  // delete input toggle
  const toggleDeleteInput = () => {
    setShowDelete((current) => !current);
    setPWTest("");
  };

  return (
    <>
      {board
        .filter((item) => item.id === param)
        .map((item) => {
          return (
            <div key={item.id}>
              <div style={{ display: showEdit ? "block" : "none" }}>
                {item.title}
              </div>
              <div style={{ display: showEdit ? "block" : "none" }}>
                {item.content}
              </div>

              <div>비밀번호 임시: {item.pw}</div>

              <div
                style={{ display: showDelete && showEdit ? "block" : "none" }}
              >
                <button onClick={toggleDeleteInput}>삭제</button>
                <button onClick={toggleEditInput}>수정</button>
              </div>

              <div style={{ display: showEdit ? "none" : "block" }}>
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  onChange={pwChangeHandler}
                />
                <input
                  type="text"
                  id="title"
                  value={state.title}
                  onChange={(e) => {
                    const { id, value } = e.target;
                    setState({ ...state, [id]: value });
                  }}
                  placeholder="제목을 입력해주세요"
                />
                <textarea
                  id="content"
                  value={state.content}
                  onChange={(e) => {
                    const { id, value } = e.target;
                    setState({ ...state, [id]: value });
                  }}
                  placeholder="내용을 입력해주세요"
                />
                <button
                  onClick={(e) => {
                    onEditHandler(e);
                  }}
                >
                  수정완료
                </button>
                <button onClick={toggleEditInput}>취소</button>
              </div>

              <div style={{ display: showDelete ? "none" : "block" }}>
                <input
                  type="password"
                  onChange={(e) => setPWTest(e.target.value)}
                  placeholder="비밀번호"
                  value={pwTest}
                />
                <button onClick={() => onDeleteHandler(item.id)}>
                  삭제완료
                </button>
                <button onClick={toggleDeleteInput}>취소</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BoardItemDetail;
