import React from 'react'
import '../styles/Home.css'
import HomePic from '../assets/home.png'
import {Link} from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from '../assets/AshrayResume.pdf'

function Home() {
  return (
   <section className='Container' id='home'>
    <div className='leftside'>
        <img src={HomePic}></img>
    </div>
    <div className='rightside'>
        <span className='heading'>Hi I'm Ashray</span>
        <span className='subheading'> A  Web Developer</span>
        <div className="button">
        <a href={Resume}>
        <button id='resume-button'>Download Resume</button>
        </a>
        <Link to='skills'>
        <button id='contact-button'>Contact</button>
        </Link>
        
    </div>
    <div className="HSocials">
          <a href='https://www.linkedin.com/in/ashray-cp-2ba561195/'><LinkedInIcon className='socialsIcon'/></a>
          <a href='https://github.com/ashrayachu'><GitHubIcon className='socialsIcon'/></a>
        </div>
    </div>
   
   </section>
  )
}

export default Home