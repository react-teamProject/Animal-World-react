import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BoardList from "../components/features/board/BoardList";
import Layout from "../components/UI/Layout";
import { __getBoards } from "../redux/modules/boardSlice";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SimpleSlider from "../components/features/board/SimpleSlider";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  //enter (keycode 13)로 검색 가능
  const handleOnKeyUp = (event) => {
    if (event.keyCode === 13) {
      navigate(`/?q=${search}`);
    }
  };
  const handleOnClickSearchButton = (event) => {
    event.preventDefault();
    navigate(`/?q=${search}`);
    setSearch("");
  };
  return (
    <Layout>
      <MainBox>
        <SimpleSlider />
        <Search>
          <form onSubmit={handleOnClickSearchButton}>
            <input
              onKeyUp={handleOnKeyUp}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="input"
              type="text"
              placeholder="검색어를 입력해주세요"
            />
            <button type="submit">검색</button>
          </form>
          <DetailLink to={`/boardwrite`}>
            <WriteButton>글쓰기</WriteButton>
          </DetailLink>
        </Search>
      </MainBox>

      <BoardList />
    </Layout>
  );
};

export default Main;

const DetailLink = styled(Link)`
  text-decoration: none;
`;

const MainBox = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const WriteButton = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: #ff8c00;

  &:hover {
    color: #fff;
    background-color: #ff8c00;
  }
`;

const Search = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: space-between;

  .input {
    width: 400px;
    padding: 12px 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: #575756;
    background-color: transparent;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: color(#575756 a(0.8));
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    &:hover,
    &:focus {
      padding: 12px 0;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid #575756;
      border-radius: 0;
      background-position: 100% center;
    }
  }
`;
