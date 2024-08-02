
import './App.css'
import Conteudo from './components/Conteudo'
import Header from './components/Header'

function App() {

  return (
    <div className='app-container'>
     
      <Header />

      <div className='body'>

        <Conteudo />
        <Conteudo />
        <Conteudo />

      </div>

    </div>
  )
}

export default App
