import styled from "styled-components";

export const MenuContain = styled.div`
display: grid;
justify-items: center;
align-items:center;
height: 100%;
width: 100%;
min-width: 50px;
box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
background-color: #F0F0F9;

img{
  width: 50%;
  height: auto;
}

`
export const LeftMenuButton = styled.button`

  align-items: center;
  box-sizing: border-box;
  color:${(props) => props.ativo ? 'white' : "#1A202C"};
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border: none;
  background-color: ${(props) => props.ativo ? 'black' : 'transparent'};
  &:hover{
    background-color: #1A202C;
    color: #F0F0F9;
  }
`
