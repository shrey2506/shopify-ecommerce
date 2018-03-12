import React from 'react';

import './selectproductslist.css';
import { Loading } from '../../../animation/loading';
import { Switch, Route } from 'react-router-dom';

import { SingleProductUnderList } from './singleproduct'



export class SelectProductsList extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }

    }

    componentDidMount() {
     

        this.props.changeCurrentCategory(this.props.currentCategory);
        this.props.changeFilterPrice(this.props.filterPrice);
        this.props.changeFilterShipping(this.props.filterShipping);
        this.props.changeSearchTerm(this.props.searchTerm);

        window.scrollTo(0,0)


    }

    componentDidUpdate(){
        
        

        this.props.changeCurrentCategory(this.props.currentCategory);
        this.props.changeFilterPrice(this.props.filterPrice);
        this.props.changeFilterShipping(this.props.filterShipping);
        this.props.changeSearchTerm(this.props.searchTerm);

        window.scrollTo(0,0)
    }
    

    

    render (){

    const props=this.props;


    const initialProductsList = props.businesses;
    const productsList=props.productsList;
    console.log(productsList)
  
   

    const afterFilterPriceList = () =>{
       
        if (props.filterPrice=="All") {
            
            return productsList;
        }

        if (props.filterPrice=="under NZD10"){
            return productsList.filter((element)=>10>element.variants[0].price)
        }
        
        if (props.filterPrice=="NZD10 - NZD20"){
            return productsList.filter((element)=>20>=element.variants[0].price&&element.variants[0].price>=10)
        }

        if (props.filterPrice=="over NZD20"){
            return productsList.filter((element)=>element.variants[0].price>20)
        }
    }
    const afterFilterShippingList = () =>{

        console.log(afterFilterPriceList())

        if (props.filterShipping=="All") {            
            return afterFilterPriceList();
            console.log(afterFilterPriceList())
            
        }
        if (props.filterShipping==1){
           
           
            return afterFilterPriceList().filter(element=>element.shipping==1)

        }
        if (props.filterShipping==2){
          
          
            return afterFilterPriceList().filter(element=>element.shipping==2)
            
        }
        if (props.filterShipping==3){
            
          
            return afterFilterPriceList().filter(element=>element.shipping==3)
            
        }
    }

    const afterSearchList = () => {
        console.log(afterFilterShippingList())
        
        const checkAgainstArray = (element) =>{
            
            return [...element.title.split(" "), 
            
            element.category].map(str=>str.toLowerCase())
        }

        const searchTermArray = props.searchTerm.toLowerCase().split(" ")

        if (props.searchTerm == '') {
            
            return afterFilterShippingList();
            
        }

        return afterFilterShippingList().filter((element)=>searchTermArray
        .every((searchWord)=>checkAgainstArray(element).indexOf(searchWord)>-1))
    }


    const afterCategoryList = () =>{
        if (props.currentCategory=="All"){
            return afterSearchList();
        }

     
        return afterSearchList().filter((element)=>element.category==props.currentCategory)
       

    }

    const afterSortList = () =>{
        
        if (props.sortValue==1){
            return afterCategoryList()
        }
      
        if (props.sortValue==3){
             return afterCategoryList().map(a=>a).sort((a,b) =>b.variants[0].price-a.variants[0].price)
        }

        
        if (props.sortValue==4){
             return afterCategoryList().map(a=>a).sort((a,b) =>a.variants[0].price-b.variants[0].price)
        }
    }

    
if (!props.productsList[0]) {
    return <Loading />
}

if (!afterSortList()[0]) {
    return <div>We cant find the result you need, pleaes try again!</div>
}

    
if (!props.productsList[0]) {
    return <Loading />
}


 return (

        <div className="selectproductslist">
       
      
      {afterSortList().map((product)=>
<SingleProductUnderList product={product} key={product.id}/>)}

        </div>
    )

}


   
} 