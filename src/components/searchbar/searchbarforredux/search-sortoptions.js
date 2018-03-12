import React from 'react';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  }

const handleClassTypeChange=(val)=>{
    if (val===this.props.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

const renderSortByOptions=()=>{
    return Object.keys(sortByOptions).map(element=>
   <li key={sortByOptions[element]} 
   className={handleClassTypeChange(sortByOptions[element])} 
   onClick={this.handleSortByClick.bind(this,sortByOptions[element])}>{element}</li>)
  }

const SortByOptions=()=>{
    return (
        <ul>
         {redernSortByOptions}
        </ul>
    )
}