import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  
  body{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-row: 1fr;
    align-items:center ;
    justify-items: center;
    background-color: #F6F8FA;
  }
  
  `

