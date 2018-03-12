import React from 'react';
import { Link } from 'react-router-dom';
import './singleeventui.css'

export const SingleEventUi=(props)=>{

    const event=props.event;
    const link=event.title.split(' ').join('-');

    return (
        <Link  to={`/events/details/${link}`}><div className="singleeventui-container">

  

            <div className="image">
            <img className="img" src={event.imageSrc} />
            </div>
            <br />

            <div className="title">
            <p>{event.title}</p>
            </div>
            <br />

            <div className="brief">
            <p>{event.brief}</p>
            </div>
            <br />

        </div></Link>
    )


}