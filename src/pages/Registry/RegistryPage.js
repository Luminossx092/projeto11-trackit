import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BaseURL, logo } from "../../constants/constants"
import LoadingDots from "../../components/LoadingDots";
import { InputStyle } from "../../styles/inputStyle"
import { InputsContainer, RegistryPageContainer } from "./styled"

export default function RegistryPage() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    function TryRegistry(e) {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`${BaseURL}auth/sign-up`, form)
            .then(() => {
                setIsLoading(false);
                navigate("/")
            })
            .catch((e) => {
                alert(e.response.data.message);
                setIsLoading(false);
            })
    }
    return (
        <RegistryPageContainer>
            <img src={logo} alt=""></img>
            <h1>TrackIt</h1>
            <form onSubmit={TryRegistry}>
                <InputsContainer>
                    <InputStyle
                        data-test="email-input"
                        type="email"
                        name="email"
                        onChange={handleForm}
                        value={form.email}
                        disabled={isLoading}
                        required
                        placeholder="email" />
                    <InputStyle
                        data-test="password-input"
                        type="password"
                        name="password"
                        onChange={handleForm}
                        value={form.password}
                        disabled={isLoading}
                        required
                        placeholder="senha" />
                    <InputStyle
                        data-test="user-name-input"
                        type="text"
                        name="name"
                        onChange={handleForm}
                        value={form.name}
                        disabled={isLoading}
                        required
                        placeholder="nome" />
                    <InputStyle
                        data-test="user-image-input"
                        type="url"
                        name="image"
                        onChange={handleForm}
                        value={form.image}
                        disabled={isLoading}
                        required
                        placeholder="foto" />
                    <button data-test="signup-btn" type="submit" disabled={isLoading}>{isLoading ? <LoadingDots /> : "Cadastrar"}</button>
                </InputsContainer>
            </form>
            <Link data-test="login-link" to={"/"} style={{ textDecoration: 'none' }}><p>J?? tem uma conta? Fa??a login!</p></Link>
        </RegistryPageContainer>
    )
}