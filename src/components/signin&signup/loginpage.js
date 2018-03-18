import React from 'react';
import './loginpage.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import history from '../../components/productslistpage/userfilter/history'

export class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state=
        { 
            loginEmail:{
                status:'',
                errorText:'',
                value:''
            },
            loginPassword:{
                status:'',
                errorText:'',
                value:''

            },
            loginResult:'unchecked',
       
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


    handleLoginSubmit(){

        this.handleEmailBlur();
        this.handlePasswordBlur();
      
        if (this.state.loginEmail.status==false||this.state.loginPassword.status==false){
           
            return
        }

        const usersPool=this.props.usersPool;
        const check=usersPool.find((element)=>
        element.account==this.state.loginEmail.value
        &&element.password==this.state.loginPassword.value);
        if (!check){
            this.setState({

                loginEmail:{
                    status:'',
                    errorText:'',
                    value:''
                },
                loginPassword:{
                    status:'',
                    errorText:'',
                    value:''
    
                },
                loginResult:false,

            })
            return
        }

        const login={
            loginStatus:true,
            loginInfo:check
        }
        history.push('/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=')
        this.props.handleLoginSubmit(login)
       

    }

    render(){
        return (

            <div className="loginpage-container">
    <div >

        <div>
            <h5>{this.state.loginResult?<div>Please insert your email and password</div>:<div style={{color:'red', fontWeight:100}}>Your account or password is not right, please try again!</div>}</h5>
            </div>

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

       </div>
    </div>


        )
    }


} 
