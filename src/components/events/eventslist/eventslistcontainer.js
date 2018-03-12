import { connect } from 'react-redux';
import React from 'react';
import { EventsList } from './eventslist';


const mapStateToProps = (state) =>{
    return {
        events:state.events,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        }
}

export const EventsListContainer = connect (mapStateToProps,mapDispatchToProps)(EventsList)