import styled from "styled-components";

export const ChartContainer: any = styled.div`
width: 98%;
height:98%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display:grid;
grid-template-rows: 1fr 7fr;
gap: 10px;
padding: 10px;
background-color: white;
border-radius: 5px;
img{
    width: 50px;
    height: auto;
}
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: aliceblue;
}

main{
    display: grid;
    justify-items: center;
}
`
export const CardChartContainer: any = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
font-size:1em;
width: 98%;
height:98%;
background-color: white;
`
export const RelatoriosContain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap:10px;
padding: 20px;
position: fixed;
z-index: 0;
margin-top: 80px;
`