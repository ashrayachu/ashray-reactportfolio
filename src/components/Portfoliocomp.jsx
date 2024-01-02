import React from 'react'
import '../styles/Portfolio.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


function Portfoliocomp({image,title,link,lang,deploy}) {
  return (
    <div className='Portfoliocomp'>
  
       <img className='image' src={image} alt="image" />
       <div className="content">
       <p className='Ptitle'>{title}</p>
       <a className='link'href={link}>
        <GitHubIcon className='gitProjectLink'/>
        {link}</a>
        <a className='deploy' href={deploy}>
        <LaunchIcon className='launch'/> {deploy}</a>
         <div className="languages">
          <ul><li>{lang}</li></ul>
         </div>
       </div>
    </div>
  )
}

export default Portfoliocomp