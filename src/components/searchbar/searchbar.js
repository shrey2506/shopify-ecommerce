import React from 'react';
import './searchbar.css';
import { TabsExampleSimple } from './materialuitrial';
import { FormControl } from 'react-bootstrap';




const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {



  handleClassTypeChange(val){
    if (val===this.props.sortBy) {

      return 'active';
    } else {
      return '';
    }
  }

  handleTermChange(event){
    
    const newValue=event.target.value;
    console.log(newValue.split(" "));
    this.props.onTermChange(newValue)
  }

  handleLocationChange(event){
    const newValue=event.target.value;
    this.props.onLocationChange(newValue);
  }
  
  handleSumbit(event){
    let term=this.props.term;
    let location=this.props.location;
    let sortBy=this.props.sortBy;
   
  
    this.props.onSubmitClick(term,location,sortBy,6,0);
    event.preventDefault()
  }

  handleSortByClick(newValue) {
    
    this.props.handleSortByClick(newValue);

  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(element=>
   <li key={sortByOptions[element]} 
   className={this.handleClassTypeChange(sortByOptions[element])} 
   onClick={()=>this.props.onSortByClick(sortByOptions[element])}>{element}</li>)
  }

  

  render() {

   

    return (



      <div class="SearchBar">
        <div class="SearchBar-sort-options">
        <ul>
          
         {this.renderSortByOptions()}
         
        </ul>
        
        </div>

        <div class="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange.bind(this)}/>
          <input placeholder="Where?" onChange={this.handleLocationChange.bind(this)}/>
        </div>

        <div class="SearchBar-submit">
          <a onKeyPress={this.handleSumbit} onClick={this.handleSumbit.bind(this)}>Lets Go</a>
        </div>

       
        <div style={{color:"white"}}>{this.props.term}hi</div>

        
 



      </div>


       )
  }
}

export default SearchBar
