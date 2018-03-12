import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';


export class Pagination extends Component {

    calculatePageNumber () {
        return  this.props.totalNumber/6>100? 100:this.props.totalNumber
      }

    handlePageClick(data) {
        let offset=6*data.selected;
        let term=this.props.term;
        let location=this.props.location;
        let sortBy=this.props.sortBy;     

        this.props.onPageClick(term, location, sortBy, 6, offset);

    }



    render(){

        return (
            <ReactPaginate previousLabel={"Previous"}
                       nextLabel={"Next"}
                       breakLabel={<a href="">....</a>}
                       breakClassName={"break-me"}
                       nextClassName={"nextnext"}
                       pageCount={this.calculatePageNumber()}
                       
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick.bind(this)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}                       
                       activeClassName={"active"}
                       initialPage={1}
                       forcePage={1} />   
        )
    }
}



     

