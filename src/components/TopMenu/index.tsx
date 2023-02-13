import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/UseContext"
import logo from '../../assets/logo.png'
import { Gear, User } from 'phosphor-react'
import { MenuButton, TopMenuContain } from './style'
import SelectMenu from '../SelectMenu';



const TopMenu = (props: any) => {
    const [activeButton, setActiveButton] = useState("")
    const { setShowCadastro }: any = useContext(GlobalContext)

    const navigate = useNavigate()

    function goToPage(page: string) {

        navigate(page)

    }

    return (
        <TopMenuContain className='text-emerald-50'>

            <img src={logo} />

            <div>
                <MenuButton onClick={() => navigate('/')}>Home</MenuButton>

                <select onChange={(e) => goToPage(e.target.value)}>
                    {/* arrumar bug de clique na primeira opção */}
                    <option value={"/lancamentos"}>Orçamento</option>
                    {/* mostrar a tabela de resumo durante os 12 meses + coluna de total e coluna de participação*/}
                    <option value={"/budget/entradas"}>Budget Entradas</option>
                    <option value={"/budget/saidas"}>Budget Saídas</option>
                </select>

                <select onChange={(e) => goToPage(e.target.value)}>
                    <option >Relatórios</option>
                    <option value={"/relatorios/budget-I"} >Budget I</option>
                    <option value={"/relatorios/budget-II"} >Budget II</option>
                </select>


            </div >
            <div>
                <button onClick={() => goToPage('config')}><Gear size={32} /></button>
                <button><User size={32} /></button>
            </div>
        </TopMenuContain >
    )
}

export default TopMenu