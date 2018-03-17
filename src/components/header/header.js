import React from 'react';
import './header.css';
import { Link, Route, Switch } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { RegisterBar } from '../signin&signup/registerbar';
import { RegisterBarContainer } from '../../containers/signup&signincontainer/registerbarcontainer';
import history from '../../components/productslistpage/userfilter/history';


export class HeaderSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            clickedBtn: '',
            currentUrl: window.location.pathname
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onRegisterBarClick = this.onRegisterBarClick.bind(this);
    }

    componentDidMount() {
        history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state)
            this.setState({

                currentUrl: location.pathname

            })
        })

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

    onMenuClick(event) {
        this.setState({
            clickedBtn: event.target.title,

        })
        console.log(this.state.currentUrl)
        console.log(window.location.pathname)

    }

    onRegisterBarClick(value) {
        this.setState({
            clickedBtn: value,
        })

    }

    render() {

        return (
            <div className="header-final-container">
            
                <div className="header-ipadpro">

                    <div className="header-left">
                        <Link to='/'><h2 className="header-h2" onClick={this.onLogoClick.bind(this)}>FamilyFun</h2></Link>

                        <form className="header-search-ipadpro" onSubmit={this.handleInputChange.bind(this)}>

                            <input type="text" id="clearaftercategoryclick" className="header-input" placeholder="Search Our Products..." />
                            <input type="submit" value="Search" className="header-button" />

                        </form>
                    </div>
                    <div className="header-right">

                        <div><Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='
                            className={this.state.currentUrl.includes('products') ? "productsbtn activebtn" : 'productsbtn'}>
                            Products
                    </Link>
                            <Link to='/events/list' className={this.state.currentUrl.includes('events') ? 'eventsbtn activebtn' : "eventsbtn"}>
                                Events

                    </Link>
                        </div>
                        <div className="registerbar">
                            <RegisterBarContainer currentUrl={this.state.currentUrl} />
                        </div>

                        <Link to='/cart' className="cart"><i class="fa fa-cart-arrow-down"></i></Link>

                    </div>

                </div>

            



                <div className="header-search-ipad">
                    <form className="header-search" onSubmit={this.handleInputChange.bind(this)}>

                        <input type="text" id="clearaftercategoryclick" className="header-input" placeholder="Search Our Products..." />
                        <input type="submit" value="Search" className="header-button" />

                    </form>
                </div>

                <div className='header-mobile'>

                <div className="logo-cart">

                    <div className="header-left">
                        <Link to='/'><h2 className="header-h2" onClick={this.onLogoClick.bind(this)}>FamilyFun</h2></Link>

                    </div>
                    <div className="header-right">
                        <Link to='/cart' className="cart"><i class="fa fa-cart-arrow-down"></i></Link>
                    </div>
                </div>

                <div className="header-btns-mobile">

                    <div>

                        <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='
                            onClick={this.onMenuClick}
                            title="Products"
                            className={this.state.currentUrl.includes('products') ? "productsbtn activebtn" : 'productsbtn'}>
                            Products
</Link>
                        <Link to='/events/list'
                            onClick={this.onMenuClick}
                            title="Events"
                            className={this.state.currentUrl.includes('events') ? 'eventsbtn activebtn' : "eventsbtn"}>Events</Link>
                    </div>
                    <div className="registerbar"><RegisterBarContainer currentUrl={this.state.currentUrl} /></div>
                </div>



                <div className="header-search-mobile">
                    <form className="header-search" onSubmit={this.handleInputChange.bind(this)}>

                        <input type="text" id="clearaftercategoryclick" className="header-input" placeHolder="search..." />
                        <input type="submit" value="Search" className="header-button" />

                    </form>
                </div>

                </div>




            </div>

        )
    }
}