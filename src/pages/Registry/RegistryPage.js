import { Link } from "react-router-dom"
import { logo } from "../../constants/constants"
import { InputStyle } from "../../styles/inputStyle"
import {  InputsContainer, RegistryPageContainer } from "./styled"

export default function RegistryPage() {
    return (
        <RegistryPageContainer>
            <img src={logo} alt=""></img>
            <h1>TrackIt</h1>
            <InputsContainer>
                <InputStyle placeholder="email"/>
                <InputStyle placeholder="senha"/>
                <InputStyle placeholder="nome"/>
                <InputStyle placeholder="foto"/>
                <Link to={"/"}><button >Cadastrar</button></Link>
            </InputsContainer>
            <Link to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
        </RegistryPageContainer>
    )
}