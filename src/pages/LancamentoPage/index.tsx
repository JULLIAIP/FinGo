import { useContext } from 'react'
import { FilterLancamento } from '../../components/Filter-Lancamentos'
import { Plus, MagnifyingGlass } from 'phosphor-react'
import { GlobalContext } from "../../global/UseContext"
import { ModalLancamentos } from '../../components/Modal-Lancamentos'
import { LancamentosContain, List } from './style'
import { ButtonSucess } from '../../components/Modal-Lancamentos/style'

export const LancamentosPage = () => {

    const { modal, setModal, lancamentos }: any = useContext(GlobalContext)

    return (
        <body>
            <LancamentosContain modal={modal}>
                <ButtonSucess onClick={() => setModal(!modal)}> <Plus size={32} />Adicionar</ButtonSucess>
                {modal && <ModalLancamentos />}
                <FilterLancamento />
                {lancamentos&&lancamentos.map((item)=>{
                    return(
                        <List>
                            <header> 
                                <h2>{lancamentos.length} Lançamentos</h2>
                                <label>
                                    <input placeholder='Localizar'/>
                                    <button> <MagnifyingGlass size={32} /></button>
                                </label>
                            </header>
                            <hr/>
                            <table>
                                <thead>Descrição</thead>
                                <td>{item.descricao}</td>
                            </table>
                            
                        </List>
                    )
                })}
      

            </LancamentosContain>
        </body>
    )
}