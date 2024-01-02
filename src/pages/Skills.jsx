import React from 'react'
import '../styles/Skills.css'
import '../components/SkillsComp'
import SkillsComp from '../components/SkillsComp'

//contact imports
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Skills() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrbp1t8', 'template_pxyknmp', form.current, 'dXDR58d3q9iPQrNS4')
      .then((result) => {
          console.log(result.text);
          console.log("Message Received")
          alert("Message Recieved")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='skills'>
    <div className='SCcontainer'>
       <div className='Contact'>
        <h1 className='ContactTitle' >Contact</h1> 
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="text"  >Name:</label>
              <input type='text' name='name'required/>   
           </div>     
           <div>
            < label htmlFor="email" >Email:</label>
              <input type='email' name='email'required/> 
            </div>
             <div className='textarea'>
             <label htmlFor="textarea">Subject:</label> 
              <textarea type='textarea' cols="10" rows="8"name='message'required/>
              </div>
            <button className='formSubmit'>Submit</button>       
          </form>
        </div>
       </div>
       <div className='Skills'>
      <h1>Skills</h1>
        <SkillsComp/>
        </div>
      
    </div>
    </section>
  )
}

export default Skills