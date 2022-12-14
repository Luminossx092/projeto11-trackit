import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TodayHabits from "../../components/TodayHabits/TodayHabits";
import { Colors } from "../../constants/constants";

export default function TodaysPage() {
    return (
        <>
            <Navbar />
            <TodaysPageContainer>
                <DateAndProgressContainer>
                    <h1>Segunda, 17/05</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </DateAndProgressContainer>
                <TodayHabits/>
            </TodaysPageContainer>
            <Footer/>
        </>
    )
}
const TodaysPageContainer = styled.div`
    margin-top:70px;
    padding:0 17px;
    width:375px;
    box-sizing:border-box;
    background-color: #F2F2F2;
`
const DateAndProgressContainer = styled.div`
    height:107px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:3px;
    h1{
        font-size: 23px;
        color:${Colors.azul}
    }
    p{
        font-size:18px;
        color: ${Colors.gray}
    }
`