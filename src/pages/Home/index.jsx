import "./home.css";
import { MdRemoveCircle } from "react-icons/md";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="containerTable">
        <table>
          <tr>
            <th>Status</th>
            <th>Pedido</th>
            <th>QTD</th>
            <th>Cliente</th>
            <th>Prazo Inicial</th>
            <th>Prazo Final</th>
            <th>Proposta</th>
            <th>Data da Entrada</th>
            <th>Data da Aprovação</th>
            <th>Valor (R$)</th>
            <th>NF</th>
            <th>
              <MdRemoveCircle />
            </th>
          </tr>
          <tr>
            <td>Calibração</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Ag. NF</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Embalagem</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Ag. AP</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Certificado</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Atraso</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <td>Liberado</td>
            <td>99999</td>
            <td>20</td>
            <td>Cliente (Razão social)</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>XXXXXX-XX</td>
            <td>XX/XX/XXXX</td>
            <td>XX/XX/XXXX</td>
            <td>R$XXXX,XX</td>
            <td>XXXX</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
