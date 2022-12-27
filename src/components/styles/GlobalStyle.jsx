import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    Body{
      max-width: 1200px;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      //flex-direction: column;
      margin: 0 auto;
      text-align: center;
      border: 1px solid black;
  /* background-color: #d3d3d3;
  
  background-image: linear-gradient(#ffffff 1px, transparent 1px),
    linear-gradient(to right, #ffffff 1px, #d3d3d3 1px);
  background-size: 20px 20px; */
    }`;
export default GlobalStyle;
