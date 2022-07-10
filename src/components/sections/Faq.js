import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;

@media (max-width: 48em){
  font-size: ${props => props.theme.fontxl};

}

`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 64em){
  width: 80%;
}
@media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{
    
      margin-top: 0;
  }
  }
}
`

const Box = styled.div`
width: 45%;

@media (max-width: 64em){
  width: 90%;
  align-self: center;
}
`


const Faq = () => {

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  
    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?" >
          Once minted or bought simply connect to your OpenSea account to view your NFTs. We also have our own Gateway for fast access to your NFTs, eggomatics.mypinata.cloud
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?" >
          A metaverse is a network of virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?" >
          The amount of royalties was fixed at 10% to finance the Game Future Events. All of The royalties will be used towards multiple prizes for the winners of the monthly tournment around the world in order to strengthen the community and build a network of gamers and investors with the same mindset and common interests.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?" >
          You will be able to use your NFT as a game charachter in the Metaverse and our future video game modes. Holding also means that you are part of an exclusive network of gamers.
          </Accordion>
          <Accordion title="WHAT ARE THE EggOMatics?" >
            It is a fighting game, but with eggs that yield weapons such as rifles, shotguns, and pistols on different settings. The players will be playing 1 vs 1 ,with a total of 14 rounds to the top, knocking each other off platforms for the chance winning 1 million dollar as the main event and the biggest prize. There will be also more follow up events where players will be playing against each other for prizes that includes watches, cars, and other awesome scores, or they can trade them in for thier worth in Ethereum.
          </Accordion>
          <Accordion title="WHAT IS THE IN-BETWEEN ROUND TRADING PROCESS?" >
             In each round, the winner will be given the chance to sell thier EggOMatics on trade platforms like OpenSea. With each stage reached within the game, the value of your player increases.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq