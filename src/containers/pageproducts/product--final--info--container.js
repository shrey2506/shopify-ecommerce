import { connect } from 'react-redux';
import { ProductFinalInfo } from '../../components/business/popularproducts/product--final--info'


const mapStateToProps=(state)=>({
    businesses: state.businesses,
})


export const ProductFinalInfoContainer = connect(mapStateToProps,null)(ProductFinalInfo)