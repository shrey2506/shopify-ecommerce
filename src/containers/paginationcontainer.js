import {connect} from 'react-redux';
import { Pagination } from '../components/pagination/Pagnition';
import { apiCall } from '../action/apicall'

const mapStateToProps = (state) =>{
    return {
        term:state.term,
        location:state.location,
        sortBy:state.sortBy,    
        totalNumber:state.totalNumber
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       
        onPageClick: (term, location, sortBy, limit, offset)=>dispatch(apiCall(term, location, sortBy, limit, offset))
           
        
    }
}

export const PaginationContainer = connect(mapStateToProps,mapDispatchToProps)(Pagination)



                    