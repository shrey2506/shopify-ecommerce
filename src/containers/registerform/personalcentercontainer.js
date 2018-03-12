import { connect } from 'react-redux';
import React from 'react';
import { PersonalCenter } from '../../components/signin&signup/personalcenter';


const mapStateToProps = (state) =>{
    return {
        accountName:state.login.loginInfo.account,
        city:state.login.loginInfo.city,
        address:state.login.loginInfo.address,
        password:state.login.loginInfo.password,
        loginStatus:state.login.loginStatus
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

handleLogoutClick:()=>dispatch({
    type:"LOG_OUT",    
})
    }

}

export const PersonalCenterContainer = connect (mapStateToProps,mapDispatchToProps)(PersonalCenter)