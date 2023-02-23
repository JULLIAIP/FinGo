import React, { createContext, useContext, useState } from "react"

type ContextoProviderProps = {
    children: React.ReactNode
}

export const GlobalContext = createContext('')


export const UseGlobalContext = ({ children }: ContextoProviderProps) => {
    const [showPage, setShowPage] = useState("HOME")
    const [showCadastro, setShowCadastro] = useState("Entradas")
    const [modal, setModal] = useState(false)
    const [modalNewAccount, setModalNewAccount] = useState(false)
    //encontrar plugin que faça a numeração automática 
    const [categoriasSaida, setCategoriasSaida] = useState([
        {
            cod: "004", descricao: "CUSTOS TRIBUTÁRIOS", conta: "Carteira", subCategorias:
                [
                    { cod: "004.01", descricao: "PIS" },
                    { cod: "004.02", descricao: "COFINS" },
                    { cod: "004.03", descricao: "CSLL" },
                    { cod: "004.04", descricao: "IRPJ" },
                    { cod: "004.05", descricao: "ISS" },
                    { cod: "004.06", descricao: "Outras Despesas com custos tributáveis" },
                ]
        },
        {
            cod: "005", descricao: "CUSTOS COM TERCEIRIZACOES DE SERVICOS", conta: "Carteira", subCategorias:
                [
                    { cod: "005.01", descricao: "Serviços de Desemvolvimento" },
                    { cod: "005.02", descricao: "Outras Despesas com custos com terceirizadps de serviços" },
                ]
        },
        {
            cod: "006", descricao: "CUSTO COM VENDAS", conta: "Carteira", subCategorias:
                [
                    { cod: "006.01", descricao: "Comissão Interna" },
                    { cod: "006.02", descricao: "Comissão Externa" },
                    { cod: "006.03", descricao: "Softwares de Desenvolvimento" },
                    { cod: "006.04", descricao: "Outras Despesas com custos com vendas" },
                ]
        },
        {
            cod: "007", descricao: "DESPESAS GERAIS & ADMINISTRATIVAS", conta: "Carteira", subCategorias:
                [
                    { cod: "007.01", descricao: "Aluguel e Condomínio" },
                    { cod: "007.02", descricao: "IPTU e Taxas Públicas" },
                    { cod: "007.03", descricao: "Energia Elétrica" },
                    { cod: "007.04", descricao: "Água & Esgoto" },
                ]
        },
    ])
    const [categoriasEntrada, setCategoriasEntrada] = useState([
        {
            cod: "001", descricao: "CUSTOS TRIBUTÁRIOS", conta: "Carteira", subCategorias:
                [
                    { cod: "001.01", descricao: "PIS" },
                    { cod: "001.02", descricao: "COFINS" },
                    { cod: "001.03", descricao: "CSLL" },
                    { cod: "001.04", descricao: "IRPJ" },
                    { cod: "001.05", descricao: "ISS" },
                    { cod: "001.06", descricao: "Outras Despesas com custos tributáveis" },
                ]
        },
        {
            cod: "002", descricao: "CUSTOS COM TERCEIRIZACOES DE SERVICOS", conta: "Carteira", subCategorias:
                [
                    { cod: "002.01", descricao: "Serviços de Desemvolvimento" },
                    { cod: "002.02", descricao: "Outras Despesas com custos com terceirizadps de serviços" },
                ]
        },
        {
            cod: "003", descricao: "CUSTO COM VENDAS", conta: "Carteira", subCategorias:
                [
                    { cod: "003.01", descricao: "Comissão Interna" },
                    { cod: "003.02", descricao: "Comissão Externa" },
                    { cod: "003.03", descricao: "Softwares de Desenvolvimento" },
                    { cod: "003.04", descricao: "Outras Despesas com custos com vendas" },
                ]
        },
        {
            cod: "004", descricao: "DESPESAS GERAIS & ADMINISTRATIVAS", conta: "Carteira", subCategorias:
                [
                    { cod: "004.01", descricao: "Aluguel e Condomínio" },
                    { cod: "004.02", descricao: "IPTU e Taxas Públicas" },
                    { cod: "004.03", descricao: "Energia Elétrica" },
                    { cod: "004.04", descricao: "Água & Esgoto" },
                ]
        },

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
            categoriasEntrada,
            modalNewAccount,
            setModalNewAccount,
            setCategoriasSaida,
            setCategoriasEntrada,
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

