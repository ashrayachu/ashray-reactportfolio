import React from 'react'
import "../styles/Certificatescomp.css"
import LaunchIcon from '@mui/icons-material/Launch';


function Certificatescomp({image,title,sour,desc}) {

  return (
   
        <div className='Certificatescomp'>  
           <img className='cImg'src={image} alt='image'/>     
           <div className='certificateContent'>
              <span className='Cheading'>{title}</span>
              <p className="description">
              {desc}
              </p>
              <div className="Clink">
              <a className='cSrc' href={sour}><LaunchIcon className='Claunch'/> Click here to view the certificate</a>
              </div>
           </div> 
                                                                                            
        </div>

  )
    
}

export default Certificatescomp