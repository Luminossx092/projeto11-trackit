import styled from "styled-components"
import { Colors } from "../../constants/constants"

export const HomeScreenContainer = styled.div`
    width:375px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:68px;
    img{
        width:200px;
        height:auto;
    }
    h1{
        margin-bottom:32px;
        font-family: 'Playball', cursive;
        font-size: 69px;
        font-weight: 400;
        line-height: 86px;
        color: ${Colors.azul}
    }
    p{
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: ${Colors.azulClaro};
    }
`
export const InputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 6px;
    margin-bottom:25px;
    button{
        height: 45px;
        width: 303px;
        border-radius: 5px;
        background: ${Colors.azulClaro};
        color: white;
        font-size: 21px;
    }
    Audio{
        display:flex;
        justify-content:center;
        color:red;
    }
`