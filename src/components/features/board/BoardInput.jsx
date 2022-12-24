import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBoards } from "../../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
// 다경 수정작업중
import { storage } from "../../../firebase";
import {
  ref,
  uploadString,
  getDownloadURL,
  connectStorageEmulator,
} from "firebase/storage";
import styled from "styled-components";
const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [pw, setPW] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();

  // title change
  const onTitleChange = async (e) => {
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

    // ---------------🐥🐥다경작업🐥🐥-------------------------
    const imgRef = ref(storage, `images/${uuidv4()}`);
    const imgDataUrl = localStorage.getItem("imgDataUrl");
    let downloadUrl;
    // let arr = [];
    const a = "";

    if (imgDataUrl) {
      uploadString(imgRef, imgDataUrl, "data_url")
        .then((response) => {
          downloadUrl = getDownloadURL(response.ref).then((response) => {
            console.log("response : ", response);
            a = response;
            console.log("response : ", response);
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }

    // ---------------🐥🐥다경작업🐥🐥-------------------------
    const newBoard = {
      id: uuidv4(),
      user: user,
      pw: pw,
      title: title,
      content: content,
      ImgUrl: a,
    };

    console.log("newBoard:", newBoard);
    console.log("a : ", a);

    dispatch(__postBoards(newBoard));

    setTitle("");
    setContent("");
    setUser("");
    setPW("");
    navigator("/");
  };

  const onFileChange = (event) => {
    const theFile = event.target.files[0];
    const reader = new FileReader();
    console.log("theFile : ", theFile);
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const imgDataUrl = finishedEvent.currentTarget.result;
      localStorage.setItem("imgDataUrl", imgDataUrl);
      document.getElementById("boardImg").src = imgDataUrl;
    };
  };

  // ---------------🐥🐥다경작업🐥🐥-------------------------
  return (
    <div>
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
        <div id="imgUrl"></div>
        <button>글 등록하기</button>
        {/* // ---------------🐥🐥다경작업🐥🐥------------------------- */}
        <ImgBox src="/image.jpg" id="boardImg" alt="boardImg" />
        <input type="file" onChange={onFileChange} />
        {/* // ---------------🐥🐥다경작업🐥🐥------------------------- */}
      </form>
      <hr />
      <h3>이미지 리스트</h3>
    </div>
  );
};

export default BoardInput;

const ImgBox = styled.img`
  width: 100px;
  height: 100px;
`;
