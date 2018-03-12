import React from 'react';
import './eventsdetailsui.css';

export const EventsDetailsUi=(props)=>{

    const selectedTitle=props.match.params.id.split('-').join(' ');
    const selectedEvent=props.events.find((event)=>event.title==selectedTitle);
    const html=selectedEvent.content
    
    
    return (

        <div className="eventdetailsui-container">
            <div className="title">
        
          <h5>{selectedEvent.title}</h5>
          </div>

          <div className="image">
          <img src={selectedEvent.imageSrc} alt="family events image" />
            </div>

            <div className="content" dangerouslySetInnerHTML={{ __html:html }}>

</div>
           
           
        </div>



    )
}