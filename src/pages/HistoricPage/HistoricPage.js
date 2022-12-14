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
    
    padding:0 17px;
    margin-top:70px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    h1{
        display:flex;
        align-items:center;
        height:74px;
        font-size: 23px;
        color: ${Colors.azul}
    }
`

const NoHistoricMessage = styled.div`
`
