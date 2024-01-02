import React from 'react'
import '../styles/Education.css'
import Certifications from'../components/Certificatescomp'
import Verticalcompo from '../components/Verticalcompo';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {certificates} from '../helpers/certificates'

function Education() {

 
    const settings={ 
      //  dots:true,
       speed:500,
       slidesToShow:1,
       slidesToScroll:1,
       infinte:true,
       autoplay:true,
       autoplaySpeed: 2000,
       responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      
  };

  return (
<section className='AboutMe' id='about'>
    <div className='leftblock'>
      <div className="eduHeading">
           <span className='eduTitle'>Education</span>     
      </div>  
       <Verticalcompo/>   
    </div>
   <div className="rightblock"> 
     <div className="Certifications">
      <h1 className='cheading'>Certifications</h1>
        <Slider className='CSlider'{...settings}>
          {certificates.map((ele,key)=>(
            <div className="divcert" key={key}>
              <Certifications image={ele.image} 
               title={ele.title}
               sour={ele.link}
               desc={ele.desc}
               /> 
            </div>      
             ))}
        </Slider>
      </div>
    </div> 
     
 </section>
  )
}

export default Education