import { connect } from 'react-redux';
import React from 'react';
import { EventsList } from '../../components/eventspage/eventslist/eventslist';


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