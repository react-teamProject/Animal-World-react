import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postBoards } from "../../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import styled from "styled-components";

const BoardInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [pw, setPW] = useState("");
  const [test, setTest] = useState("");
  //------------------------------------
  // new Date 사용하여 현재시간 추가
  const date = new Date().toLocaleString();
  // -----------------------------------
  const [fireURL, setFireURL] = useState("");
  //------------------------------------
  //useEffect를 사용해서 최초 uploadImg를 실행해준다.
  useEffect(() => {
    uploadImg();
  }, []);
  //------------------------------------

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
    setTest(e.target.value);
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

    // ----- 이미지url 가져오기 바뀐 부분 ------
    uploadImg();

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
    // console.log("theFile : ", theFile);
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const imgDataUrl = finishedEvent.currentTarget.result;
      localStorage.setItem("imgDataUrl", imgDataUrl);
      document.getElementById("boardImg").src = imgDataUrl;
    };
  };

  // function onChangeHandler(event) {}

  return (
    <div>
      <form onSubmit={onSubmitHandler} style={{ postion: "relative" }}>
        <div className="rightTag">
          <InputBox
            type="text"
            id="user"
            value={user}
            onChange={onUserChange}
            placeholder="반려동물이름"
          />
          <InputBox
            type="password"
            id="pw"
            value={pw}
            onChange={onPWChange}
            placeholder="비밀번호"
          />
          <InputBox
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
            style={{
              padding: "10px",
              width: "80%",
              height: "180px",
              margin: "10px",
              border: "2px solid #ff8c00",
              "border-radius": "16px",
            }}
          />
        </div>
        <div id="imgUrl"></div>
        <div
          style={{
            transform: "translate(-183px, -200px)",
            width: "50px",
            padding: "20px",
            display: "flex",
            "font-size": "15px",
            "flex-direction": "column",
            "align-items": "center",
            "justfy-content": "center",
          }}>
          <div>
            <SideContentWrapper>
              <p>나만 볼 수 없어</p>
              <p> 소중한</p>
            </SideContentWrapper>
            <input
              type="text/"
              style={{
                "border-radius": "10px",
                border: "1px solid #ff8c00",
                width: "100px",
              }}
              value={test}
              disabled
            />
          </div>
        </div>
        <ButtonBox>
          <input type="file" onChange={onFileChange} className="inputFile" />
          <button className="submitButton">글 등록하기</button>
        </ButtonBox>
        <ImgBox
          src="/assets/animal_world_logo.png"
          id="boardImg"
          alt="boardImg"
        />
      </form>
    </div>
  );
};

export default BoardInput;
const SideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 0px;
  margin: 0px;
`;
const ImgBox = styled.img`
  transform: translate(-444px, -660px);
  margin: 50px;
  width: 250px;
  height: 250px;
`;

const InputBox = styled.input`
  padding: 5px;
  border-radius: 16px;
  border: 2px solid #ff8c00;
  width: 80%;
  margin: 10px;
  height: 25px;
`;

const ButtonBox = styled.button`
  transform: translate(95px, -187px);
  width: 430px;
  background-color: #f1f8fe;
  border: 1px solid #f1f8fe;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
