import { useState } from "react"
import styled from "styled-components"
import { Colors, WeekDays } from "../../constants/constants"
import LoadingDots from "../LoadingDots";

export default function WeeklyHabit({setCreateNewHabit, AddNewHabit,isLoading ,name, setName,weekPressButtons, setWeekPressButtons}) {
    function ToggleWeekDay(i){
        if(!weekPressButtons.some(d=>d===i)){setWeekPressButtons([...weekPressButtons,i])}
        else{setWeekPressButtons(weekPressButtons.filter((d)=>d!==i))}
    }
    return (
        <Container data-test="habit-create-container">
            <HabitName>
                <input data-test="habit-name-input" disabled={isLoading} value={name} onChange={(e)=>setName(e.target.value)} placeholder="nome do hábito"></input>
            </HabitName>
            <WeekList >
                {WeekDays.map((d,i )=>
                    <WeekButton data-test="habit-day" key={i} isClicked={weekPressButtons.some(d=>d===i)} onClick={()=>ToggleWeekDay(i)}>{d}</WeekButton>)}
            </WeekList>
            <Buttons>
                <p data-test="habit-create-cancel-btn" disabled={isLoading} onClick={() => setCreateNewHabit(false)}>Cancelar</p>
                <button data-test="habit-create-save-btn" disabled={isLoading} onClick={()=>AddNewHabit({name,days:weekPressButtons.sort()})}>{isLoading ? <LoadingDots/>:"Salvar"}</button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    height: 180px;
    width: 340px;
    border-radius: 5px;
    background-color:white;
    position:relative;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:18px;
    box-sizing:border-box;
`
const HabitName = styled.div`
   
    input{
        padding-left:11px;
        height: 45px;
        width: 303px;
        border-radius:5px;
        font-size: 20px;
        border: 1px solid #D4D4D4;
        box-sizing:border-box;
    }
`
const WeekList = styled.div`
    display:flex;
    gap:3px;
`
const WeekButton = styled.button`
    font-size:20px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    color: ${props=>props.isClicked?'white':"#DBDBDB"};
    background-color:${props=>props.isClicked?"#DBDBDB":'white'};
    border:1px solid #D4D4D4;
`
const Buttons = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items:center;
    position:absolute;
    gap:23px;
    bottom:15px;
    right:15px;
button{
    height: 35px;
    width: 84px;
    border-radius: 5px;
    background-color: ${Colors.azulClaro};
    font-size: 16px;
}
p{
    font-size: 16px;
    :hover{
        cursor: pointer;
    }
}
`