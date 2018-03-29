import React from 'react';
import './personalcenter.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/index';

export const PersonalCenter =(props)=>{

    const handleLogoutClick=()=>{


        auth.doSignOut()
        props.handleLogoutClick();
        
    }

    const itemsInCart = props.checkOutProducts.length

    return (

        <div className="personalcenter-container">

        <div className='inner-container'>

            <h5>Your account name: </h5>

            <p>{props.accountName}</p>

             <h5>You have {itemsInCart} items in your cart. </h5>

             <div className='btn'>

             

            <div className="logoutbtn"><Link to="./" onClick={handleLogoutClick}>Log Out</Link></div>
            
            <div className="changepasswordbtn"><Link to="./changepassword">Change Password</Link></div>
            </div>

        </div>

        </div>
    )

}