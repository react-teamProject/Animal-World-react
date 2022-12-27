import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBoards } from "../../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import styled from "styled-components";
import { toast } from "react-toastify";

const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [pw, setPW] = useState("");
  //------------------------------------
  // new Date 사용하여 현재시간 추가
  const date = new Date().toLocaleString();
  // -----------------------------------
  const [fireURL, setFireURL] = useState("");
  const [fireCheck, setFireCheck] = useState("");
  //------------------------------------
  //useEffect를 사용해서 최초 uploadImg를 실행해준다.
  useEffect(() => {
    uploadImg();
    console.log("test가 업데이트 되었습니다.");
  }, [fireCheck]);
  //------------------------------------

  const dispatch = useDispatch();
  const navigator = useNavigate();

  // ref (빈칸 공백 방지 때 사용)
  const usernameInput = useRef();
  const boardTitleInput = useRef();
  const boardContentInput = useRef();
  const PWInput = useRef();

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
    if (!user && !pw && !title && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!pw && !title && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      PWInput.current.focus();
      return;
    } else if (!user && !title && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!user && !pw && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!user && !pw && !title) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!title && !content) {
      toast.warning("제목과 내용을 입력해주세요!");
      boardTitleInput.current.focus();
      return;
    } else if (!pw && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      PWInput.current.focus();
      return;
    } else if (!pw && !title) {
      toast.warning("빈칸을 모두 입력해주세요!");
      PWInput.current.focus();
      return;
    } else if (!user && !content) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!user && !title) {
      toast.warning("빈칸을 모두 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!user && !pw) {
      toast.warning("반려동물 이름과 비밀번호를 입력해주세요!");
      usernameInput.current.focus();
      return;
    } else if (!content) {
      toast.warning("내용을 입력해주세요!");
      boardContentInput.current.focus();
      return;
    } else if (!title) {
      toast.warning("제목을 입력해주세요!");
      boardTitleInput.current.focus();
      return;
    } else if (!pw) {
      toast.warning("비밀번호를 입력해주세요!");
      PWInput.current.focus();
      return;
    } else if (!user) {
      toast.warning("반려동물 이름을 입력해주세요!");
      usernameInput.current.focus();
      return;
    }

    const newBoard = {
      id: uuidv4(),
      user: user,
      pw: pw,
      title: title,
      content: content,
      ImgUrl: fireURL,
      date: date,
    };

    console.log("newBoard:", newBoard);
    console.log("fireURL:", fireURL);

    dispatch(__postBoards(newBoard));

    setTitle("");
    setContent("");
    setUser("");
    setPW("");
    navigator("/");
  };

  //-----------------------------------------------------
  // uploadImg : 사진 추가 메소드
  const uploadImg = () => {
    const imgRef = ref(storage, `images/${uuidv4()}`);
    const imgDataUrl = localStorage.getItem("imgDataUrl");
    let downloadUrl;
    if (imgDataUrl) {
      uploadString(imgRef, imgDataUrl, "data_url")
        .then((response) => {
          downloadUrl = getDownloadURL(response.ref).then((response) => {
            setFireURL(response);
            console.log("FireURL : ", fireURL);
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  //----------------------------------------
  // onFileChange : 사진 업로드 (사진의 onChange이벤트 )
  const onFileChange = (event) => {
    const theFile = event.target.files[0];
    const reader = new FileReader();
    console.log("theFile : ", theFile);
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const imgDataUrl = finishedEvent.currentTarget.result;
      localStorage.setItem("imgDataUrl", imgDataUrl);
      document.getElementById("boardImg").src = imgDataUrl;
      setFireCheck(imgDataUrl);
    };
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="user"
          value={user}
          onChange={onUserChange}
          placeholder="반려동물 이름"
          ref={usernameInput}
        />
        <input
          type="password"
          id="pw"
          value={pw}
          onChange={onPWChange}
          placeholder="비밀번호"
          ref={PWInput}
        />
        <input
          type="text"
          id="title"
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력해주세요"
          ref={boardTitleInput}
        />
        <textarea
          id="content"
          value={content}
          onChange={onContentChange}
          placeholder="내용을 입력해주세요"
          ref={boardContentInput}
        />
        <div id="imgUrl"></div>
        <button>글 등록하기</button>
        {/* // --------------------------------- */}
        <ImgBox src="/image.jpg" id="boardImg" alt="boardImg" />
        <input type="file" onChange={onFileChange} />
        {/* // ---------------------------------- */}
      </form>
    </div>
  );
};

export default BoardInput;

const ImgBox = styled.img`
  width: 100px;
  height: 100px;
`;
