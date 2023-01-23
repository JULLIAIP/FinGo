
import { UseGlobalContext } from './global/UseContext'
import { HomePage } from './pages/HomePage'
import GlobalStyle from './global/style'
import { Roteador } from './pages/roteador';


function App() {

  return (
    <UseGlobalContext>
      <GlobalStyle />
      <Roteador/>
    </UseGlobalContext>
  )
}

export default App
