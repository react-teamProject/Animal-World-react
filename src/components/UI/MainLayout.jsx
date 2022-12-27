import React from "react";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <MainWrapper>
        <LeftBox>
          <div className="left-dot-box">
            <div className="side-content">
              <Logo src="/assets/animal_world_logo.png" />
              <SideText />
            </div>
          </div>
        </LeftBox>
        <RightBox>
          <div className="right-dot-box">
            <div className="address">
              <div>https://www.animalworld.com/88</div>
            </div>
            <div className="main-content"></div>
          </div>
        </RightBox>
        <MenuWrapper>
          <Menu>홈</Menu>
          <Menu>글쓰기</Menu>
        </MenuWrapper>
      </MainWrapper>
    </>
  );
};
const MenuWrapper = styled.div`
  display: flex;
  position: relative;
  right: 74px;
  top: -100px;
  flex-direction: column;
`;
const Menu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #f0f8ff;
  flex-direction: column;
  border-radius: 0 8px 8px 0%;
  width: 80px;
  height: 50px;
  margin: 10px;
  box-shadow: 8px 26px 17px hsl(0deg 54% 80% / 14%); ;
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
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 38%);

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 500px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin-bottom: 10px;
  }
`;

const Logo = styled.img`
  width: 250px;
  height: 250px;
`;
const SideText = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid black;
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
  box-shadow: 4px 8px 8px hsl(0deg 0% 0%/0.38);
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
  .address {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 600px;
    height: 36px;
    padding: 4px;
    font-size: 12px;
  }
  .main-content {
    width: 620px;
    height: 500px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin-bottom: 10px;
  }
`;
export default MainLayout;
