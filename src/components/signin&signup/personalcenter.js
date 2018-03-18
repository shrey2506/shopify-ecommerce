import React from 'react';
import './personalcenter.css';
import { Link } from 'react-router-dom';

export const PersonalCenter =(props)=>{

    const handleLogoutClick=()=>{
        props.handleLogoutClick();
    }

    const itemsInCart = props.checkOutProducts.length

    return (

        <div className="personalcenter-container">

        <div>

            <h5>your account Name: </h5>
            <p>{props.accountName}</p>

             <h5>You have {itemsInCart} items in your cart. </h5>

            <div className="logoutbtn"><Link to="./" onClick={handleLogoutClick}>LogOut</Link></div>
            

        </div>

        </div>
    )

}