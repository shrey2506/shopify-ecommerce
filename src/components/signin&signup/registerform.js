import React from 'react';
import './registerform.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { PageOne } from './pageone';
import { PageTwo } from './pagetwo';
import { PageThree } from './pagethree';
import history from '../../components/global components/history'


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
        this.handlePaymentMethodChange = this.handlePaymentMethodChange.bind(this)
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


    handleFinalRegisterSubmit(event) {

        const regInfo = {
            loginStatus: true,
            loginInfo: {
                account: this.state.email.value,
                city: this.state.city.value,
                address: this.state.address.value,
                password:this.state.password.value
            }
        }

        this.props.handleFinalRegisterSubmit(regInfo);
        event.preventDefault()
        console.log(this.props.login)

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

    handleCityBlur() {
        const val = document.getElementById('City').value;
        if (val == '') {
            this.setState({
                city: {
                    status: false,
                    errorText: 'required'
                }
            })
            return
        }
        this.setState({
            city: {
                status: true,
                value: val
            }
        })

    }

    handleAddressBlur() {
        const val = document.getElementById('Address').value;
        if (val == '') {
            this.setState({
                address: {
                    status: false,
                    errorText: 'required'
                }
            })
            return
        }
        this.setState({
            address: {
                status: true,
                value: val
            }
        })

    }




    handlePageTwoNextClick() {
        
       
        this.handleCityBlur();
        this.handleAddressBlur();
        if (this.state.city.status && this.state.address.status) {
            this.setState({
                pageIndex: 3,
            })
            console.log(this.state.pageIndex)
            return
        }
       

        

    }

    handlePaymentMethodChange(event, index, value) {
        this.setState({
            paymentMethod: {
                status: true,
                value: value
            }
        })

        console.log(this.state.paymentMethod.value)

    }

    handleFinalRegisterSubmit(event) {

        const regInfo = {
            loginStatus: true,
            loginInfo: {
                account: this.state.email.value,
                city: this.state.city.value,
                address: this.state.address.value,
                password:this.state.password.value
            }
        }

        this.props.handleFinalRegisterSubmit(regInfo);
        event.preventDefault()
        console.log(this.props.login)

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

                <div className={this.state.pageIndex == 2 ? 'active' : 'inactive'}>

                    <PageTwo
                        handleCityBlur={this.handleCityBlur.bind(this)}
                        cityErrorText={this.state.city.errorText}
                        handleAddressBlur={this.handleAddressBlur.bind(this)}
                        addressErrorText={this.state.address.errorText}
                        handlePageTwoPrevClick={() => this.setState({
                            pageIndex: 1,
                        })}
                        handleNextClick={this.handlePageTwoNextClick.bind(this)}
                    />
                </div>

                <div className={this.state.pageIndex == 3 ? 'active' : 'inactive'}>

                    <PageThree
                        paymentMethod={paymentMethodNumber}
                        handlePaymentMethodChange={(value) => this.setState({
                            paymentMethod: {
                                status: true,
                                value: value
                            }
                        })}
                        handlePageThreePrevClick={() => this.setState({
                            pageIndex: 2,
                        })}
                        handleFinalRegisterSubmit={this.handleFinalRegisterSubmit.bind(this)}

                    />


                </div>




            </div>
        )
    }
}