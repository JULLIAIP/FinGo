import { useContext, useState } from 'react'
import { AreaChart } from '../../components/Charts/AreaChart'
import LeftMenu from '../../components/LeftMenu'
import { MultitypeChartApp } from '../../components/Charts/MultitypeChart'
import { VerticalBarChart } from '../../components/Charts/VerticalBarChart'
import { GlobalContext } from "../../global/UseContext"
import { CardChartContainer, ChartContainer } from '../style'
import logo from '../../assets/logo.png'
import TopMenu from '../../components/TopMenu'
import BudgestI from './BudgestI'
import BudgestII from './BudgetII'
import ForecastI from './ForecastI'
import ForecastII from './ForecastII'

export const OrcamentoPage = () => {

    const { showCadastro } = useContext(GlobalContext)
    const [topMenu, setTopMenu] = useState(['Budget I', 'Budget II', 'Forecast I', 'Forecast II'])

    return (
        <body>
            <LeftMenu />
            <ChartContainer colunm='1fr 1fr'>

                <TopMenu data={topMenu} />

                {showCadastro === 'Budget I' ? <BudgestI /> : null}
                {showCadastro === 'Budget II' ? <BudgestII /> : null}
                {showCadastro === 'Forecast I' ? <ForecastI /> : null}
                {showCadastro === 'Forecast II' ? <ForecastII /> : null}
            </ChartContainer>


        </body >
    )
}