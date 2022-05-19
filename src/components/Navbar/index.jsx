import "./navbar.css";
import { GrStackOverflow } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <GrStackOverflow className="iconLogo" />
        <h1 className="tituloPrincipal">
          CES - Controle de Equipamentos e Serviços
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/home" className="linkLogin">
            Home
          </Link>
        </li>
        <li>
          <Link to="/incluir" className="linkLogin">
            Incluir
          </Link>
        </li>
        <li>
          <Link to="/login" className="linkLogin">
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}
