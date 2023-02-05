
import React, { useState } from "react"
import Contas from "./Contas"
export default function ConfiguracoesPage() {

    const menuOptions = [
        { name: 'Dados Pessoais', href: '#' },
        { name: 'Contas', href: '#', icon: "" },
        { name: 'Categorias', href: '#', icon: "" },
    ]

    const [show, setShow] = useState('conta')

    return (
        <div className="bg-slate-100 ">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-6">

                    <section className="pt-6 pb-24 min-h-screen">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* menu lateral */}

                            <ul role="list" className="
                             bg-white p-10 shadow-md rounded-lg min-h-full space-y-4 border-b pb-6 text-sm font-medium text-gray-900
                             ">
                                {menuOptions.map((category) => (
                                    <li key={category.name} onClick={()=>setShow(category.name)}>
                                        <a href={category.href}>{category.name}</a>
                                        <hr />
                                    </li>
                                ))}
                            </ul>

                            {/* Area de configuração */}
                            <div className="lg:col-span-3 min-h-full">
                                <div className="h-96 bg-white rounded-lg  shadow-md">
                                    {show === 'Contas' ? <Contas /> : null}
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}