import React from 'react';
import { CartSingleItemUi } from './singleitemui';
import Client, {Config} from 'shopify-buy';

const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
  });





export class CartItemsList extends React.Component{
    constructor(props){
        super(props)
    }




    render(){

       
        const handleSelectQuantityClick=(text)=>{

        
            this.props.handleSelectQuantityClick(text)
        }


    const handleRemoveClick=(text)=>{



        this.props.handleRemoveClick(text)

    }



    return (

        <div > 
            {this.props.checkOutProducts.map((product)=>{

            return <CartSingleItemUi 
            
            product={product} 
            handleRemoveClick={handleRemoveClick} 
            handleSelectQuantityClick={handleSelectQuantityClick}/>})}
            </div>
    )
    }


} 



   
