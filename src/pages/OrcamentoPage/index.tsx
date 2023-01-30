import { useContext, useState } from 'react'
import LeftMenu from '../../components/LeftMenu'
import { GlobalContext } from "../../global/UseContext"
import {ChartContainer } from '../style'
import TopMenu from '../../components/TopMenu'
import BudgestI from './BudgestI'
import BudgestII from './BudgetII'
import ForecastI from './ForecastI'
import ForecastII from './ForecastII'

export const OrcamentoPage = () => {

    const { showCadastro }:any  = useContext(GlobalContext)
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