
import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import UsuarioNaoLogado from './components/UsuarioNaoLogado'
import AreaAdultos from './components/AreaAdultos'

function App() {

  const [Usuario, setUsuario] = useState(false)
  const [idade, setIdade] = useState(0)
  let Logar = "Logar"
  let Deslogar = "Deslogar"
  return (
    <>

      



      <div className="renderContainer">
        {Usuario ? <UsuarioLogado /> : <UsuarioNaoLogado />}

        <button onClick={() => (setUsuario(Usuario ? false : true))}>{Usuario ? Deslogar : Logar}</button>
      </div>

      <div className="renderContainer">
        <button onClick={() => (setIdade(idade - 1))}>-</button>
        {idade}
        <button onClick={() => (setIdade(idade + 1))}>+</button>
        {idade >= 18 && <AreaAdultos />}
      </div>

      <div className="renderContainer">
        {Usuario ? <UsuarioLogado /> : <UsuarioNaoLogado /> }
      </div>
    </>
  )
}

export default App
