import React from 'react';
import './shopbycategory.css';
import { Link } from 'react-router-dom';

export const ShopByCategory = (props) => {

    const linkTo=`/products/list/category=${props.product.title}&price=All&shipping=All&sortValue=1&searchTerm=`
         
    return (
        <div className='shopbycategory-container'>

            <Link to={linkTo}> <div className='image-container'>
            <img src={props.product.imageSrc} alt="image"/>
            </div></Link>

           

            <Link to={linkTo}><div className='content'>
                {props.product.title}
            </div></Link>

        </div>
    )
}