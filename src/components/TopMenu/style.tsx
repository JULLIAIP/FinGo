import styled from "styled-components";

export const MenuButton = styled.button`
height: 100%;
background-color:transparent;
color:WHITE ;
border: none;
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
width: 100%;
height: 80px;
background-color:#1644B4 ;
justify-items: center;
font-family: Roboto;
font-weight: 700;
position: fixed;
align-items: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
select{
   background: transparent;
   color: white;
   border:none;
   cursor: pointer;
   option{
      background-color: #1644B4;
   }
}
`