import { Container } from "./styles";
import HexagonGrayIcon from "../../assets/app_icons/hexagon_gray_icon.svg";

export function MainLogoGray() {
  return (
    <Container>
      <img 
        src={HexagonGrayIcon}
        alt='Símbolo monocromático de food explorer'
      />
      <div>
        <h1>food explorer</h1>
      </div> 
      <span className="sr-only">Logotipo de rodapé de página da marca Food Explorer</span>     
    </Container>
  )
}
