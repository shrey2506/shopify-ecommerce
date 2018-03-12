import React from 'react';
import './pagetwo.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const PageTwo = (props)=>{

return (
    <div className="pagetwo-container">
    <div >

            <TextField
                hintText="City"
                floatingLabelText="Please insert your city"
                onBlur={props.handleCityBlur}
                errorText={props.cityErrorText}
                id="City"
            /><br />

             <TextField
                hintText="Address"
                floatingLabelText="Please insert your address"
                onBlur={props.handleAddressBlur}
                errorText={props.addressErrorText}
                id="Address"
            /><br />

            <div className="button-container">


            <RaisedButton
            
                label="Prev"
                primary={true}
                buttonStyle={{ borderRadius: '3px' }}
                style={{ marginTop: '1rem', marginRight:'1rem' }}
                onClick={props.handlePageTwoPrevClick}
                
            />
         
            <br />

            <RaisedButton
        
                label="Next"
                primary={true}
                buttonStyle={{ borderRadius: '3px' }}
                style={{ marginTop: '1rem' }}
                onClick={props.handleNextClick}
                
            />
            </div>

       </div>
    </div>
)
}