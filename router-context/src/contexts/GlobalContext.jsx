import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  let usuarioLogado = 'Gill Bates';
  const[usuarios, setUsuarios] = useState([
    {
        id: Date.now(),
        nome: "Usguri",
        email:"usguridosul@RS.com"
    },
    {
        id: Date.now()+1,
        nome: "arham",
        email:"arhamdosul@RS.com"
    },
    {
        id: Date.now()+1,
        nome: "NaoTemJeito",
        email:"linguicadefeijaoqueimadotortaopraesquerda58671@sacaomuxoingualumasacola.com"
    },
  ])
  
  return (
    <GlobalContext.Provider value={{ usuarioLogado, usuarios, setUsuarios}}>
      {children}
    </GlobalContext.Provider>
  );
};
