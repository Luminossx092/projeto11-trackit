import axios from "axios"
import { useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom"
import { BaseURL, logo } from "../../constants/constants"
import { InputStyle } from "../../styles/inputStyle"
import { HomeScreenContainer, InputsContainer } from "./styled"

export default function HomeScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    function TryLoggingIn(e) {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`${BaseURL}login`, { email, password })
            .then((r) => alert(r))//useNavigate("/hoje")
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
                    <button type="submit" disabled={isLoading}>{isLoading ? <ThreeDots
                        height="20" 
                        width="300" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> :"Entrar"}</button>
                </InputsContainer>
            </form>
            <Link to={'/cadastro'}><p>Não tem uma conta? Cadastre-se!</p></Link>
        </HomeScreenContainer>
    )
}