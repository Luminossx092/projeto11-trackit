import styled from "styled-components"
import { Colors } from "../../constants/constants"

export const HabitsContainer = styled.div`
    width: 375px;
    margin-top:70px;
    padding: 0 18px;
    display:flex;
    flex-direction:column;
    gap:20px;
    background-color:#F2F2F2;
    box-sizing:border-box;
`
export const AddHabitContainer = styled.div`
    height: 85px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    p{
        font-size: 23px;
        color: ${Colors.azul}
    }
    button{
        height: 35px;
        width: 40px;
        font-size:20px;
        border-radius: 5px;
        background-color: ${Colors.azulClaro};
        color:white;
        border:1px ${Colors.azul};
    }
`

export const NoHabitMessage = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    p{
        font-size: 18px;
    } 
`