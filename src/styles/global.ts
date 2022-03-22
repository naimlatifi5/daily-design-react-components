import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    body {
        background-color: #EAE4D0;
    }
    .App {
        padding: 12px 48px;
    }
    #root{
        margin:0 auto;
        
      
    }
 `
export default GlobalStyles
