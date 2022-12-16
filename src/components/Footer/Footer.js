import { Link } from "react-router-dom";
import { BotaoHoje, FooterContainer } from "./styled";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import { Colors } from "../../constants/constants";
import { ProfileTodayDataContext } from "../ProfileDataContext";

export default function Footer() {
    const habits = useContext(ProfileTodayDataContext);
    const percentage = (habits.filter(h=>h.done===true).length*100/habits.length).toFixed(2);
    return (
        <FooterContainer data-test="menu" >
            <Link data-test="habit-link" to={"/habitos"} style={{textDecoration: 'none'}}><p>Hábitos</p></Link>
            <Link data-test="today" to={"/hoje"} >
                <BotaoHoje>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background={true}
                        backgroundPadding={7}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '24px',
                            pathTransitionDuration: 0.5,
                            pathColor: 'white',
                            textColor: 'white',
                            trailColor: Colors.azulClaro,
                            backgroundColor: Colors.azulClaro,
                        })}
                    />
                </BotaoHoje>
            </Link>
            <Link data-test="history-link"  to={'/historico'} style={{textDecoration: 'none'}}><p>Histórico</p></Link>
        </FooterContainer>
    )
}