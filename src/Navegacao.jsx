import restaurante from "./assets/hashtaurante.webp"

function Navegacao(props) {
  return (
    <>
      <img src={restaurante} alt="" className="capa" />
      <div className="navegacao">
        <input
          type="radio"
          name="opcao-pagina"
          id="pagina-01"
          defaultChecked
          onClick={() => props.setPaginaSelecionada(0)}
        />
        <label htmlFor="pagina-01">Pratos Principais</label>
        <input
          type="radio"
          name="opcao-pagina"
          id="pagina-02"
          onClick={() => props.setPaginaSelecionada(1)}
        />
        <label htmlFor="pagina-02">Sobremesas</label>
        <input
          type="radio"
          name="opcao-pagina"
          id="pagina-03"
          onClick={() => props.setPaginaSelecionada(2)}
        />
        <label htmlFor="pagina-03">Bebidas</label>
      </div>
    </>
  )
}

export default Navegacao
