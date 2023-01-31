import { useContext } from 'react'
import { GlobalContext } from "../../global/UseContext"
import { HomeContain } from './style'


export const HomePage = () => {

    const teste = useContext(GlobalContext)

    return (
        <body>
            <HomeContain >

                <div className='header'>
                    <h1>Bem vinda, Júllia</h1>
                </div>

                <div className='saldo'>
                    <h1>Saldo Geral</h1>

                </div>

                <div className='balanco'>
                    <h1>Balanço</h1>

                </div>

            </HomeContain>
        </body>
    )
}