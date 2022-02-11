import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  body {
    font-family: Raleway;
    font-size: 16px;
  }
  
  ul{
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  :root {
    /* COLORS */
    --c-black-200: #3D3D3D;
    --c-black-220: #585858;
    --c-black-250: #4A4A4A;
    --c-black-300: #213445; /* PRIMARY */
    --c-black-400: #1E1E1E;
    --c-black-800: #000000;
    --c-red-300:   #E94851; /* PRIMARY */
    --c-red-400:   #E53A3A;
    --c-red-600:   #9B2424; 
    --c-white-200: #F1F1F1;
    --c-white-800: #ffffff;
    --c-gray-200:  #F0F0F0;
    --c-gray-220:  #F3F3F3;
    --c-gray-250:  #BEBEBE;
    --c-gray-300:  #B1B1B1;
    --c-gray-320:  #AEAEAE;
    --c-gray-350:  #ABABAB;
    --c-gray-400:  #969696;
    --c-gray-500:  #8A8A8A;
    --c-gray-600:  #828282;
    --c-warning-200: #FFF2D1;
    --c-input-b-100: #CFCFCF;
    --c-input-b-200: #C5C5C5;
    --c-placeholder: #9C9C9C;
    --c-disabled:    #C4C4C4;
    --c-green-300:   #D3F4D3;
    --c-green-600:   #3A9900;

    /* FONTS */
    --f-montserrat: Montserrat;
    --f-raleway:    Raleway;
  }
`;
