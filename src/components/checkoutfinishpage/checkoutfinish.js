import React from 'react';




export class CheckOutFinish extends React.Component {
 

    componentDidMount(){

        window.localStorage.removeItem('id');
        console.log(window.localStorage.getItem('id'))

        this.props.onCheckedOutBack();
    }

        

    render(){

    return (<div>thanks {this.props.checkOutId}for your shopping!</div>)
}

}