import React from 'react'
import styled from 'styled-components'

import { Layout, Wrapper, Header, Hero } from '../components'

import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import github from '../assets/images/github.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import spotify from '../assets/images/spotify.png'

const MediaLinks = styled.div`
  grid-column: 2;
  padding: 2rem;
  text-align: center;
  .img-logo {
    width: 100px;
    height: 100px;
    margin: auto auto;
    display: block;
    border-radius: 5px;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem 0 2rem;
    padding: 0.3rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      transition: 0.5s;
      margin: 0 1.5rem 0 1.5rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      transition: 0.5s;
      margin: 0 2.2rem 0 2.2rem;
    }
  }

  p {
    color: ${props => props.theme.colors.grey.light};
  }
`

const IndexPage = ({}) => (
  <Layout>
    <Wrapper> 
      <Header />
      <Hero />
      <MediaLinks>
        <a href="https://www.facebook.com/stilldrei" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={facebook} alt="facebook" title="https://www.facebook.com/stilldrei"/>
        </a>
        <a href="https://www.twitter.com/stilldrei" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={twitter} alt="twitter" title="https://www.twitter.com/stilldrei"/>
        </a>
        <a href="https://www.instagram.com/still_drei" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={instagram} alt="instagram" title="https://www.instagram.com/still_drei"/>
        </a>
        <a href="https://www.github.com/stilldrei" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={github} alt="github" title="https://www.github.com/stilldrei"/>
        </a>
        <a href="http://linkedin.com/in/andrea-veronica-mendoza-5869b6139" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={linkedin} alt="github" title="http://linkedin.com/in/andrea-veronica-mendoza-5869b6139"/>
        </a>
        <a href="https://open.spotify.com/user/andimendozait?si=2vibpeZESTCLfy-45VfgIQ" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={spotify} alt="github" title="https://open.spotify.com/user/andimendozait?si=2vibpeZESTCLfy-45VfgIQ"/>
        </a>
      </MediaLinks>
    </Wrapper>
  </Layout>
)

export default IndexPage
