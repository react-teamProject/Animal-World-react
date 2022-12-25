import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

const MainLayout = () => {
  return (
    <MainWrapper>
      <LeftBox>
        <div className="left-dot-box">
          <div className="side-content">
            <div></div>
          </div>
        </div>
      </LeftBox>
      <RightBox>
        <div className="right-dot-box">
          <div className="title">
            <div>https://www.animalworld.com/88</div>
          </div>
          <div className="main-content"></div>
        </div>
      </RightBox>
    </MainWrapper>
  );
};

export default MainLayout;

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
    /* right: 12px; */
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
    width: 620px;
    height: 500px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin-bottom: 10px;
  }
`;
