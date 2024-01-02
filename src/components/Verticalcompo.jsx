
import React from 'react'
import {educationtimeline} from '../helpers/educationtimeline'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import '../styles/Verticalcompo.css'




function Verticalcompo() {
    return (
        <VerticalTimeline className='verticalContainer'
        lineColor='black' >
          {educationtimeline.map((element,key) => (
            <VerticalTimelineElement
            key={key}
              className="vertical-timeline-element--work"
            date={element.date}
              icon={<SchoolIcon/>}
              
            >
              <div className='verticaltimelinediv'  >
                <span className='course'>{element.course}</span>
                <h4 className='collegeName'>{element.collegeName}</h4>
                <h5 className='place'>{element.place}</h5>
                {/* <h6 className='date'>{element.date}</h6> */}
                <span className='percentage'>{element.percentage}</span>
                 
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      );
}

export default Verticalcompo