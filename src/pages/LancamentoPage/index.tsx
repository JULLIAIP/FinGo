import { useContext } from 'react'
import { FilterLancamento } from '../../components/Filter-Lancamentos'
import { Plus } from 'phosphor-react'
import { GlobalContext } from "../../global/UseContext"
import { ModalLancamentos } from '../../components/Modal-Lancamentos'
import { LancamentosContain, List } from './style'
import { ButtonSucess } from '../../components/Modal-Lancamentos/style'

export const LancamentosPage = () => {

    const { modal, setModal, lancamentos }: any = useContext(GlobalContext)
    console.log(lancamentos)

    return (
        <body>

            <LancamentosContain modal={modal}>
                <ButtonSucess onClick={() => setModal(!modal)}> <Plus size={32} />Adicionar</ButtonSucess>
                {modal && <ModalLancamentos />}
                <FilterLancamento />

                <table>
                    <thead>
                        <th>Descrição </th>
                        <th>Conta </th>
                        <th>Valor</th>
                        <th>Vencimento </th>
                        <th>Competência </th>
                    </thead>

                    {lancamentos && lancamentos.map((item: any) => {
                        return (
                            <tbody>
                                <td>{item.descricao}</td>
                                <td>{item.conta}</td>
                                <td>{item.valor}</td>
                                <td>{item.vencimento}</td>
                                <td>{item.competencia}</td>
                            </tbody>
                        )
                    })}
                </table>


            </LancamentosContain>
        </body>
    )
}