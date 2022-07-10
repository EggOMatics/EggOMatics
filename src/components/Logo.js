import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxl} ;
color: ${props => props.theme.text};


transition: all 0.2s ease;
&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
  font-size: ${props => props.theme.fontxl} ;
}
`
//the transition and hover is what makes the logo getting larger smoother

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            Egg-O-Matics
        </Link>
    </LogoText>
  )
}

export default Logo