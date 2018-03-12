import React from 'react';
import './header.css';
import { Link, Route, Switch } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { RegisterBar } from '../signin&signup/registerbar';
import { RegisterBarContainer } from '../../containers/registerform/registerbarcontainer';
import history from '../../components/productslistpage/userfilter/history';


export class HeaderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }


    handleInputChange(event) {

        event.preventDefault();
        const val = event.target.querySelector("input[type=text]").value;

        this.props.onSearchTermChange(val)


        history.push(`/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=${val}`)


    }




    handleRegisterClick(event) {

        this.props.handleRegisterClick();
        event.preventDefault();
        console.log(this.props.registerForm)
    }

    onLogoClick() {
        this.props.onLogoClick('')
    }

    render() {

        return (
            <div className="header-container">

                <div className="header-left">


                    <Link to='/'><h2 className="header-h2" onClick={this.onLogoClick.bind(this)}>FamilyFun</h2></Link>


                    <form className="header-search" onSubmit={this.handleInputChange.bind(this)}>

                        <input type="text" id="clearaftercategoryclick" className="header-input" placeHolder="search..." />
                        <input type="submit" value="Search" className="header-button" />

                    </form>


                </div>
                <div className="header-right">



                    <div><Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm=' className="productsbtn">
                    Products
                    </Link>
                    <Link to='/events/list' className="eventsbtn">
                    Events

                    </Link>
                    </div>
                    <div className="registerbar">
                        <RegisterBarContainer />
                    </div>

                    <Link to='/cart' className="cart"><i class="fa fa-cart-arrow-down"></i></Link>

                </div>



            </div>

        )
    }
}