import React from 'react';
import Client, {Config} from 'shopify-buy';

const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
  });

export class Trial extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

        window.localStorage.removeItem('id');
        console.log(window.localStorage.getItem('id'))

        this.props.onCheckedOutBack();



    }

        

    render(){

    return (<div>thanks {this.props.checkOutId}for your shopping!</div>)
}

}