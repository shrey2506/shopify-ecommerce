import { Yelp } from '../util/Yelp';


export const apiCall = (term, location, sortBy, limit, offset) => {

    return (dispatch) => {

        Yelp.search(term, location, sortBy, limit, offset)
            .then((businessInfo) => {
                dispatch({
                    type:"CHANGE_ISLOADING",
                })
                dispatch({
                    type: 'NEW_BUSINESSES',
                    text: businessInfo.businesses
                });
                dispatch({
                    type: 'NEW_TOTALNUMBER',
                    text: businessInfo.totalNumber
                });
            })





    }


}



