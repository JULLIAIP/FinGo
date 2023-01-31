import React, { createContext, useState } from "react"

type ContextoProviderProps = {
    children: React.ReactNode
}
export const GlobalContext = createContext('')


export const UseGlobalContext = ({ children }: ContextoProviderProps) => {
    const [showPage, setShowPage] = useState("HOME")
    const [showCadastro, setShowCadastro] = useState("Entradas")
    const [modal, setModal] = useState(false)
    const [lancamentos, setLancamentos] = useState([
        {


        }
    ])

    console.log({lancamentos})

    return (
        <GlobalContext.Provider value={{ lancamentos, setLancamentos, setShowPage, showPage, modal, setModal, showCadastro, setShowCadastro }}>
            {children}
        </GlobalContext.Provider>
    )
}

