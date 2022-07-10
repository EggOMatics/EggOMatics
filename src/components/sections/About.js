import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../styles/Themes';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`



const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
/*background-color: lightblue*/;


display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;

}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};

}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};

}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};

}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};

}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
width: 80%;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontsm};
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontsm};

}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};

}
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64em){
  width: 100%;

button{
  margin: 0 auto;
}
}
`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box> <Carousel/> </Box>
        <Box>
          <Title>
          Welcome To <br /> EggOMatics.
          </Title>
          <SubText>
          Egg-O-Matics is a private collection of NFTs—unique digital Video Game Charachters. These Eggs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
          With Over 100+ hand drawn charachters and traits, this game filled with eggs and automatic weapons will consist of many different events to determine the final winner, The top player will be presented with the ultimate prize of $1,000,000. However, don't be discouraged because all players will have an opportunity to make a profit through our In-Between Round Trading Process(For more information,Check FAQ). Join our ambitious, ever-growing community for the chance to win big with benefits and utilities!
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="null" />
            </ThemeProvider>
          </ButtonContainer>

        </Box>
      </Container>
    </Section>
  )
}

export default About