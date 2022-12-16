import { Link } from "react-router-dom";
import { BotaoHoje, FooterContainer } from "./styled";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
import { Colors } from "../../constants/constants";

export default function Footer() {
    const [rightAnswersRatio, setRightAnswersRatio] = useState(10)
    return (
        <FooterContainer>
            <Link to={"/habitos"} style={{textDecoration: 'none'}}><p>Hábitos</p></Link>
            <Link to={"/hoje"} >
                <BotaoHoje>
                    <CircularProgressbar
                        value={rightAnswersRatio}
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
            <Link to={'/historico'} style={{textDecoration: 'none'}}><p>Histórico</p></Link>
        </FooterContainer>
    )
}