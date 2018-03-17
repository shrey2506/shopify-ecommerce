import React, { Component } from 'react';

import './App.css';
import { ErrorBoundary } from './errorcatch/errorboundary';
import { Loading } from './components/animation/loading';
import { HeaderContainer } from './containers/headercontainer/headercontainer'
import { CategoryBarContainer } from './containers/categorybarcontainer/categorybarcontainer'

import { ProductsListPage } from './components/productslistpage/finalui/productslistpage';

import { RegisterFormContainer } from './containers/signup&signincontainer/registerformcontainer';

import { RegisterBarContainer } from './containers/signup&signincontainer/registerformcontainer';
import { PersonalCenterContainer } from './containers/signup&signincontainer/personalcentercontainer';

import { LoginPageContainer } from './containers/signup&signincontainer/loginpagecontainer';
import { Route, Switch, Link } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { HomePageContainer } from './containers/homepagecontainer/homepagecontainer';
import Client, {Config} from 'shopify-buy';
import { ProductDetails } from './components/productdetailspage/final/final-ui';
import { CartFinalUiContainer } from './containers/cartcontainer/cartfinaluicontainer';

import { CheckOutFinishContainer } from './containers/checkoutfinishipagecontainer/checkoutfinishcontainer';
import { EventsListContainer } from './containers/eventspagecontainer/eventslistcontainer';
import {  EventsDetailsUi } from './components/eventspage/eventsdetails/eventsdetailsui';
import { TermOfUse } from './components/footer/termofuse/termofuse';
import { Privacy } from './components/footer/privacy/privacy';
import { UserFilterMobileContainer } from './containers/productslistpagecontainer/userfiltermobilecontainer'



class App extends Component {

  constructor(){
    super()
    this.state={
      shopifyproducts:''
    }
  }



componentWillMount() {

  this.props.fetchProducts();

  const restoredData=JSON.parse(window.localStorage.getItem ("id"));
  console.log(restoredData)
  

  if (restoredData==null){
    return;
  }


  console.log(restoredData);
  this.props.fetchCheckOutProducts(restoredData);
  
}




  render() {
    return (

      

      
      <div className="App">


        <HeaderContainer />
       
        <CategoryBarContainer />
        <Switch>

           
          <Route
            path='/'
            exact
            component={HomePageContainer} />

            <Route path="/events/list" component={EventsListContainer}/>
            <Route path='/events/details/:id' render={(props)=><EventsDetailsUi {...props} events={this.props.events} />}/>

 <Route path='/products/productsdetails/:id' render={(props)=><ProductDetails {...props} productsList={this.props.productsList}   />} />
          <Route path='/products/userfiltermobile' component={ UserFilterMobileContainer } />
          <Route path='/products' render={(props)=><ProductsListPage {...props} currentCategory={this.props.currentCategory}/>} />
          <Route path='/personalcenter' component={PersonalCenterContainer} />
          <Route path='/signin' component={LoginPageContainer} />
          <Route path='/register' component={RegisterFormContainer} />
          <Route path='/cart' component={CartFinalUiContainer}/>
          <Route path='/cartcheckoutfinished' component={CheckOutFinishContainer} /> 
          <Route path='/term-of-use' component={TermOfUse} />
          <Route path='/privacy' component={Privacy} />
         <Route render={() => <div>We dont have such page, maybe you are interested in checking our 
          <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='> products</Link></div>} />
       
        
        
           
        </Switch>

        <Footer />
      

      </div>


    )
  }
}

export default App;
