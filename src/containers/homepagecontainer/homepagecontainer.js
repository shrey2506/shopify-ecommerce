import { connect } from 'react-redux';
import React from 'react';
import { HomePage } from '../../components/homepage/homepage';



const mapStateToProps = (state) =>{
    return {
        businesses:state.businesses,
        productsList:state.productsList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        }
}

export const HomePageContainer = connect (mapStateToProps,null)(HomePage)