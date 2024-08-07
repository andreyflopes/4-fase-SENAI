import Conteudo from "../../components/Conteudo"
import Header from "../../components/Header"
import "./index.css"

function Home() {
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

export default Home
