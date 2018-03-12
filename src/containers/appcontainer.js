import { connect } from 'react-redux';
import { apiCall } from '../action/apicall';
import App from '../App';
import { withRouter } from 'react-router-dom';
import { fetchProducts } from '../action/fetchproducts'


const mapStateToProps =(state)=> {
    return {


        
        term: state.term,
        location: state.location,
        sortBy: state.sortBy,
        businesses: state.businesses,
        isLoading:state.isLoading,
        productsList:state.productsList,
        checkOutProducts:state.checkOutProducts,
        checkOutWebUrl:state.checkOutWebUrl,
        checkOutId:state.checkOutId,
        openCheckOut:state.openCheckOut,
        events:state.events,
        currentCategory:state.currentCategory


    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        didMount:( term, location, sortBy, limit, offset ) => dispatch(apiCall(term, location, sortBy, limit, offset)),
        fetchProducts:()=>dispatch(fetchProducts()),
        fetchCheckOutProducts:(text)=>dispatch({
            type:"RESTORE_CART",
            text

        })
           
    }
}




export const AppContainer = withRouter(connect (mapStateToProps,mapDispatchToProps)(App)) 