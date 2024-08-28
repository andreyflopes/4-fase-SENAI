
import { useState } from 'react'
import './App.css'
import Chart from "react-apexcharts";

function App() {

  const [contador, setContador] = useState(0)
  let cont = 50

  function Add() {
    setContador(contador + 1)
    console.log(contador)
  }

  function Incrementar() {
    setContador(contador + cont)
    console.log(contador)
  }

  return (
    <>
       

      <h1>Hellooooo</h1>
      <h1>{contador}</h1>

      <button onClick={Add}>Clique</button>
      
      <div>
        <a>{cont}</a>
        
      </div>

      <button onClick={Incrementar}>Inc useState</button>

    </>
  )
}

export default App
