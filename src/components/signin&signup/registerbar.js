import React from 'react';
import './registerbar.css';
import { Link } from 'react-router-dom';


export const RegisterBar = (props) => {

    return (

        <div className="registerbar-container">

            <div className={!props.loginStatus ? "beforelogin" : "inactive"}>

                <div>

                    <Link to='/register' className="login-register">Register</Link>
                    <Link to='/signin' className="login-signin">Sign In</Link>

                </div>

            </div>

            <div className={props.loginStatus ? "afterlogin" : "inactive"}>

                <Link to='/personalcenter'><i class="material-icons">account_circle</i></Link>

            </div>

        </div>
    )



}