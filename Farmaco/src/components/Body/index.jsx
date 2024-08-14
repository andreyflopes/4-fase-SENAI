import React from 'react'
import "./index.css"
import ConteudoUm from '../ConteudoUm'
import ConteudoDois from '../ConteudoDois'
import ConteudoTres from '../ConteudoTres'

function Body() {
  return (
    <div className='body-container'>
      <ConteudoUm />
      <ConteudoDois />
      <ConteudoTres />
     
      
    </div>
  )
}

export default Body
