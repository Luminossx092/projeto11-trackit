import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import HabitWeekCard from "../../components/HabitWeekCard/HabitWeekCard";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileDataContext } from "../../components/ProfileDataContext";
import WeeklyHabit from "../../components/WeeklyHabit/WeeklyHabit";
import { BaseURL } from "../../constants/constants";
import { AddHabitContainer, HabitsContainer, NoHabitMessage } from "./styled";

export default function HabitsPage() {
    const [habits, setHabits] = useState([])
    const [weekPressButtons, setWeekPressButtons] = useState([])
    const userProfile = useContext(ProfileDataContext);
    const [createNewHabit, setCreateNewHabit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('');
    const config = {
        headers: {
            "Authorization": `Bearer ${userProfile.token}`
        }
    }
    useEffect(() => {
        if (habits.length === 0) {
            axios.get(`${BaseURL}habits`, config)
                .then((r) => {
                    setHabits([...habits, ...r.data])
                })
                .catch((e) => {
                    alert(e.message)
                })
        }
    }, []);
    function AddNewHabit(habit) {
        setIsLoading(true);
        axios.post(`${BaseURL}habits`, habit, config)
            .then((r) => {
                console.log(r)
                setName('');
                setWeekPressButtons([])
                setCreateNewHabit(false);
                setIsLoading(false);
                setHabits([...habits, r.data])
            })
            .catch((e) => {
                //setCreateNewHabit(false);
                setIsLoading(false);
                alert(e.message)
            })
    }
    function RemoveHabit(habitId) {
        axios.delete(`${BaseURL}habits/${habitId}`, config)
            .then((r) => {
                console.log(r)
                setHabits(habits.filter((h) => h.id !== habitId))
            })
            .catch((e) => {
                alert(e.message)
            })
    }
    return (
        <>
            <Navbar />
            <HabitsContainer>
                <AddHabitContainer>
                    <p>Meus h??bitos</p>
                    <button data-test="habit-create-btn" onClick={() => setCreateNewHabit(true)}>+</button>
                </AddHabitContainer >
                {createNewHabit && <WeeklyHabit 
                    setCreateNewHabit={setCreateNewHabit}
                    AddNewHabit={AddNewHabit}
                    isLoading={isLoading}
                    name={name}
                    setName={setName}
                    weekPressButtons={weekPressButtons}
                    setWeekPressButtons={setWeekPressButtons}
                />}
                {habits.length === 0 ?
                    <NoHabitMessage>
                        <p>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</p>
                    </NoHabitMessage> :
                    habits.map(h => <HabitWeekCard key={h.id} habit={h} RemoveHabit={RemoveHabit} />)}
            </HabitsContainer>
            <Footer />
        </>
    )
}