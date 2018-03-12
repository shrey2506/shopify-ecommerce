import {connect} from 'react-redux';
import { BusinessList } from '../components/businesslist/businesslist';

const mapStateToProps = (state) =>{
    return {
        businesses: state.businesses,
        productsList: state.productsList,
        collectionList: state.collectionList,
        events:state.events
    }
}

export const BusinessListContainer = connect (mapStateToProps,null)(BusinessList)