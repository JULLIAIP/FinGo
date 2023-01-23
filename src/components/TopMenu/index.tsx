import { useContext, useState } from 'react'
import { GlobalContext } from "../../global/UseContext"
import logo from '../../assets/logo.png'
import { MenuButton, TopMenuContain } from './style'


const TopMenu = (props: any) => {
    const [activeButton, setActiveButton] = useState("")

    const { setShowCadastro }: any = useContext(GlobalContext)

    return (
        <TopMenuContain>
            <img src={logo} />
            {props.data && props.data.map((item: any) => <MenuButton ativo={activeButton === item} onClick={() => {
                setActiveButton(item);
                setShowCadastro(item)
            }}>{item}</MenuButton>)}

        </TopMenuContain>
    )
}

export default TopMenu