import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <h2>Animal World</h2>
    </StHeader>
  );
};

export default Header;

// 지금 style은 임시 (나중에 css 수정 시 변경 예정)
const StHeader = styled.div`
  font-size: 30px;
  color: blue;
`;
