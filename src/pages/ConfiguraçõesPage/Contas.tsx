import { useContext } from "react"
import { GlobalContext } from "../../global/UseContext"
import { PlusSmallIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import { ModalNewAccount } from "../../components/Modal-NewAccount"

export default function Contas() {

    const { contas, setModalNewAccount, modalNewAccount, setContas }: any = useContext(GlobalContext)

    const removeAccount = (conta: any) => {
        setContas(contas.filter((item: any) => item !== conta))
    }

    const editAccount = (conta: any) => {
        modalNewAccount(true)
        return
    }

    return (
        <div className=" p-5 w-full grid ">
            <button className="flex bg-blue-800 text-white p-2 rounded-md place-self-end"
                onClick={() => setModalNewAccount(true)}
            >
                Nova Conta
                <PlusSmallIcon className="h-6 w-6 text-white" />
            </button>

            <table className="table-auto justify-center items-center mt-5 h-full ">
                <thead className="h-14 shadow rounded">
                    <tr>
                        <th>Descrição</th>
                        <th>Saldo Inicial</th>
                        <th>Saldo Atual</th></tr>
                </thead>
                {contas && contas.map((item: any, i: number) => {
                    return (
                        <tbody key={i} className="text-center mt-5">
                            <tr className="border-b-2">
                                <td >{item.nome}</td>
                                <td>{item.saldoInicial}</td>
                                <td>{item.saldoAtual}</td>
                                <td className="flex gap-2 justify-end">
                                    <button onClick={() => removeAccount(item)} ><TrashIcon className="h-6 w-4" /></button>
                                    <button onClick={() => setModalNewAccount(true)} > <PencilIcon className="h-6 w-4" /></button>

                                </td>

                            </tr>
                        </tbody>


                    )
                })}
                {modalNewAccount && <ModalNewAccount />}
            </table>
        </div >
    )
}