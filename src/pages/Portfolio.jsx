import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {projectinfo}   from '../helpers/porjectinfo'
import Portfoliocomp from '../components/Portfoliocomp'
import '../styles/Portfolio.css'

function Portfolio() {
  const settings={ 
  //  dots:true,
   speed:500,
   slidesToShow:2,
   slidesToScroll:1,
   infinte:true,
   autoplay:true,
   autoplaySpeed: 1000,
   responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };

  const languageColors = {
    css: 'blue',
    javascript: 'yellow',
    Python: 'green',
    mongoDB: 'orange',
    html: 'purple',
    react: 'cyan',
    nodejs:'aqua'
  };


  return (
   <section id='portfolio'>
    <div className='Portfolio' >
     <span className='Project'>Projects</span>
     <Slider {...settings} className='PSlider'>
      {projectinfo.map((info,key)=>( 
         <div className='portfolioCard' key={key} > 
            <Portfoliocomp 
             image={info.image}
             title={info.title} 
             link={info.link}
             deploy={info.deploy}
             lang={info.lang.map((lan,key)=>(
             <ul className='custom-list' key={key}>
              <li   className={`list-item ${languageColors[lan] ? languageColors[lan] : ''}`}>{lan}</li>
             </ul>
             ))} />
          </div>
        
             ))}
    </Slider>
    </div> 
    </section> 
  )
}

export default Portfolio