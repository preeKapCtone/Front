import { createGlobalStyle } from "styled-components";

const TextStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url('../assets/fonts/TmoneyRoundWindRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyCustomFont';
    src: url('../assets/fonts/TmoneyRoundWindExtraBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'MyCustomFont', sans-serif; /* 기본 폰트 */
  }
`;

export default TextStyle;