import React from "react";
import styled from "styled-components";
import BoardInput from "../features/board/BoardInput";
import { Link, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigator = useNavigate();
  return (
    <>
      <MainWrapper>
        <LeftBox>
          <div className="left-dot-box">
            <div className="side-content"></div>
          </div>
        </LeftBox>
        <RightBox>
          <div className="right-dot-box">
            <div className="title">
              <div>https://www.animalworld.com/88</div>
            </div>
            <div className="main-content">
              <BoardInput />
            </div>
          </div>
        </RightBox>
        <MenuWrapper>
          <Menu>
            <button
              className="menu"
              onClick={() => {
                navigator("/");
              }}
            >
              홈
            </button>
          </Menu>
        </MenuWrapper>
      </MainWrapper>
    </>
  );
};
const MenuWrapper = styled.div`
  display: flex;
  position: relative;
  right: 74px;
  flex-direction: column;
`;
const Menu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #f0f8ff;
  flex-direction: column;
  border-radius: 0 8px 8px 0;
  width: 80px;
  height: 50px;
  margin: 10px;
  .menu {
    border-radius: 0 8px 8px 0;
    background-color: #f1f8fe;
    border: 1px solid #f1f8fe;
    width: 80px;
    height: 50px;
  }
`;
const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 280px;
  height: 600px;
  border: 1px solid #f0f8ff;
  background-color: #ff8c00;
  border-radius: 16px;
  border-right: none;
  .left-dot-box {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    width: 250px;
    height: 550px;
    border: 3px dashed #f0f8ff;
    border-radius: 16px;
    border-right: none;
  }
  .side-content {
    width: 230px;
    height: 500px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin-bottom: 10px;
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 680px;
  height: 600px;
  background-color: #ff8c00;
  border: 1px solid #f0f8ff;
  border-radius: 16px;
  border-left: none;
  .right-dot-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 640px;
    height: 550px;
    border: 3px dashed #f0f8ff;
    border-radius: 16px;
    border-left: none;
  }
  .title {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .main-content {
    gap: 10px;
    width: 620px;
    height: 500px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin-bottom: 10px;
  }
  .rightTag {
    transform: translate(0, -30px);
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: center;
    border-radius: 16px;
  }
`;
export default MainLayout;
