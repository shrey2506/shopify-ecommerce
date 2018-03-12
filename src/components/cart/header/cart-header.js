import React from 'react';
import PropTypes from 'prop-types';
import './cart-header.css';
import { Route, Switch, Link } from 'react-router-dom';

export const CartHeader =(props)=>{

    const totalItems=props.checkOutProducts.length;

    return (
        <div className="cartheader-container">

            <div className="totalitems"> <h5>{ totalItems } items in your cart</h5></div>
            <div className='keepshoppingbtn'> <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='><button>Keep Shopping</button></Link></div>
            
        </div>
    )
}

CartHeader.propTypes={
    requiredFunc:PropTypes.func.isRequired,



}