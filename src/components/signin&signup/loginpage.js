import React from 'react';
import './loginpage.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import history from '../../components/productslistpage/userfilter/history';
import { auth } from '../../firebase/index';
import { Link } from 'react-router-dom';
import { Loading } from '../animation/loading'

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                loginEmail: {
                    status: '',
                    errorText: '',
                    value: ''
                },
                loginPassword: {
                    status: '',
                    errorText: '',
                    value: ''

                },
                loginResult: 'unchecked',
                loading: false,

            }
    }


    handleEmailBlur() {
        const val = document.getElementById("loginEmail").value;
        console.log(val);

        if (val == "") {

            this.setState({
                loginEmail: { status: false, errorText: "required" }
            })
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
            this.setState({
                loginEmail: { status: false, errorText: "please insert valid email!" }
            })
            return

        }
        this.setState({
            loginEmail: { status: true, value: val }

        })
        console.log(this.state.loginEmail)
    }


    handlePasswordBlur() {

        const val = document.getElementById("loginPassword").value;
        console.log(val);

        if (val == "") {

            this.setState({
                loginPassword: { status: false, errorText: "required" }
            })
            return
        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(val)) {
            this.setState({
                loginPassword: { status: false, errorText: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" }
            })
            return
        }
        this.setState({
            loginPassword: { status: true, value: val }
        })
        console.log(val)
    }


    handleLoginSubmit() {

        const email = this.state.loginEmail.value;
        const password = this.state.loginPassword.value;

        this.handleEmailBlur();
        this.handlePasswordBlur();

        if (this.state.loginEmail.status == false || this.state.loginPassword.status == false) {

            return
        }

        this.setState({
            loading:true,
        })


        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {


                const regInfo = {
                    loginStatus: true,
                    loginInfo: {
                        account: email,
                        password: password
                    }
                }


                console.log('hi');
                this.props.handleLoginSubmit(regInfo);
                if (this.props.openCheckOut) {
                    window.open(this.props.checkOutWebUrl);
                    return;
                }
                history.push('/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=');
                this.setState({
                    loading:false,
                })
            })
            .catch(error => {
                console.log(error)

                this.setState({

                    loginEmail: {
                        status: '',
                        errorText: '',
                        value: ''
                    },
                    loginPassword: {
                        status: '',
                        errorText: '',
                        value: ''

                    },
                    loading:false,
                   
                    errormessage: 'Your account or password is not right, please try again!',

                })
                return
            });

    }

    render() {

        if (this.state.loading){
            return <Loading info='just one more moment...'/>
        }



        return (

            <div className="loginpage-container">

            <div>
                

                    <div className='title'>
                        <div>{this.state.errormessage} </div>
                    </div>
                    
                    
                    <div className='input-container'>
                 

                    <div>

                    <TextField
                        hintText="Email"
                        floatingLabelText="Please insert your valid email"
                        onBlur={this.handleEmailBlur.bind(this)}
                        errorText={this.state.loginEmail.errorText}

                        id="loginEmail"



                    /><br />


                    <TextField
                        className="password-container"
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.loginPassword.errorText}
                        onBlur={this.handlePasswordBlur.bind(this)}
                        id="loginPassword"


                    /><br />

                    <RaisedButton
                        type="submit"
                        label="Submit"
                        primary={true}
                        buttonStyle={{ borderRadius: '3px' }}
                        style={{ marginTop: '1rem' }}
                        onClick={this.handleLoginSubmit.bind(this)}
                    />
                    <div className='forgotPassword'>Forget password? click <Link to='/resetpassword'>here</Link>.</div>

                    </div>
                 

                    </div>
                    </div>

                    
             
            </div>


        )
    }


} 
