import { Link } from "react-router-dom"
import { logo } from "../../constants/constants"
import { InputStyle } from "../../styles/inputStyle"
import { HomeScreenContainer, InputsContainer } from "./styled"

export default function HomeScreen() {
    return (
        <HomeScreenContainer>
            <img src={logo} alt=""></img>
            <h1>TrackIt</h1>
            <InputsContainer>
                <InputStyle placeholder="email"/>
                <InputStyle placeholder="senha"/>
                <Link to={'/habitos'}><button >Entrar</button></Link>
            </InputsContainer>
            <Link to={'/cadastro'}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </HomeScreenContainer>
    )
}