import React from 'react';
import { SingleEventUi } from './singleeventui';
import './eventslist.css';
import { Link } from 'react-router-dom'

export const EventsList =(props)=>{
    

    return (
        <div className='eventslist-container'>
        <div className="currentposition">
       
        <Link to="/">home</Link>
        >
        <Link to='/events/list'>events</Link>
        
        
    
        </div>
            <div className='intro'>
                <p>Fantastic Family Events Every Week, Join Us Now!</p>
            </div>
        <div className='list'>

            

            {props.events.map((event)=><SingleEventUi event={event} key={event.imageSrc}/>)}
        
        </div>
        </div>


    )
}