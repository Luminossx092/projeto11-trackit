import styled from "styled-components"
import { Colors, WeekDays } from "../../constants/constants"
import { BsTrash } from "react-icons/bs";

export default function HabitWeekCard({ habit , RemoveHabit}) {
    const { days, name,id } = habit;
    return (
        <Container>
            <HabitName>
                <p>{name}</p>
            </HabitName>
            <WeekList>
                {WeekDays.map((d, i) =>
                    <WeekDay key={i} isClicked={days.some(d => d === i + 1)}>{d}</WeekDay>)}
            </WeekList>
            <Trash onClick={()=>window.confirm("Você tem certeza que quer apagar este hábito?")&&RemoveHabit(id)}>
                <BsTrash />
            </Trash>
        </Container>
    )
}

const Container = styled.div`
    height: 91px;
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
   
    p{
        text-align: left;
        font-size: 20px;
        box-sizing:border-box;
    }
`

const WeekList = styled.div`
    display:flex;
    gap:3px;
`
const WeekDay = styled.p`
    
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    color: ${props => props.isClicked ? 'white' : "#DBDBDB"};
    background-color:${props => props.isClicked ? "#DBDBDB" : 'white'};
    border:1px solid #D4D4D4;
`
const Trash = styled.p`
position:absolute;
top:10px;
right:10px;
`