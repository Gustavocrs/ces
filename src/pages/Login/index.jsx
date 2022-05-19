import "./login.css";
import { GrStackOverflow } from "react-icons/gr";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("admin");
  const [password, setPassword] = useState("123");
  const navigate = useNavigate()

  function Logar(e) {
    e.preventDefault();
    if (login === "admin" && password === "123") {
      alert("login realizado");
      navigate("/home")
    } else {
      alert("login incorreto");
    }
    setLogin("");
    setPassword("");
  }

  return (
    <div className="containerLogin">
      <span>
        <GrStackOverflow className="iconLogoLogin" />
        <h1 className="tituloPrincipalLogin">
          CES - Controle de Equipamentos e Serviços
        </h1>
      </span>
      <div>
        <form>
          <label htmlFor="inputLogin">
            <input
              type="text"
              name="inputLogin"
              id="inputLogin"
              placeholder="Digite o seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <label htmlFor="inputSenha">
            <input
              type="password"
              name="inputSenha"
              id="inputSenha"
              placeholder="Digite a sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button text="Entrar" onClick={Logar} id="buttonLogin" />
        </form>
      </div>
    </div>
  );
}
