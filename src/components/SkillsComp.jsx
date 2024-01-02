import React from 'react'

import { render } from "react-dom";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
//animations
import { easeQuadInOut } from "d3-ease";
import ChangingProgressProvider from "../animations/ChangingProgressProvider";
import RadialSeparators from '../animations/RadialSeparators';



function SkillsComp() {
  const skills =[{
   skillName:"React",
   Percentage:80
  },
  {
    skillName:"HTML",
    Percentage:90
   },
   {
    skillName:"JavaScript",
    Percentage:70
   },
   {
    skillName:"Python",
    Percentage:70
   },
   {
    skillName:"CSS",
    Percentage:95
   },
   {
    skillName:"NodeJs",
    Percentage:60
   },
  
]
// const percentage = 50;
  return (
    <div className='CircularDiv'>
    {skills.map((skill,key)=>(
      <div className="circularInner"key={key}>
          <CircularProgressbar 
              className='CircularBar' 
              value={skill.Percentage} 
              text={`${skill.Percentage}%`}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                backgroundColor: "white",
                textColor: "gray",
                pathColor: "yellow",
                trailColor: "gray"

              })}
              />
              <span className='Sheading'>{skill.skillName}</span>
        </div> 
      ))} 

    </div>
  )
}

export default SkillsComp