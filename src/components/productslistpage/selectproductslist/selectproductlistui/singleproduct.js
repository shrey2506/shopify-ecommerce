import React from 'react';
import './singleproduct.css';

import { Link, Route } from 'react-router-dom'

export class SingleProductUnderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverOn: false
        }
    }

    render() {

        return (

            <div className='popular-product-container'>

         
                <div className='image-container'>
                    <a href={this.props.product.imageSrc}><img className="img" src={this.props.product.imageSrc} alt="image" /></a>
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




/*
<div className='popular-product-container'>




<div className='image-container'>
    <a href={this.props.product.url}><img className="img" src={this.props.product.imageUrl} alt="image" /></a>
</div>

<div className='content-container'>

    <div className='name'>
        <p>{this.props.product.name}</p>
    </div>

    <div className='reviews'>


        <p>{this.props.product.rating + " stars"}</p>
    </div>

    <div className='price'>
        <p>NZ$55.55</p>
    </div>
</div>



<Link to={`${this.props.product.name.split(' ').join('')}${this.props.product.id}`}><div className={this.state.hoverOn?"displaynone":"morebtn"} onClick={()=>this.setState({hoverOn:!this.state.hoverOn})}>
    <a >more ></a>
</div></Link>


<div className={this.state.hoverOn?"moreinfo displayblock":"moreinfo"}>

<a className="closebtn" onClick={()=>this.setState({hoverOn:false})}>&times;</a>
    
<ProductMoreInfo imageUrl={this.props.product.imageUrl} name={this.props.product.name}/>

</div>





</div> */