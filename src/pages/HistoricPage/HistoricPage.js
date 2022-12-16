import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Colors } from "../../constants/constants";

export default function HistoricPage() {
    return (
        <>
            <Navbar />
            <HistoricContainer>
                <h1>Histórico</h1>
                <NoHistoricMessage>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </NoHistoricMessage>
            </HistoricContainer>
            <Footer />
        </>
    )
}

const HistoricContainer = styled.div`
    width:375px;
    min-height:600px;
    padding:0 17px;
    padding-bottom:135px;
    margin-top:70px;
    gap:20px;
    background-color:#F2F2F2;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    h1{
        display:flex;
        margin-top:28px;
        font-size: 23px;
        color: ${Colors.azul}
    }
`

const NoHistoricMessage = styled.div`
`
