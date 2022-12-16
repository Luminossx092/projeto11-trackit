import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BaseURL, logo } from "../../constants/constants"
import LoadingDots from "../../components/LoadingDots"
import { InputStyle } from "../../styles/inputStyle"
import { HomeScreenContainer, InputsContainer } from "./styled"

export default function HomeScreen({setLoginData}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    function TryLoggingIn(e) {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`${BaseURL}auth/login`, { email, password })
            .then((r) => {
                setLoginData(r.data);
                setIsLoading(false);
                navigate("/hoje")})
            .catch((e) => {
                alert(e.response.data.message);
                setIsLoading(false);
            })
    }
    return (
        <HomeScreenContainer>
            <img src={logo} alt=""></img>
            <h1>TrackIt</h1>
            <form onSubmit={TryLoggingIn}>
                <InputsContainer>
                    <InputStyle type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        disabled={isLoading}
                        required />
                    <InputStyle type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="senha"
                        disabled={isLoading}
                        required />
                    <button type="submit" disabled={isLoading}>{isLoading ? <LoadingDots/>:"Entrar"}</button>
                </InputsContainer>
            </form>
            <Link to={'/cadastro'} style={{textDecoration: 'none'}}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </HomeScreenContainer>
    )
}