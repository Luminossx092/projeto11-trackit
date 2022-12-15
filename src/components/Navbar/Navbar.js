import { useContext } from "react"
import styled from "styled-components"
import { Colors } from "../../constants/constants"
import { ProfileDataContext } from "../ProfileDataContext"

export default function Navbar() {
    const profile = useContext(ProfileDataContext)
    return (
        <NavbarContainer>
            <h1>TrackIt</h1>
            <img src={profile.image}/>
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
    z-index:1;

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