import React from 'react'
import '../styles/Footer.css'
import {Link} from 'react-scroll'
function Footer() {
  return (
    <section className='FooterContainer'>
       <div className="footer-links">
         <ul>
           <li>
               <Link to ='home' smooth={true} spy={true} offset={50} duration={500}>Home</Link>  
           </li>
           <li>
                <Link to='about' smooth={true} spy={true} offset={20} duration={500}>About</Link>
           </li>
           <li>
                <Link to='portfolio'smooth={true} spy={true} offset={20} duration={500}>Portfolio</Link>  
            </li>       
            <li>
               <Link to='skills'smooth={true} spy={true} offset={100} duration={500}>Contact</Link>    
            </li>    
        </ul>        
      </div> 
      <div className='copyright'>
        <span> copyright &copy; Ashray 2024.  All Rights Reserved</span>
      </div>
  </section>
  )
}

export default Footer