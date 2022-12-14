import styled from "styled-components"
import { Colors, logo } from "../../constants/constants"

export default function Navbar() {
    return (
        <NavbarContainer>
            <h1>TrackIt</h1>
            <img src={logo}/>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    height: 70px;
    width: 375px;
    padding:10px;
    padding-left:18px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    background-color: ${Colors.azul};
    position:fixed;
    top:0;

    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        color: white;
    }
    img{
        height: 51px;
        width: 51px;
        border-radius: 99px;
    }
`