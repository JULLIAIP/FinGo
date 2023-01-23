import { useContext, useState } from 'react'
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import { GlobalContext } from "../../global/UseContext"
import { CardChartContainer, ChartContainer } from '../style'
import Entradas from './entradas'
import Saidas from './saidas'
import Transferencias from './transferencias'

export const CadastroPage = () => {

    const { showCadastro }: String = useContext(GlobalContext)
    const [topMenu, setTopMenu] = useState(['Entradas', 'Saídas', 'Transferências'])

    return (
        <body>
            <LeftMenu />
            <ChartContainer colunm = '1fr'>

                <TopMenu data={topMenu} />

                <main>
                    {showCadastro === 'Entradas' ? <Entradas /> : null}
                    {showCadastro === 'Saídas' ? <Saidas /> : null}
                    {showCadastro === 'Transferências' ? <Transferencias /> : null}
                </main>
            </ChartContainer></body>
    )
}