import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`



  

// NIXGONB - Bold
@font-face {
     font-family: 'NIXGONM2';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff');
     font-weight: bold; // bold

}
// NIXGONB - large
@font-face {
     font-family: 'NIXGONM2';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff');
     font-weight: normal; // large

}
// NIXGONB - medium
@font-face {
     font-family: 'NIXGONM2';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff');

}






      ${reset}
    #root, body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

     /* font-size 1em = 10px on default browser settings */
    font-size: 62.5%;
    //font-family:NIXGONM2, 'Noto Sans Display', 'AppleSDGothicNeo', 'Noto Sans KR',sans-serif;
    font-family: 'NIXGONM2','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }

:focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

   * {
             /* font-size 1em = 10px on default browser settings */
  

  
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
      font-family: inherit;
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
        }
    }


`;

export default GlobalStyles;
