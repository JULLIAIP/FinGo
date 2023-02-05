
import { UseGlobalContext } from './global/UseContext'
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './rotas/rotas';
import TopMenu from './components/TopMenu';

function App() {


  return (
    <BrowserRouter> 
    <UseGlobalContext>
      <TopMenu />
      <Rotas />
    </UseGlobalContext>     
    </BrowserRouter>
  )
}

export default App
