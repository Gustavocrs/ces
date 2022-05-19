import "./incluir.css";
import Navbar from "../../components/Navbar";
import { AiOutlineClear, AiOutlineSave } from "react-icons/ai";

export default function Incluir() {
  return (
    <>
      <Navbar />
      <div className="containerInserir">
        <div className="box">
          <h1 className="formTitulo">Cadastrar novo pedido</h1>
          <form className="formInserir">
            <label className="labelFormInserir" htmlFor="pedido">
              Pedido
              <input
                className="inputFormInserir"
                type="number"
                name="pedido"
                id="pedido"
              />
            </label>

            <label className="labelFormInserir" htmlFor="qtd">
              Qtd de itens
              <input
                className="inputFormInserir"
                type="number"
                name="qtd"
                id="qtd"
              />
            </label>

            <label className="labelFormInserir" htmlFor="proposta">
              Proposta
              <input
                className="inputFormInserir"
                type="number"
                name="proposta"
                id="proposta"
              />
            </label>

            <label
              className="labelFormInserir"
              htmlFor="cliente"
              id="labelCliente"
            >
              Cliente
              <input
                className="inputFormInserir"
                type="text"
                name="cliente"
                id="cliente"
              />
            </label>

            <label className="labelFormInserir" htmlFor="dtEntrada">
              Data da Entrada
              <input
                className="inputFormInserir"
                type="date"
                name="dtEntrada"
                id="dtEntrada"
              />
            </label>

            <label className="labelFormInserir" htmlFor="dtAprovacao">
              Data da Aprovação
              <input
                className="inputFormInserir"
                type="date"
                name="dtAprovacao"
                id="dtAprovacao"
              />
            </label>

            <label className="labelFormInserir" htmlFor="valor">
              Valor total
              <input
                className="inputFormInserir"
                type="number"
                name="valor"
                id="valor"
              />
            </label>

            <label className="labelFormInserir" htmlFor="nf">
              Nota Fiscal
              <input
                className="inputFormInserir"
                type="number"
                name="nf"
                id="nf"
              />
            </label>
          </form>
          <div className="iconsDiv">
            <AiOutlineClear className="iconsInserir" />
            <AiOutlineSave className="iconsInserir" />
          </div>
        </div>
      </div>
    </>
  );
}
