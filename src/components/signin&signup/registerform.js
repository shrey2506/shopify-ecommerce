import React from 'react';
import './registerform.css';
import { auth } from '../../firebase/index';
import { Loading } from '../../components/animation/loading';

import { RegisterFormUi } from './registerformui';

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
            error:'',
            loading:false
        }
    }

    handleEmailBlur() {
        const val = document.getElementById('Email').value;
        this.setState({error:''})
       
        if (val === "") {

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
        this.setState({error:''})

        if (val === '') {


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

        
    }

    handlePasswordConfirmBlur() {
        const val = document.getElementById('ConfirmPassword').value;
        this.setState({error:''})

        if (val === '') {
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
        if (val === this.state.password.value) {
            this.setState({
                confirmPassword: {
                    status: true,


                }
            })
        }

    }

    handlePageOneNextClick(event) {
        this.setState({error:''})

        this.handleEmailBlur();
        this.handlePasswordBlur();
        this.handlePasswordConfirmBlur()
       
        
        if (this.state.email.status && this.state.password.status && this.state.confirmPassword.status) {
 
           this.setState({loading:true})
            const email=this.state.email.value;
 const password=this.state.password.value;
            const regInfo = {
                loginStatus: true,
                loginInfo: {
                    account: this.state.email.value,
                    password:this.state.password.value
                }
            }
    
            auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {

                this.setState({loading:false})

                console.log(authUser)

                if(authUser.email){
                this.props.handleFinalRegisterSubmit(regInfo);
                if(this.props.openCheckOut){
                    window.open(this.props.checkOutWebUrl);
     
                }
                history.push('/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=')
    
            }
            })
            .catch(error=>{
                this.setState({loading:false})
                console.log(error);
                this.setState({error:error.message})

            })


        }
      
    }

    render() {

        if (this.state.loading){
            return <Loading info="Registering now!"/>
        }

        return (

            <div className="registerform-container">

                <div>

                    <div className='warning'>{this.state.error}</div>

                    <RegisterFormUi
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