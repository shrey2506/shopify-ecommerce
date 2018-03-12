import React from 'react';
import './pageone.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const PageOne = (props)=>{

return (
    <div className="pageone-container">
    <div >

            <TextField
                hintText="Email"
                floatingLabelText="Please insert your valid email"
                onBlur={props.handleEmailBlur}
                errorText={props.emailErrorText}
                id="Email"
            /><br />


            <TextField
                className="password-container"
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                errorText={props.passwordErrorText}
                onBlur={props.handlePasswordBlur}
                id="Password"
            /><br />

            <TextField
                hintText="confirm your Password"
                floatingLabelText="Repeat Password"
                type="password"
                errorText={props.confirmPasswordErrorText}
                onBlur={props.handlePasswordConfirmBlur}
                id="ConfirmPassword"
            /><br />
            <RaisedButton
            type="submit"
                label="Next"
                primary={true}
                buttonStyle={{ borderRadius: '3px' }}
                style={{ marginTop: '1rem' }}
                onClick={props.handleNextClick}
            />

       </div>
    </div>
)
}