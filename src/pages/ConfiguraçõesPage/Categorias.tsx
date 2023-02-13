import { PencilIcon, PlusSmallIcon, TrashIcon, } from '@heroicons/react/24/solid'
import { GlobalContext } from '../../global/UseContext'
import { useContext, useState } from "react"
import { StyledDetails, StyledSummary } from './style'

export default function Categorias() {
    const { categoriasSaida }: any = useContext(GlobalContext)
    const [showCategorias, setShowCategorias] = useState('')


    return (
        <div>
            <div className='flex w-full justify-between h-20 items-center '>
                <div className='gap-2 flex'>
                    <button onClick={() => setShowCategorias("entradas")}
                        className='bg-green-600 p-2 rounded-md text-white'>Categorias de Entradas</button>
                    <button onClick={() => setShowCategorias("saídas")}
                        className='bg-red-600 p-2 rounded-md text-white'>Categorias de Saída</button></div>
                <button className='flex bg-blue-600 p-2 rounded-md text-white'>Nova categoria
                    <PlusSmallIcon className='w-5' />
                </button>
            </div>

            <table className='w-full' >
                <thead className="h-14 shadow rounded">
                    <tr className='flex justify-between items-center p-5'>
                        <th className={showCategorias === 'entradas' ? 'text-green-500' : 'text-red-500'}>Código</th>
                        <th className={showCategorias === 'entradas' ? 'text-green-500' : 'text-red-500'}>Descrição</th>
                        <th></th>
                    </tr>
                </thead>

                {showCategorias === 'entradas' ? 'entradas' : categoriasSaida.map((item: any, i: number) => {
                    return (
                        <tbody key={i} className="mt-2 w-full flex justify-center items-center">
                            <StyledDetails className='flex w-full'>
                                <StyledSummary className=''>
                                    <tr className='flex w-full items-center 
                                    justify-between p-2 bg-white border-b-2 '
                                    >
                                        <td> <strong>{item.cod}</strong> </td>
                                        <td><strong>{item.descricao}</strong> </td>
                                        <td className="flex gap-2 justify-end">
                                            <button  ><TrashIcon className=" hover:text-red-500 h-6 w-4" /></button>
                                            <button  > <PencilIcon className="hover:text-red-500 h-6 w-4" /></button>
                                        </td>
                                    </tr>
                                </StyledSummary>

                                <td>{item.subCategorias.map((sub: any) => {
                                    return (
                                        <tr className='flex w-full bg-slate-200 m-1 items-center justify-between p-2'>
                                            <td> {sub.cod}</td>
                                            <td>{sub.descricao}</td>
                                            <td className="flex gap-2 justify-end">
                                                <button  ><TrashIcon className=" hover:text-red-500 h-6 w-4" /></button>
                                                <button  > <PencilIcon className=" hover:text-red-500 h-6 w-4" /></button>
                                            </td>
                                        </tr>

                                    )
                                })}</td>
                            </StyledDetails>

                        </tbody>
                    )
                })}

            </table>
        </div >
    )
}