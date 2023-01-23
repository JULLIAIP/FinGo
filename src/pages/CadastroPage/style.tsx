import styled from "styled-components";

export const CadastroButton = styled.button`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: transparent;
border-radius: 5px;
border:none;
width:100%;
height: 50px;
cursor: pointer;
margin: 10px;
padding: 2%;
&:hover{
transform: scale(1.1);
}
`

export const CadastroContain = styled.div`
width: 100%;
height: auto;
display: grid;
grid-template-columns: 1fr 4fr;
gap:10px;

`