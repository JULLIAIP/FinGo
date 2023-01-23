import { useContext } from 'react'
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import { GlobalContext } from "../../global/UseContext"
import { CardChartContainer, ChartContainer } from '../style'

export const HomePage = () => {

    const teste = useContext(GlobalContext)

    return (
        <body>
        <LeftMenu />
        <ChartContainer>

            <TopMenu data = ""/>

            <main>
           Bem vindo
            </main>
        </ChartContainer></body>
    )
}