import React from 'react';
import './final-ui.css';
import { Loading } from '../../animation/loading';
import { ProductDetailsLeftUi } from '../left/left-final-ui/left-final-ui';
import {  ProductDetailsRightUiContainer } from '../right/right-final-ui/right-final-ui-cntainer'

export const ProductDetails = (props) =>{

    if (props.productsList[0]==undefined){
        return <Loading />
    }
    const selectedProduct=props.productsList.find((element)=>element.id==props.match.params.id);

    if (!selectedProduct){
        return (<div>there is no such product, please check it again!</div>)
    }
    
    return (
        <div className="productdetailspage-container">
            <div className="left"><ProductDetailsLeftUi selectedProduct={selectedProduct}/></div>
            <div className="right"><ProductDetailsRightUiContainer selectedProduct={selectedProduct}/></div>
        </div>
    )


}