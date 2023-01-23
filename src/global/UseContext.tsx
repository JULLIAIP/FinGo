import React, { createContext, useState } from "react"

type ContextoProviderProps = {
    children: React.ReactNode
}
export const GlobalContext = createContext('')


export const UseGlobalContext = ({ children }: ContextoProviderProps) => {
    const [showPage, setShowPage] = useState("HOME")
    const [showCadastro, setShowCadastro] = useState("Entradas")

    return (
        <GlobalContext.Provider value={{ setShowPage, showPage, showCadastro, setShowCadastro }}>
            {children}
        </GlobalContext.Provider>
    )
}

