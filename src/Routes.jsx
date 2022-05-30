import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Incluir from "./pages/Incluir";
import Home from "./pages/Home";

const Private = ({ Item }) => {
  const logado = true;
  return logado > 0 ? <Item /> : <Login />;
};

export default function RoutesAPP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route path="/incluir" element={<Private Item={Incluir} />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
