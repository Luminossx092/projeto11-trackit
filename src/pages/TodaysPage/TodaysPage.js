import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileDataContext } from "../../components/ProfileDataContext";
import TodayHabits from "../../components/TodayHabits/TodayHabits";
import { BaseURL, Colors, WeekNames } from "../../constants/constants";

export default function TodaysPage() {
    const userProfile = useContext(ProfileDataContext);
    const [habits, setHabits] = useState([]);
    const dayjs = require('dayjs');
    const isThereAnyHabit = habits.length === 0 || !habits.some(h => h.done);
    const config = {
        headers: {
            "Authorization": `Bearer ${userProfile.token}`
        }
    }
    dayjs().format();
    useEffect(() => UpdateTodaysPage(), []);

    function UpdateTodaysPage() {
        {
            axios.get(`${BaseURL}habits/today`, config)
                .then((r) => {
                    setHabits(r.data)
                })  
                .catch((e) => console.log(e))
        }
    }

    function CheckHabitDone(checkedHabit) {
        if (checkedHabit.done) {
            axios.post(`${BaseURL}habits/${checkedHabit.id}/uncheck`, {}, config)
                .then((r) => {
                    UpdateTodaysPage()
                })
                .catch((e) => console.log(e))
        }
        else {
            axios.post(`${BaseURL}habits/${checkedHabit.id}/check`, {}, config)
                .then((r) => {
                    UpdateTodaysPage()
                })
                .catch((e) => console.log(e))
        }
    }
    return (
        <>
            <Navbar />
            <TodaysPageContainer>
                <DateAndProgressContainer isThere={isThereAnyHabit}>
                    <h1>{WeekNames[dayjs().get('day')]}, {dayjs().get('date')}/{dayjs().get('month')}</h1>
                    <p>{isThereAnyHabit ?
                        'Nenhum hábito concluído ainda' :
                        `${(habits.filter(h => h.done).length*100 / habits.length).toFixed(2)}% dos hábitos concluídos`}</p>
                </DateAndProgressContainer>
                {habits.map(h =>  <TodayHabits key={h.id} habit={h} CheckHabitDone={CheckHabitDone} />)}
            </TodaysPageContainer>
            <Footer />
        </>
    )
}
const TodaysPageContainer = styled.div`
    margin-top:70px;
    padding:0 17px;
    width:375px;
    gap:3px;
    box-sizing:border-box;
    background-color: #F2F2F2;
    display:flex;
    flex-direction:column;
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
        color:  ${props=> props.isThere? Colors.gray:Colors.verde}
    }
`