import React from 'react';
import { CurrentCategoryContainer } from '../../../containers/pageproducts/currentcategorycontainer';
import { UserFilterContainer } from '../../../containers/pageproducts/userfiltercontainer';
import { UserSortContainer } from '../../../containers/pageproducts/usersortcontainer';
import { SelectProductsListContainer } from '../../../containers/pageproducts/selectproductslistcontainer';
import './pageproducts.css';
import { ProductFinalInfoContainer } from '../../../containers/pageproducts/product--final--info--container';

import { Switch, Route, Router, Link } from 'react-router-dom';
import history from '../userfilter/history';


export const PageProducts = (props)=>{

 
    return (

        

        <div className="page-products-container">

        <div className="currentposition">
        <Link to="/">home</Link>
        >
        <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='>products</Link>
        >
        <Link to={`/products/list/category=${props.currentCategory}&price=All&shipping=All&sortValue=1&searchTerm=`}>{`${props.currentCategory}`}</Link>
        </div>

        <div className="headline">
            <div>
            <CurrentCategoryContainer />
            </div>
            <div>
            <UserSortContainer />
            </div>
        </div>
            

        <div className="maincontent">
            <div className="sidebar">
            <UserFilterContainer />
            </div>

            <div className="productlist">



            <Switch>
            


      
            <Route path="/products/list/:id" component = {SelectProductsListContainer} />

            </Switch >




            </div>
        </div>
         
        
                  
        </div>

    )
}
