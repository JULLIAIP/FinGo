import styled from "styled-components";


export const BackgroundModal: any = styled.div`
background-color: rgba(0, 0, 0, 0.4);
z-index: 1;
width: 100%;
height: 100%;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
`
export const ModalContain: any = styled.div`
display:grid;
grid-template-columns: 2fr 1fr;
width: 50%;
height: auto;
background-color: white;
position: fixed;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 5px;
gap: 10px;
padding: 2%;
color: gray;
z-index: 2;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
input, select{
    border: 1px solid;
    border-radius: 5px;
    padding: 2%;
    height: 50px;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
}

`
export const CloseButton: any = styled.button`
border-radius: 50%;
border:2px solid white;
color: white;
width: 50px;
background-color: rgba(0, 0, 0, 0.5);
height: 50px;
position: absolute;
top: -05%;
left: 95%;
`
export const ButtonSucess = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
  background-color: green;
  width: 50%;
  color: black;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`