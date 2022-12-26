import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BoardList from "../components/features/board/BoardList";
import Layout from "../components/UI/Layout";
import { __getBoards } from "../redux/modules/boardSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Main page 에 필요한 요소 import
// ex) boardList (게시글 전체 list)
// header & footer => Layout에 존재하기 때문에 자동 포함

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  return (
    <Layout>
      <DetailLink to={`/boardwrite`}>글쓰기</DetailLink>
      <h2>최근 작성한 게시물</h2>
      <BoardList />

      {/* <Container>
        <Box>
          <div className="imgBox">
            <img
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Karan Singh</h2>
          </div>
        </Box>
        <Box>
          <div className="imgBox">
            <img
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Dolly Seth</h2>
          </div>
        </Box>
        <Box>
          <div className="imgBox">
            <img
              src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Aakash Agrawal</h2>
          </div>
        </Box>
      </Container> */}
    </Layout>
  );
};

export default Main;

const DetailLink = styled(Link)`
  text-decoration: none;
`;

// const Container = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Box = styled.div`
//   position: relative;
//   width: 30rem;
//   height: 30rem;
//   margin: 4rem;

//   &:hover {
//     .imgBox {
//       transform: translate(-3.5rem, -3.5rem);
//     }
//     .content {
//       transform: translate(3.5rem, 3.5rem);
//     }
//   }

//   .imgBox {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 2;
//     transition: all 0.5s ease-in-out;
//   }

//   .imgBox img {
//     width: 30rem;
//     height: 30rem;
//     object-fit: cover;
//     resize: both;
//   }

//   .content {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     padding: 1.5rem;
//     display: flex;
//     justify-content: center;
//     background-color: #fff;
//     z-index: 1;
//     align-items: flex-end;
//     text-align: center;
//     transition: 0.5s ease-in-out;
//   }

//   .content h2 {
//     display: block;
//     font-size: 2rem;
//     color: #111;
//     font-weight: 500;
//     line-height: 2rem;
//     letter-spacing: 1px;
//   }

//   @media (max-width: 600px) {
//     .container .box:hover .content {
//       transform: translate(0, 3.5rem);
//     }
//     .container .box:hover .imgBox {
//       transform: translate(0, -3.5rem);
//     }
//   }
// `;
