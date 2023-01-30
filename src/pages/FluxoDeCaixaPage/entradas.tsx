import { useContext } from 'react'
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import { GlobalContext } from "../../global/UseContext"
import { CardChartContainer, ChartContainer } from '../style'

export const Entradas = () => {

    const teste = useContext(GlobalContext)

    return (
        <body>
            <LeftMenu />
            <ChartContainer colunm = '1fr'>

                <TopMenu data = ''/>

                <main>
                    <CardChartContainer>

                    </CardChartContainer>
                </main>
            </ChartContainer></body>
    )
}