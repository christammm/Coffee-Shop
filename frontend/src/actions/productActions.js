//Again, import the constants because we use these pervasively on the redux for this product component.
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'
//import axios because we want to make the axios call to the api
import axios from 'axios';

//Heres where the REAL Action happen
//This action will fetch products from api, and then map them.
//Instead of useEffect, we will dispatch the action back to the reducer
export const listProducts = () => async (dispatch) =>{
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST });// IN THE PRODUCERREDUCER, We want to tell reducer that the data is loading.
        const {data} = await axios.get('/api/products');
        //now that we have the data
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });//Tells reducer that its succesful, and the data is passed via the payload.
    } catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? //Payload will be sent if error.response and error.response.data.message is persistent.
             error.response.data.message //Show the message
             : error.message,//else show the default error message
            //This payload will be extremely common in our error message.
        })
    }
}


export const listProductDetails = (id) => async (dispatch) =>{ // we use nested arrow functions to take advantage of async redux calls with redux-thunk.
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST});// First tell reducer that we are loading the data.
        const {data} = await axios.get(`/api/products/${id}`);//Pass id.
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
};

