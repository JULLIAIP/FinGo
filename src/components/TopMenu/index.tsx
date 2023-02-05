import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/UseContext"
import logo from '../../assets/logo.png'
import { Activity, Gear, User } from 'phosphor-react'
import { MenuButton, TopMenuContain } from './style'
import { StepIconClassKey } from '@mui/material';


const TopMenu = (props: any) => {
    const [activeButton, setActiveButton] = useState("")
    const { setShowCadastro }: any = useContext(GlobalContext)
    const navigate = useNavigate()

    function goToPage(page: string) {

        navigate(page)

    }

    return (
        <TopMenuContain>

            <img src={logo} />

            <div>
                <MenuButton onClick={() => navigate('/')}>Home</MenuButton>
                <select onChange={(e) => goToPage(e.target.value)}>
                    <option selected value={"/cadastro"}>Cadastro</option>
                    {/* add numeração */}
                    <option value={"/cadastro/categorias"}>Categorias</option>
                    {/* saldo inicial de cada conta */}
                    <option value={"/cadastro/contas"}>Contas</option>
                </select>

                <select onChange={(e) => goToPage(e.target.value)}>
                    {/* arrumar bug de clique na primeira opção */}
                    <option selected value={"/lancamentos"}>Orçamento</option>
                    {/* mostrar a tabela de resumo durante os 12 meses + coluna de total e coluna de participação*/}
                    <option value={"/budget/entradas"}>Budget Entradas</option>
                    <option value={"/budget/saidas"}>Budget Saídas</option>
                    <option value={"/forecast/entradas"}>Forecast Entradas</option>
                    <option value={"/forecast/saidas"}>Forecast Saídas</option>
                </select>

                <select onChange={(e) => goToPage(e.target.value)}>
                    <option>Relatórios</option>
                    <option value={"/relatorios/budget-I"} >Budget I</option>
                    <option value={"/relatorios/budget-II"} >Budget II</option>
                    <option value={"/relatorios/forecast-I"} >Forecast I</option>
                    <option value={"/relatorios/forecast-II"} >Forecast II</option>
                </select>


            </div >
            <div>
                <button><Gear size={32} /></button>
                <button><User size={32} /></button>
            </div>
        </TopMenuContain >
    )
}

export default TopMenu