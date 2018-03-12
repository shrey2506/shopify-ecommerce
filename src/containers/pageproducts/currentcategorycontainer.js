import { connect } from 'react-redux';
import { CurrentCategory } from '../../components/page-products/currentcategory/currentcategory';


const mapStateToProps=(state)=>({
    currentcategory: state.currentCategory,
})


export const CurrentCategoryContainer = connect(mapStateToProps,null)(CurrentCategory)