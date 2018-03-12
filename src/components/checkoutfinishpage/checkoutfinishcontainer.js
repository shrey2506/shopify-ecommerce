import { connect } from 'react-redux';
import React from 'react';
import { CheckOutFinish } from './checkoutfinish';


const mapStateToProps = (state) =>{
    return {
        checkOutWebUrl:state.checkOutWebUrl,
        checkOutId:state.checkOutId
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        onCheckedOutBack:(text)=>dispatch({
            type:"CLEAR_CART",
            text
        }),

      

    }
}

export const CheckOutFinishContainer = connect (mapStateToProps,mapDispatchToProps)(CheckOutFinish)