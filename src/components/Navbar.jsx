import React from 'react'
import '../styles/Navbar.css'
import { Link }   from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'


function Navbar() {

const [button,setButton] = useState(false)
 function handleState(){
   if(button === false){
      setButton(true);
   }
   else{
    setButton(false);

   }
   
  }
  console.log(button);
  

  return (
    <div className='Navbar'>
     <div className="left-nav">
      <div className="Ntitle">Ashray cp</div>
      </div>
        <div className="right-nav">
         <ul  id={button===false?'nav_close':'nav_open'} >
           <li>
               <Link to ='/'activeClass='active' smooth={true} spy={true} offset={100} duration={500}>Home</Link>  
           </li>
           <li>
                <Link to='about'  activeClass='active' smooth={true} spy={true} offset={20} duration={500}>About</Link>
           </li>
           <li>
                <Link to='portfolio'activeClass='active'smooth={true} spy={true} offset={20} duration={500}>Portfolio</Link>  
            </li>       
            <li>
               <Link to='skills' activeClass='active' smooth={true} spy={true} offset={100} duration={500}>Contact</Link>    
            </li>    
        </ul>   

      </div> 
      <div>

      <ul className='hiddenLinks' id={button===false?'close':'open'} >
           <li>
               <Link to ='home'activeClass='active' smooth={true} spy={true} offset={100} duration={500}>Home</Link>  
           </li>
           <li>
                <Link to='about'  activeClass='active' smooth={true} spy={true} offset={20} duration={500}>About</Link>
           </li>
           <li>
                <Link to='portfolio'activeClass='active'smooth={true} spy={true} offset={20} duration={500}>Portfolio</Link>  
            </li>       
            <li>
               <Link to='skills' activeClass='active' smooth={true} spy={true} offset={100} duration={500}>Contact</Link>    
            </li>    
        </ul>  
    
      </div>
      <div className='hamburger'>
        <MenuIcon onClick={handleState} id='menuIcon'/>
      </div>
    </div>
  )
}

export default Navbar