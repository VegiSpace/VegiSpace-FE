import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

const GlobalStyles = createGlobalStyle`
    ${reset}
:focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
  #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

     /* font-size 1em = 10px on default browser settings */
    font-size: 62.5%;
    font-family: 'Noto Sans Display', 'AppleSDGothicNeo', 'Noto Sans KR',sans-serif;
  }
   * {
  
    box-sizing: border-box;
    ::-webkit-scrollbar {
      //
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 18px;
    }
  }
    img{
    background-color: transparent;
  }
    a{
    margin:0;
    padding:0;
    text-decoration: none;
  }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            /*fill: #f2f3f4;*/
        }
    }
`;

export default GlobalStyles;
