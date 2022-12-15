import { Link } from "react-router-dom";
import { FooterContainer } from "./styled";

export default function Footer() {
    return (
        <FooterContainer>
            <Link to={"/habitos"}><p>Hábitos</p></Link>
            <Link to={"/hoje"}><button>Hoje</button></Link>
            <Link to={'/historico'}><p>Histórico</p></Link>
        </FooterContainer>
    )
}