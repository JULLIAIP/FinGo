import styled from "styled-components";

export const MenuButton = styled.button`

width: 100%;
height: 100%;
background-color: ${(props)=>props.ativo? 'black':'transparent'};
color:${(props)=>props.ativo? 'white':'black'} ;
border: none;
cursor: pointer;
&:hover{
   background-color: #c1bebe92;
}


`

export const TopMenuContain = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`