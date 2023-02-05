import { GlobalContext } from "../../global/UseContext";
import { useContext, useState } from 'react'
import { BackgroundModal, ButtonSucess, CloseButton, ModalContain } from "../Modal-Lancamentos/style";
import { XCircleIcon } from '@heroicons/react/24/solid'

export function ModalNewAccount() {
    const { modalNewAccount, setModalNewAccount, contas, setContas }: any = useContext(GlobalContext)

    const [descricao, setDescricao] = useState('')
    const [saldoInicial, setSaldoInicial] = useState('')

    const AddNewAccount = () => {

        const novaConta = {
            nome: descricao,
            saldoInicial: saldoInicial,
            saldoAtual: saldoInicial,
            categorias: "todas"
        }
        setContas([...contas, novaConta])

    }


    return (
        <BackgroundModal modal={modalNewAccount}>
            <ModalContain>
                <CloseButton onClick={() => setModalNewAccount(!modalNewAccount)}>
                    <XCircleIcon className="text-blue-600 w-12" />
                </CloseButton>

                <label>
                    <span>Descrição</span>
                    <input name="descricao" type={'text'} onChange={(e) => setDescricao(e.target.value)} />
                </label>
                <label>
                    <span>Saldo Inicial</span>
                    <input name="valor" type={"number"} placeholder="R$ 0,00" onChange={(e) => setSaldoInicial(e.target.value)} />
                </label>

                <ButtonSucess onClick={
                    () => {
                        setModalNewAccount(!modalNewAccount);
                        AddNewAccount()
                    }}>Salvar</ButtonSucess>

            </ModalContain>
        </BackgroundModal>
    )
}