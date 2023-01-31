
import { UseGlobalContext } from './global/UseContext'
import GlobalStyle from './global/style'
import { BrowserRouter } from "react-router-dom";
import './/global/global.css'
import { Rotas } from './rotas/rotas';
import TopMenu from './components/TopMenu';

function App() {


  return (
    <UseGlobalContext>
      <BrowserRouter>
        <GlobalStyle />
        <TopMenu />
        <Rotas />
      </BrowserRouter>
    </UseGlobalContext>
  )
}

export default App
