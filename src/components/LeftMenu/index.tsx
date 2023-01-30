import { useContext } from 'react'
import { GlobalContext } from "../../global/UseContext"
import { LeftMenuButton, MenuContain } from './style.js'
import HomeIcon from '@mui/icons-material/Home';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PaidIcon from '@mui/icons-material/Paid';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';



const LeftMenu = () => {

    const { setShowPage, showPage }: any = useContext(GlobalContext)

    return (
        <MenuContain>
            <LeftMenuButton ativo ={showPage ==='HOME'} title="Home" onClick={() => setShowPage('HOME')}><HomeIcon /></LeftMenuButton>
            <LeftMenuButton ativo ={showPage ==='CADASTRO'} title="Cadastro" onClick={() => setShowPage('CADASTRO')}><CloudUploadIcon /></LeftMenuButton>
            {/* <LeftMenuButton ativo ={showPage ==='LACAMENTO'} title="Lançamento" onClick={() => setShowPage('LACAMENTO')}><SystemUpdateAltIcon /></LeftMenuButton>
            <LeftMenuButton ativo ={showPage ==='FLUXO-DE-CAIXA'} title="Fluxo de Caixa" onClick={() => setShowPage('FLUXO-DE-CAIXA')}><SyncAltIcon /></LeftMenuButton> */}
            <LeftMenuButton ativo ={showPage ==='ORCAMENTO'} title="Orçamento" onClick={() => setShowPage('ORCAMENTO')}><PaidIcon /></LeftMenuButton>
            {/* <LeftMenuButton ativo ={showPage ==='CAR-CARP'} title="Car Cap" onClick={() => setShowPage('CAR-CARP')}><PointOfSaleIcon /></LeftMenuButton> */}
        </MenuContain>
    )
}

export default LeftMenu