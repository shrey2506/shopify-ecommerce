import React from 'react';
import './pagethree.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export const PageThree = (props) => {

    const handlePaymentMethodChange = (event, index, value) => {
        let finalValue;

        if (value == 1) {
            finalValue = "CreditCard"
        }
        if (value == 2) {
            finalValue = "PayPal"
        }
        if (value == 3) {
            finalValue = "DebitCard"
        }

        console.log(finalValue)
        console.log(props.paymentMethod)

        props.handlePaymentMethodChange(finalValue);
        event.preventDefault();


    }



    return (

        <div className="pagethree-container">
            <div className="pagethree-content">

            <h5>please select your paymentMethod</h5>

                <SelectField

               

                    value={props.paymentMethod}
                    onChange={handlePaymentMethodChange}
                >
                    <MenuItem value={1} primaryText="CreditCard" />
                    <MenuItem value={2} primaryText="PayPal" />
                    <MenuItem value={3} primaryText="DebitCard" />


                </SelectField>

                <br />
                <br />
                <RaisedButton

                    label="Prev"
                    primary={true}
                    buttonStyle={{ borderRadius: '3px' }}
                    style={{ marginTop: '1rem', marginRight: '1rem' }}
                    onClick={props.handlePageThreePrevClick}

                />



                <RaisedButton

                    label="Submit"
                    primary={true}
                    buttonStyle={{ borderRadius: '3px' }}
                    style={{ marginTop: '1rem' }}
                    onClick={props.handleFinalRegisterSubmit}

                />
            </div>
        </div>



    )
}