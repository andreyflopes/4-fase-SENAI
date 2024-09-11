
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Portifolio from './pages/Portifolio'
import Viagens from './pages/Viagens'

function App() {
  const [pagina, setPagina] = useState(<Home/>)
  return (
    <>
      { pagina  }
      <nav>
        <button onClick={()=> setPagina(<Home/>)}>Home</button>
        <button onClick={()=> setPagina(<Portifolio/>)}>Portifolio</button>
        <button onClick={()=> setPagina(<Viagens/>)}>Viagens</button>
      </nav>
    </>
  )
}

export default App
