import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
function Home() {
    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

    function inventoNaHora(){
        let usuarioNovo={
            id:Date.now(),
            nome:"Andrey",
            email:"lopesandrey2002@gmail.com"
        }

        setUsuarios([...usuarios, usuarioNovo])
    }
  return (
    <div>
        <NavBar />
      <h1>Home dus guri</h1>
      <p>Olá {usuarioLogado} </p>
      <div>
        {usuarios.map((usuario)=>(
            <div key={usuario.id}>
                <p>Nome:{usuario.nome}</p>
                <p>E-mail:{usuario.email}</p>
                <p>Id:{usuario.id}</p>
            </div>
        ))}
      </div>
      <button onClick={inventoNaHora}>criar user</button>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam eos quibusdam tempore voluptate ea molestias magni laborum quaerat minus at, vero architecto incidunt voluptates! Ea iure eveniet autem nostrum aperiam!</p>
    </div>
  )
}

export default Home
