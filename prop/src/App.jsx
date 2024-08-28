import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './components/Titulo'
import Produto from './components/Produto'

function App() {
  const [inputImg, setInputImg] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputPreco, setInputPreco] = useState("")
  const [inputPeso, setInputPeso] = useState("")
  
  


  function CadastrarProd(){
    let produto = {
      "id":timestamp+1,
      "img": inputImg,
      "nome": inputNome,
      "descricao": inputDescricao,
      "preco": inputPreco,
      "peso": inputPeso
    }
    setProdutos([produto, ...produtos])
    console.log(produtos)
  }
  const timestamp = Date.now();
  const [produtos, setProdutos] = useState([
      // Itens existentes
      {
        "id": timestamp + 1,
      "img": "🪑",
      "nome": "Cadeira de praia",
      "descricao": "Uma cadeira pra usar no canal",
      "preco": 33,
      "peso": 10
    },
    {
      "id": timestamp + 2,
      "img": "🛏️",
      "nome": "Cama de solteiro",
      "descricao": "Uma cama confortável para uma pessoa",
      "preco": 199,
      "peso": 25
    },
    {
      "id": timestamp + 3,
      "img": "🛋️",
      "nome": "Sofá de 3 lugares",
      "descricao": "Sofá espaçoso e confortável para a sala",
      "preco": 599,
      "peso": 50
    },
    {
      "id": timestamp + 4,
      "img": "📚",
      "nome": "Estante de livros",
      "descricao": "Estante com 5 prateleiras para organizar seus livros",
      "preco": 89,
      "peso": 20
    },
    {
      "id": timestamp + 5,
      "img": "🍽️",
      "nome": "Conjunto de jantar",
      "descricao": "Mesa com 4 cadeiras, ideal para refeições em família",
      "preco": 299,
      "peso": 40
    },
    {
      "id": timestamp + 6,
      "img": "🛁",
      "nome": "Banheira de hidromassagem",
      "descricao": "Banheira com sistema de hidromassagem para relaxamento",
      "preco": 799,
      "peso": 60
    },
    {
      "id": timestamp + 7,
      "img": "🖥️",
      "nome": "Monitor 27\"",
      "descricao": "Monitor de 27 polegadas com alta resolução",
      "preco": 249,
      "peso": 5
    },
    {
      "id": timestamp + 8,
      "img": "🧺",
      "nome": "Cesto de roupa",
      "descricao": "Cesto grande para armazenar roupas sujas",
      "preco": 25,
      "peso": 3
    },
    {
      "id": timestamp + 9,
      "img": "🌿",
      "nome": "Planta ornamental",
      "descricao": "Planta para decorar ambientes internos",
      "preco": 45,
      "peso": 2
    },
    {
      "id": timestamp + 10,
      "img": "🕯️",
      "nome": "Luminária de mesa",
      "descricao": "Luminária elegante para iluminar sua mesa de trabalho",
      "preco": 55,
      "peso": 1
    },

    // Novos itens
    {
      "id": timestamp + 11,
      "img": "📺",
      "nome": "Televisão 40\"",
      "descricao": "Televisão de 40 polegadas com resolução 4K",
      "preco": 799,
      "peso": 12
    },
    {
      "id": timestamp + 12,
      "img": "🎸",
      "nome": "Guitarra Elétrica",
      "descricao": "Guitarra elétrica com amplificador",
      "preco": 450,
      "peso": 4
    },
    {
      "id": timestamp + 13,
      "img": "🛋️",
      "nome": "Puff",
      "descricao": "Puff confortável para qualquer ambiente",
      "preco": 129,
      "peso": 8
    },
    {
      "id": timestamp + 14,
      "img": "🛒",
      "nome": "Carrinho de compras",
      "descricao": "Carrinho de compras dobrável e leve",
      "preco": 60,
      "peso": 7
    },
    {
      "id": timestamp + 15,
      "img": "🔊",
      "nome": "Caixa de Som Bluetooth",
      "descricao": "Caixa de som com conexão Bluetooth e excelente qualidade de som",
      "preco": 120,
      "peso": 1
    },
    {
      "id": timestamp + 16,
      "img": "📷",
      "nome": "Câmera Fotográfica",
      "descricao": "Câmera digital com alta resolução",
      "preco": 650,
      "peso": 6
    },
    {
      "id": timestamp + 17,
      "img": "🌞",
      "nome": "Aquecedor Solar",
      "descricao": "Aquecedor solar eficiente para água",
      "preco": 350,
      "peso": 20
    },
    {
      "id": timestamp + 18,
      "img": "🚴",
      "nome": "Bicicleta",
      "descricao": "Bicicleta de alumínio para passeios",
      "preco": 250,
      "peso": 15
    },
    {
      "id": timestamp + 19,
      "img": "🌂",
      "nome": "Guarda-chuva",
      "descricao": "Guarda-chuva resistente e de alta qualidade",
      "preco": 30,
      "peso": 0.5
    },
    {
      "id": timestamp + 20,
      "img": "🧩",
      "nome": "Quebra-cabeça",
      "descricao": "Quebra-cabeça de 1000 peças",
      "preco": 45,
      "peso": 1
    },
    {
      "id": timestamp + 21,
      "img": "🛏️",
      "nome": "Cama de casal",
      "descricao": "Cama espaçosa e confortável para duas pessoas",
      "preco": 350,
      "peso": 40
    },
    {
      "id": timestamp + 22,
      "img": "📖",
      "nome": "Livro de receitas",
      "descricao": "Livro com diversas receitas deliciosas",
      "preco": 35,
      "peso": 1
    },
    {
      "id": timestamp + 23,
      "img": "🔋",
      "nome": "Carregador portátil",
      "descricao": "Carregador portátil para dispositivos móveis",
      "preco": 40,
      "peso": 0.2
    },
    {
      "id": timestamp + 24,
      "img": "🏷️",
      "nome": "Etiqueta de preços",
      "descricao": "Conjunto de etiquetas para preços e organização",
      "preco": 20,
      "peso": 0.1
    },
    {
      "id": timestamp + 25,
      "img": "📦",
      "nome": "Caixa organizadora",
      "descricao": "Caixa grande para armazenar itens diversos",
      "preco": 50,
      "peso": 3
    },
    {
      "id": timestamp + 26,
      "img": "🎨",
      "nome": "Kit de tintas",
      "descricao": "Kit completo com tintas acrílicas variadas",
      "preco": 70,
      "peso": 1
    },
    {
      "id": timestamp + 27,
      "img": "🏠",
      "nome": "Mini Casa de Bonecas",
      "descricao": "Casa de bonecas detalhada e decorada",
      "preco": 150,
      "peso": 5
    },
    {
      "id": timestamp + 28,
      "img": "🛒",
      "nome": "Cesta de compras",
      "descricao": "Cesta prática para compras e armazenamento",
      "preco": 45,
      "peso": 1
    },
    {
      "id": timestamp + 29,
      "img": "🔧",
      "nome": "Kit de ferramentas",
      "descricao": "Kit com ferramentas básicas para uso doméstico",
      "preco": 85,
      "peso": 3
    },
    {
      "id": timestamp + 30,
      "img": "🖨️",
      "nome": "Impressora",
      "descricao": "Impressora multifuncional para escritório e uso doméstico",
      "preco": 220,
      "peso": 10
    }
  ])






  return (
    <>
      <Titulo texto="uma rosa" emoji="🌹" />
      
      <div className="formCadastro">
        
        <h2>Cadastro de produtos</h2>
        <div className="container-inputs">
          
          <label>Img:</label>
          <input type="text" placeholder='Imagem' value={inputImg} onChange={()=>(setInputImg(event.target.value))}/>
      
          <label>Nome:</label>
          <input type="text" placeholder='Nome' value={inputNome} onChange={()=>(setInputNome(event.target.value))}/>

          <label>Descrição:</label>
          <input type="text" placeholder='Descrição' value={inputDescricao} onChange={()=>(setInputDescricao(event.target.value))}/>

          <label>Preço:</label>
          <input type="text" placeholder='Preço' value={inputPreco} onChange={()=>(setInputPreco(event.target.value))}/>

          <label>Peso:</label>
          <input type="text" placeholder='Peso' value={inputPeso} onChange={()=>(setInputPeso(event.target.value))}/>

        </div>
          <button onClick={CadastrarProd}>Cadastro</button>

      </div>
      <div className='container'>

        {produtos.map((p) => (<Produto produto={p} key={p.id} />))}
      </div>
    </>
  )
}

export default App
