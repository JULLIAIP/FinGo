import { useContext } from 'react'
import { DoughnutChart } from '../../components/Charts/DoughnutChart'
import { LineChart } from '../../components/Charts/LineChart'
import { GlobalContext } from "../../global/UseContext"
import { BarsArrowUpIcon, BarsArrowDownIcon, BanknotesIcon } from '@heroicons/react/20/solid'




export const HomePage = () => {

    const teste = useContext(GlobalContext)

    return (
        <body>
            <main className='w-full min-h-screen p-32 grid grid-cols-10 bg-gray-100 gap-4' >

                <div className='w-full flex justify-between text-3xl text-center col-span-10 mb-4'>
                    <h1 className='font-bold'>DASHBOARD</h1>

                    <input className='border-none rounded-lg bg-slate-50 h-5' type={'date'} />
                </div>

                <div className='   bg-slate-50  rounded-lg shadow-md w-full h-28 items-center 
                  justify-around font-bold p-2 col-span-2'>

                    <BanknotesIcon className='text-blue-700 w-5'/>

                    <div className='text-center'>
                        <h1 className=' text-2xl'>R$ 1.000.000,00</h1>
                        <h1>Saldo Inicial</h1>
                    </div>

                </div>

                <div className='  
                 bg-slate-50  rounded-lg shadow-md w-full h-28 items-center 
                  justify-around font-bold flex p-2 col-span-4'>

                    <BarsArrowUpIcon className='text-white w-20 h-20 rounded-full bg-green-400' />

                    <div className='text-center'>
                        <h1 className=' text-2xl'>R$ 5.000,00</h1>
                        <h1>Entradas</h1>
                    </div>

                </div>


                <div className='  
                 bg-slate-50  rounded-lg shadow-md w-full h-28 items-center 
                  justify-around font-bold flex p-2 col-span-4'>

                    <BarsArrowDownIcon className='text-white w-20 h-20 rounded-full bg-red-400' />

                    <div className='text-center'>
                        <h1 className=' text-2xl'>R$ 5.000,00</h1>
                        <h1>Saídas</h1>
                    </div>

                </div>

                <div className='   bg-slate-50  rounded-lg shadow-md w-full h-56 p-2 col-span-6 flex text-center'>
                    <h1>Movimentação Total</h1>
                    <LineChart />

                </div>

                <div className='   bg-slate-50 rounded-lg shadow-md w-full h-56 p-2 col-span-4 flex'>
                    <h1>Saldo Final</h1>
                    <DoughnutChart />

                </div>

            </main>
        </body >
    )
}