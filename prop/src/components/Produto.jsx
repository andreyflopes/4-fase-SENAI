import React from 'react'
import "./Produto.css"

function Produto(props) {
 let p = props.produto
  return (
    <div className='produto'>
       <h1>{p.img}</h1>
       <h2>{p.nome}</h2>
       <h3> {p.descricao} </h3>
       <h3> preço: {p.preco} PCs (pesos coreanos)</h3>
       <h3> peso:{p.peso}</h3>
       <p>{p.id}</p>
    </div>
  )
}

export default Produto
