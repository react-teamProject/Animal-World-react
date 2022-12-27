import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardItem = ({ board }) => {
  const { isLoading, error } = useSelector((state) => state.boardSlice);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Box>
      <DetailLink to={`/${board.id}`} key={board.id}>
        <div className="imgBox">
          <img src={board.ImgUrl} alt="boardImg" />
        </div>
        <div className="content">
          <h3>{board.title}</h3>
        </div>
      </DetailLink>
    </Box>
  );
};

export default BoardItem;

const DetailLink = styled(Link)`
  text-decoration: none;
`;

const Box = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 4rem;

  &:hover {
    .imgBox {
      transform: translate(-3.5rem, -3.5rem);
    }
    .content {
      transform: translate(3.5rem, 3.5rem);
    }
  }

  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .imgBox img {
    width: 35rem;
    height: 34rem;
    object-fit: cover;
    resize: both;
    border-radius: 16px;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    background-color: #fff;
    z-index: 1;
    align-items: flex-end;
    text-align: center;
    transition: 0.5s ease-in-out;
    border-radius: 16px;
  }

  .content h3 {
    display: block;
    font-size: 2rem;
    color: #111;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 1px;
  }

  .content span {
    color: #555;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 2px;
  }

  @media (max-width: 600px) {
    .container .box:hover .content {
      transform: translate(0, 3.5rem);
    }
    .container .box:hover .imgBox {
      transform: translate(0, -3.5rem);
    }
  }
`;
