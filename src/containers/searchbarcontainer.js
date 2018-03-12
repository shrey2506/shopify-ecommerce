import SearchBar from '../components/searchbar/searchbar'
import { connect } from 'react-redux';

import { apiCall } from '../action/apicall';


const mapStateToProps = (state) => {
    return {
        sortBy:state.sortBy,
        term:state.term,
        location:state.location,
        error:state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortByClick: (text)=>dispatch({
            type:"NEW_OPTIONS",
            text
        }),
        onTermChange: (text)=>dispatch({
            type:"NEW_TERM",
            text
        }),
        onLocationChange: (text)=>dispatch({
            type:"NEW_LOCATION",
            text
        }),   
        onSubmitClick: (term,location,sortBy,limit,offset)=>
        dispatch(apiCall(term,location,sortBy,limit,offset))
    }
}


export const SearchBarContainer = connect (mapStateToProps,mapDispatchToProps)(SearchBar)