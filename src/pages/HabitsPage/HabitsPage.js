import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import WeeklyHabit from "../../components/WeeklyHabit/WeeklyHabit";
import { AddHabitContainer, HabitsContainer, NoHabitMessage } from "./styled";

export default function HabitsPage() {
    return (
        <>
            <Navbar />
            <HabitsContainer>
                <AddHabitContainer>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </AddHabitContainer>
                <WeeklyHabit/>
                <NoHabitMessage>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoHabitMessage>
            </HabitsContainer>
            <Footer/>
        </>
    )
}