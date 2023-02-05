import React, { createContext, useState } from "react"

type ContextoProviderProps = {
    children: React.ReactNode
}

export const GlobalContext = createContext('')


export const UseGlobalContext = ({ children }: ContextoProviderProps) => {
    const [showPage, setShowPage] = useState("HOME")
    const [showCadastro, setShowCadastro] = useState("Entradas")
    const [modal, setModal] = useState(false)
    const [modalNewAccount, setModalNewAccount] = useState(false)
    const [categoriasSaida, setCategoriasSaida] = useState([
        {
            cod: "001", descricao: "Fixas Mensais", conta: "Carteira", subCategorias:
                [
                    { cod: "001.01", descricao: "Luz" },
                    { cod: "001.02", descricao: "Água" }
                ]
        },
        {
            cod: "002", descricao: "Logistica", conta: "Carteira", subCategorias: []
        }
    ])
    const [contas, setContas] = useState([
        { nome: "Carteira", saldoInicial: "0,00", saldoAtual: "0,00", categorias: "todas" },
        { nome: "Poupança", saldoInicial: "0,00", saldoAtual: "0,00", categorias: "todas" }
    ])
    const [lancamentos, setLancamentos] = useState([
        {


        }
    ])

    return (
        <GlobalContext.Provider value={{
            lancamentos,
            showCadastro,
            showPage,
            modal,
            contas,
            categoriasSaida,
            modalNewAccount,
            setModalNewAccount,
            setCategoriasSaida,
            setContas,
            setLancamentos,
            setShowPage,
            setModal,

            setShowCadastro
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

