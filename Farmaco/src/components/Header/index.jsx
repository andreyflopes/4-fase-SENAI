import React from 'react';
import './index.css';

function Header({ irParaHome, irParaAtendimento }) {
  return (
    <div className='header-container'>
      <div className='logo_titulo'>
        <img className='header-logo' src="../public/images/farmarcia-logo-pq.png" alt="" />
        <h1>Farmarcia Marcia</h1>
      </div>
  
      <button className='btn-header' onClick={irParaHome}> Home</button>
      <button className='btn-header' onClick={irParaAtendimento}>Atendimento</button>
    </div>
  );
}

export default Header;
