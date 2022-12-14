import styled from "styled-components"
import { Colors } from "../../constants/constants"

export default function TodayHabits() {
    return (
        <Container>
            <HabitData>
                <h1>Ler 1 capítulo de livro</h1>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </HabitData>
            <CompleteTaskButton>✓</CompleteTaskButton>
        </Container>
    )
}

const Container = styled.div`
    align-items:center;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    background-color:white;
    display:flex;
    box-sizing:border-box;
`
const HabitData = styled.div`
        display:flex;
        flex-direction:column;
        gap:10px;
        padding:18px;
        box-sizing:border-box;
       
        h1{
            font-size: 20px;
            color: ${Colors.preto};
            line-height:25px;
        }
        p{
            line-height:16px;
            font-size: 13px;
            color: ${Colors.preto};
        }
    `
const CompleteTaskButton = styled.button`
    height: 69px;
    width: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    color:white;
    font-size:48px;
    `
    /*verde vomito #8FC549*/