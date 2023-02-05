import { GlobalContext } from "../../global/UseContext";
import { useContext, useState } from 'react'
import { BackgroundModal, ButtonSucess, CloseButton, ModalContain } from "./style";
import { LancamentosContain } from "../../pages/LancamentoPage/style";

export function ModalLancamentos() {
    const { modal, setModal, lancamentos, setLancamentos }: any = useContext(GlobalContext)

    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [competencia, setCompetencia] = useState('')
    const [vencimentos, setVencimentos] = useState('')
    const [conta, setConta] = useState('')

    const cadastrar = () => {
        if (descricao && valor && categoria && competencia && vencimentos && conta) {
            const novoLancamento = {
                descricao: descricao,
                valor: valor,
                categoria: categoria,
                competencia: competencia,
                vencimento: vencimentos,
                conta: conta
            }

            setLancamentos((oldValue: any) => [...oldValue, novoLancamento])
        } else {
            alert("Preencha todos os campos")
        }

    }


    return (
        <BackgroundModal modal={modal}>
            <ModalContain>
                <CloseButton onClick={() => setModal(!modal)}>X</CloseButton>

                <label>
                    <span>Categoria</span>
                    <select onChange={(e) => setCategoria(e.target.value)}>
                        <option>Entrada</option>
                        <option>Saída</option>
                        <option>Transferências</option>
                    </select>
                </label>
                <label>
                    <span>Subcategoria</span>
                    <select onChange={(e) => setCategoria(e.target.value)}>
                        <option>Entrada</option>
                        <option>Saída</option>
                        <option>Transferências</option>
                    </select>
                </label>
                <label>
                    <span>Valor</span>
                    <input name="valor" type={"number"} placeholder="R$ 0,00" onChange={(e) => setValor(e.target.value)} />
                </label>
                <label>
                    <span>Nº de parcelas</span>
                    <input name="n-de-parcelas" type={"number"} placeholder="00" onChange={(e) => setCompetencia(e.target.value)} />
                </label>
                <label>
                    <span>Orçamento</span>
                    <select onChange={(e) => setCategoria(e.target.value)}>
                        <option>Budget</option>
                        <option>Forecast</option>
                    </select>
                </label>
                <label>
                    <span>Conta</span>
                    <select onChange={(e) => setConta(e.target.value)}>
                        <option>Cartão</option>
                        <option>Poupança</option>
                        <option>Caixa</option>
                    </select>
                </label>
                <ButtonSucess onClick={
                    () => {
                        setModal(!modal);
                        cadastrar()
                    }}>Salvar</ButtonSucess>

            </ModalContain>
        </BackgroundModal>
    )
}