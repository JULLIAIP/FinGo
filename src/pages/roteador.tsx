import { useContext } from 'react'
import { GlobalContext } from "../global/UseContext"
import { CadastroPage } from './CadastroPage'
import { CarCapPage } from './Car-CapPage/CarCapPage'
import { FluxoDeCaixaPage } from './FluxoDeCaixaPage'
import { HomePage } from './HomePage'
import { LancamentoPage } from './LancamentoPage'
import { OrcamentoPage } from './OrcamentoPage'

export const Roteador = () => {

    const { showPage }: any = useContext(GlobalContext)

    return (
        <>

            {showPage === 'HOME' ? <HomePage /> : null}
            {showPage === 'CADASTRO' ? <CadastroPage /> : null}
            {showPage === 'LACAMENTO' ? <LancamentoPage /> : null}
            {showPage === 'FLUXO-DE-CAIXA' ? <FluxoDeCaixaPage /> : null}
            {showPage === 'ORCAMENTO' ? <OrcamentoPage /> : null}
            {showPage === 'CAR-CARP' ? <CarCapPage /> : null}

        </>
    )
}