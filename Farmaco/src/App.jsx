// App.jsx
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Atendimento from './pages/Atendimento' 
import Header from './components/Header'; 

function App() {
  const [pagina, setPagina] = useState(<Home />); 

  // Funções para mudar a página
  const irParaHome = () => {
    setPagina(<Home />);
  };

  const irParaAtendimento = () => {
    setPagina(<Atendimento />);
  };

  return (
    <>
      <Header irParaHome={irParaHome} irParaAtendimento={irParaAtendimento} />
      {pagina}
    </>
  );
}

export default App;
