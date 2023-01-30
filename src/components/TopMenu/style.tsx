import styled from "styled-components";

export const MenuButton = styled.button`
height: 100%;
background-color:transparent;
color:WHITE ;
border: none;
font-family: Roboto;
font-weight: 700;
cursor: pointer;
&:hover{
   background-color: #c1bebe92;
}
select{
   background-color: transparent;
   cursor: pointer;
}
`
export const TopMenuContain = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr;
max-width: 100%;
height: 100px;
background-color:#1644B4 ;
justify-items: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
padding: 2%;
img{
   width: 50px;
   cursor: pointer;

}
div{
   display: flex;
   width: 100%;
   justify-content: space-around;
   align-items: center;
}
`