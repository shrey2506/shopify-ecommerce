import React from 'react';
import './singleproductlistui.css';

import { Link, Route } from 'react-router-dom'

export class SingleProductListUi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverOån: false
        }
    }

    render() {

        return (

            <div className='homepage-single-product-container'>

         
                <div className='image-container'>
                    <img className="img" src={this.props.product.imageSrc} alt="image" />
                </div>

                <div className='content-container'>

                    <div className='name'>
                        <p>{this.props.product.title}</p>
                    </div>

                 

                    <div className='price'>
                        <p>NZD{this.props.product.variants[0].price}</p>
                    </div>
                </div>



                <Link to={`/products/productsdetails/${this.props.product.id}`}><div className={this.state.hoverOn?"displaynone":"morebtn"} >
                    <a >more ></a>
                </div></Link>
               

            


                <div>

                  
                
                </div>

     



            </div>


        )
    }
}
