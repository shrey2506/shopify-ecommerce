import React from 'react';
import './registerform.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { PageOne } from './pageone';

import history from '../../components/productslistpage/userfilter/history'


export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                status: '',
                errorText: '',
                value: ''
            },
            password: {
                status: '',
                errorText: '',
                value: ''
            },
            confirmPassword: {
                status: '',
                errorText: '',
                value: ''
            },
            city: {
                status: '',
                errorText: '',
                value: ''
            },
            address: {
                status: '',
                errorText: '',
                value: ''
            },
            pageIndex: 1,
            paymentMethod: {
                status: true,
                value: 'CreditCard'
            }

        }
       
    }


    handleEmailBlur() {
        const val = document.getElementById('Email').value;
        let emailstatus = "";
        if (val == "") {

            this.setState({
                email: { status: false, errorText: "required" }
            })
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
            this.setState({
                email: { status: false, errorText: "please insert valid email!" }
            })
            return

        }
        this.setState({
            email: { status: true, value: val }

        })
    }

    handlePasswordBlur(event) {

        const val = document.getElementById('Password').value;

        if (val == '') {


            this.setState({
                password: { status: false, errorText: "required" }
            })
            return

        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(val)) {
            this.setState({
                password: { status: false, errorText: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" }
            })
            return
        }
        this.setState({
            password: { status: true, value: val }
        })
        console.log(val)
    }






    handlePasswordConfirmBlur() {
        const val = document.getElementById('ConfirmPassword').value

        if (val == '') {
            this.setState({
                confirmPassword: {
                    status: false,
                    errorText: 'required',
                }
            })
            return

        }
        if (val !== '' && val !== this.state.password.value) {
            this.setState({
                confirmPassword: {
                    status: false,
                    errorText: 'does not match',
                }
            })
            return
        }
        if (val == this.state.password.value) {
            this.setState({
                confirmPassword: {
                    status: true,


                }
            })
        }

    }

    handlePageOneNextClick(event) {

        this.handleEmailBlur();
        this.handlePasswordBlur();
        this.handlePasswordConfirmBlur()
       
        
        if (this.state.email.status && this.state.password.status && this.state.password.status) {

            const regInfo = {
                loginStatus: true,
                loginInfo: {
                    account: this.state.email.value,
                    address: this.state.address.value,
                    password:this.state.password.value
                }
            }
    
            this.props.handleFinalRegisterSubmit(regInfo);
            event.preventDefault();
            console.log(this.props.login);
            if(this.props.openCheckOut){
                window.open(this.props.checkOutWebUrl);
                return;
            }
            history.push('/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=')


        }
      
    }

    render() {


        let paymentMethodNumber;

        if (this.state.paymentMethod.value == "CreditCard") {
            paymentMethodNumber = 1;
        }

        if (this.state.paymentMethod.value == "PayPal") {
            paymentMethodNumber = 2;
        }

        if (this.state.paymentMethod.value == "DebitCard") {
            paymentMethodNumber = 3;
        }



        return (

            <div className="registerform-container">

                <div className={this.state.pageIndex == 1 ? 'active' : 'inactive'}>

                    <PageOne
                        handleEmailBlur={this.handleEmailBlur.bind(this)}
                        emailErrorText={this.state.email.errorText}

                        passwordErrorText={this.state.password.errorText}
                        handlePasswordBlur={this.handlePasswordBlur.bind(this)}

                        confirmPasswordErrorText={this.state.confirmPassword.errorText}
                        handlePasswordConfirmBlur={this.handlePasswordConfirmBlur.bind(this)}

                        handleNextClick={this.handlePageOneNextClick.bind(this)}

                    />

                </div>

            </div>
        )
    }
}