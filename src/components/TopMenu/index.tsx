import { useContext, useState } from 'react'
import { useNavigate} from "react-router-dom";
import { GlobalContext } from "../../global/UseContext"
import logo from '../../assets/logo.png'
import { Activity, Gear, User } from 'phosphor-react'
import { MenuButton, TopMenuContain } from './style'


const TopMenu = (props: any) => {
    const [activeButton, setActiveButton] = useState("")
    const { setShowCadastro }: any = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <TopMenuContain>

            <img src={logo} />

            <div>
                <MenuButton onClick={() => navigate('/')}>Home</MenuButton>

                <MenuButton onClick={() => navigate("/lancamentos")}>Lançamentos</MenuButton>
                <MenuButton onClick={() => navigate("/financeiro/entradas")}>Contas a receber</MenuButton>
                <MenuButton onClick={() => navigate("/financeiro/saidas")}>Contas a pagar</MenuButton>

                <MenuButton onClick={() => navigate("/relatorios/budget-I")} >Budget I</MenuButton>
                <MenuButton onClick={() => navigate("/relatorios/budget-II")} >Budget II</MenuButton>
                <MenuButton onClick={() => navigate("/relatorios/forecast-I")} >Forecast I</MenuButton>
                <MenuButton onClick={() => navigate("/relatorios/forecast-II")} >Forecast II</MenuButton>

            </div >
            <div>
                <button><Gear size={32} /></button>
                <button><User size={32} /></button>
            </div>
        </TopMenuContain >
    )
}

export default TopMenu