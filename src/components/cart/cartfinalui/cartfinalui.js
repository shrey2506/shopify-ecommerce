import React from 'react';
import { Loading } from '../../animation/loading';
import { CartHeader } from '../cartheader/cart-header';
import './cartfinalui.css';
import { CartItemsListContainer } from '../../../containers/cartcontainer/cartitemslistcontainer';
import { CartCheckOutUiContainer } from '../../../containers/cartcontainer/carcheckoutcontainer';
import { CartCheckOutUi } from '../cartcheckout/cartcheckout';
import Client, { Config } from 'shopify-buy';
import './cartfinalui.css';



const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
});

export class CartFinalUi extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

        if (!this.props.checkOutProducts) {
            return;
        }

        console.log(this.props.checkOutProducts)

        window.localStorage.setItem("id", JSON.stringify(this.props.checkOutProducts));

        const lineItemsToAdd = this.props.checkOutProducts
            .map((element) => ({
                variantId: element.id,
                quantity: element.quantity
            }));

        console.log(lineItemsToAdd)


        client.checkout.create().then((checkout) => {


            const checkOutId = checkout.id;
            const checkOutWebUrl = checkout.webUrl
            console.log(checkOutId)
            console.log(checkOutWebUrl)

            this.props.createCheckOutId(checkOutId);
            this.props.createCheckOutWebUrl(checkOutWebUrl);
            client.checkout.addLineItems(checkOutId, lineItemsToAdd);

        })

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checkOutProducts !== this.props.checkOutProducts) {

            window.localStorage.setItem("id", JSON.stringify(nextProps.checkOutProducts));

            const lineItemsToAdd = nextProps.checkOutProducts
                .map((element) => ({
                    variantId: element.id,
                    quantity: element.quantity
                }));

            client.checkout.create().then((checkout) => {


                const checkOutId = checkout.id;
                const checkOutWebUrl = checkout.webUrl
                console.log(checkOutId)
                console.log(checkOutWebUrl)

                this.props.createCheckOutId(checkOutId);
                this.props.createCheckOutWebUrl(checkOutWebUrl);
                client.checkout.addLineItems(checkOutId, lineItemsToAdd);

            })


        }
    }


    render() {

        if (!this.props.checkOutProducts || this.props.checkOutProducts == '') {
            return <div style={{ margin: '8rem' }}>There is no product under your selection. Please try again.</div>
        }

        return (
            <div className="cartfinalui-container">
                <div className='cartheader'>
                    <CartHeader checkOutProducts={this.props.checkOutProducts} />
                </div>

                <div className="main">

                    <div className="itemslist">
                        <CartItemsListContainer />
                    </div>

                    <div className="checkout">
                        <CartCheckOutUiContainer />
                    </div>
                </div>



            </div>

        )
    }
}



