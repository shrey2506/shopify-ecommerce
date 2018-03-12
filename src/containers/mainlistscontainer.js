import {connect} from 'react-redux';
import { MainLists } from '../components/homepage/mainlists/mainlists';

const mapStateToProps = (state) =>{
    return {
        businesses: state.businesses,
        productsList: state.productsList,
        collectionList: state.collectionList,
        events:state.events
    }
}

export const MainListsContainer = connect (mapStateToProps,null)(MainLists)