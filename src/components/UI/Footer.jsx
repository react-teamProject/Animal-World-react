import styled from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <span>copyright 팔팔하정</span>
    </StFooter>
  );
};

export default Footer;

// 지금 style은 임시 (나중에 css 수정 시 변경 예정)
// footer 하단에 고정 완료 (추후 center로 위치 변경 필요)
const StFooter = styled.footer`
  /* font-size: 20px;
  color: #919191;
  /* position: relative;
  bottom: 0;
  height: 70px; */
  background-color: blue;
  /* footer의 높이 */
  /* position: absolute;
  bottom: 0;
  /* left: 0; */
  /* position: relative;
  top: 1000px;
  transform: translateY(-100%);  */
`;
