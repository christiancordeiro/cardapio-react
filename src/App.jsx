import Navegacao from "./Navegacao"
import "./App.css"
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio"
import ItemCardapio from "./ItemCardapio"
import { useState } from "react"

function App() {
  const [paginaSelecionada, setPaginaSelecionada] = useState(0)
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]

  return (
    <>
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item, index) => (
          <ItemCardapio
            key={index}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  )
}

export default App
