import styled from "styled-components"
import { Colors } from "../../constants/constants"

export default function WeeklyHabit(){

    const weekDays = ["D","S","T","Q","Q","S","S"]
    return (
        <Container>
            <HabitName>
                <input placeholder="nome do hábito"></input>
            </HabitName>
            <WeekList>
                {weekDays.map(d=>
                    <button>{d}</button>)}
            </WeekList>
            <Buttons>
                <p>Cancelar</p>
                <button>Salvar</button>
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
    button{
        height: 30px;
        width: 30px;
        border-radius: 5px;
}

/*font color: #DBDBDB;

border: 1px solid #D4D4D4
background:  #D5D5D5
background: #CFCFCF;
border: 1px solid #CFCFCF
 */
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
    }
`
