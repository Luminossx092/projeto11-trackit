import styled from "styled-components";
import { Colors } from "../../constants/constants";

export const FooterContainer = styled.div`
    height: 70px;
    width: 375px;
    position:fixed;
    bottom:0;
    padding:0 36px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:white;
    box-sizing:border-box;
    p{
        font-size: 18px;
        color:${Colors.azulClaro}
    }
    button{
        height: 91px;
        width: 91px;
        border-radius:100%;
        background-color: ${Colors.azulClaro};
    }
`