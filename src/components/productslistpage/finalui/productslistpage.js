import React from 'react';
import { CurrentCategoryContainer } from '../../../containers/productslistpagecontainer/currentcategorycontainer';
import { UserFilterContainer } from '../../../containers/productslistpagecontainer/userfiltercontainer';
import { UserSortContainer } from '../../../containers/productslistpagecontainer/usersortcontainer';
import { SelectProductsListContainer } from '../../../containers/productslistpagecontainer/selectproductslistcontainer';
import './productslistpage.css';

import { Switch, Route, Router, Link } from 'react-router-dom';
import history from '../userfilter/history';


export const ProductsListPage = (props)=>{

 
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
