import React from 'react';
import './personalcenter.css';
import { Link } from 'react-router-dom';

export const PersonalCenter =(props)=>{

    const handleLogoutClick=()=>{
        props.handleLogoutClick();
        console.log(props.loginStatus)
    }

    return (

        <div className="personalcenter-container">

        <div>

            <h5>your account Name: </h5>
            <p>{props.accountName}</p>

             <h5>your city: </h5>
            <p>{props.city}</p>

              <h5>your address: </h5>
            <p>{props.address}</p>

            <div className="logoutbtn"><Link to="./" onClick={handleLogoutClick}>LogOut</Link></div>
            

        </div>

        </div>
    )

}