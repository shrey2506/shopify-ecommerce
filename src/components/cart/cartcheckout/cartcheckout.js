import React from 'react';
import { Loading } from '../../animation/loading';
import { PrimaryButton } from '../.././global components/primarybutton'
import Client, { Config } from 'shopify-buy';
import './cartcheckout.css';
import history from '../../productslistpage/userfilter/history'



const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
});


export const CartCheckOutUi = (props) => {


   let totalPrice = props.checkOutProducts.map((element) => element.price * element.quantity).reduce((a, b) => a + b).toFixed(2)
    

    
    let totalItems = props.checkOutProducts.map((element) => element.quantity).reduce((a, b) => a + b)


  

    const onCheckOutClick = () => {

        props.openCheckOut()

        if(!props.login.loginStatus){
            history.push('/register')
            return;
        }

        const lineItemsToAdd = props.checkOutProducts
            .map((element) => ({
                variantId: element.id,
                quantity: element.quantity
            }));

        client.checkout.create().then((checkout) => {

            const checkOutId = checkout.id;
            const checkOutWebUrl = checkout.webUrl
            window.open(props.checkOutWebUrl)

        })
    }


    return (

        <div className="checkoutui-container">

            <div className='price'>
                <div><strong>Total Price:</strong> {!isNaN(totalPrice)? "NZ$"+totalPrice:'Please select quantity.'}</div>
            </div>

            <div className='totalitems'>
                <div><strong>Total Items:</strong> {!isNaN(totalPrice)?totalItems:'Please select quantity.'}</div>
            </div>

            <div className="checkoutbtn" onClick={onCheckOutClick} >
                <PrimaryButton>Proceed to checkout</PrimaryButton>
            </div>

        </div>
    )
}
