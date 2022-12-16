import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import styled from "styled-components"
import { Colors } from "../../constants/constants"

export default function TodayHabits({ habit, CheckHabitDone }) {
    const { id, name, done, currentSequence, highestSequence } = habit;
    return (
        <Container data-test="today-habit-container" >
            <HabitData>
                <h1 data-test="today-habit-name">{name}</h1>
                <p data-test="today-habit-sequence">Sequência atual:
                    <SerVerdeOuNaoSerEisAQuestao
                        verde={currentSequence > 0}>
                        {currentSequence} dia{currentSequence !== 1 && "s"}
                    </SerVerdeOuNaoSerEisAQuestao>
                </p>
                <p data-test="today-habit-record">Seu recorde:
                    <SerVerdeOuNaoSerEisAQuestao
                        verde={highestSequence === currentSequence && highestSequence > 0}>
                        {highestSequence} dia{highestSequence !== 1 && "s"}
                    </SerVerdeOuNaoSerEisAQuestao>
                </p>
            </HabitData>
            <BsFillCheckSquareFill
                data-test="today-habit-check-btn"
                fontSize={'70px'}
                onClick={() => CheckHabitDone(habit)}
                color={done ? Colors.verde : '#E7E7E7'} />
        </Container>
    )
}

const Container = styled.div`
    height: 94px;
    width: 340px;
    border-radius: 5px;
    padding:13px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
`
const HabitData = styled.div`
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        h1{
            font-size: 20px;
            color: ${Colors.preto};
            line-height:36px;
        }
        p{
            line-height:14px;
            font-size: 13px;
            color: ${Colors.preto};
        }
    `
const SerVerdeOuNaoSerEisAQuestao = styled.span`
    color:${props => props.verde && Colors.verde}
`