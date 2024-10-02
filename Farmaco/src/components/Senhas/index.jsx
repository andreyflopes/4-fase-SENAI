import React, { useState } from 'react';
import './index.css';

function Senhas() {
    const [fila, setFila] = useState([]);
    const [contadorNormal, setContadorNormal] = useState(1);
    const [contadorPreferencial, setContadorPreferencial] = useState(1);
    const [senhaAtual, setSenhaAtual] = useState("--");

    const gerarSenha = (tipo) => {
        let novaSenha = "";

        if (tipo === "normal") {
            novaSenha = "N" + contadorNormal;
            setContadorNormal(contadorNormal + 1);
        } else if (tipo === "preferencial") {
            novaSenha = "P" + contadorPreferencial;
            setContadorPreferencial(contadorPreferencial + 1);
        }

        setFila([...fila, { tipo: tipo, senha: novaSenha }]);

    };

    function chamarProximaSenha() {
        let proximaSenha = "--"

        const IndicePreferencial = fila.findIndex(item => item.tipo == "preferencial")

        if (IndicePreferencial != -1) {
            proximaSenha = fila[IndicePreferencial].senha

            const novaFila = [...fila]
            novaFila.splice(IndicePreferencial, 1)
            setFila(novaFila)
        } else if (fila.length > 0) {
            proximaSenha = fila[0].senha

            setFila(fila.slice(1))
        }

        setSenhaAtual(proximaSenha)
    }


    return (
        <div className='senha-container'>
            <div className='gerarSenha-container'>
                <div className="div-btnSenha">
                    <button onClick={() => gerarSenha("normal")}>Gerar Senha Normal</button>
                    <button onClick={() => gerarSenha("preferencial")}>Gerar Senha Preferencial</button>
                </div>

                <div className="div-filaSenhas-container">
                    <h3>Senhas</h3>
                    <div className="div-filaSenhas">
                        <ul>
                            {fila.map((item, index) => (
                                <li key={index}>
                                    {item.senha} ({item.tipo === "preferencial" ? "Preferencial" : "Normal"})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
                <div className='div-chamarSenha'>
                    <button onClick={() => chamarProximaSenha()}>Chamar Senha</button>
                    {senhaAtual}
                </div>
        </div>
    );
}

export default Senhas;
