//Import constants from the constants file, THIS IS JUST FOR ORGANIZATION PURPOSES, WE HAVE ALL PRODUCT CONSTANTS SET IN THE PRODUCT CONSTANTS FILE.
//THEY ALL EASILY REFER TO THE CONSTANTS FILE.
import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL} from '../constants/productConstants'


//Reducers take two things, the initial state( empty object), and an action
export const productListReducer = (state = {products: []}, action )=>{
    //when we create an action reducer, we're gonna distpach and action to the product reducer. 
    //action will have a type, depending on the type we'll commit a certain action
    //actions can also contain payload that we have fetched from the server
    switch(action.type){//Three different types: 
        //Product List request, when we make the fetch request to the db
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] } //when we make a request we want the component to know its true, products array is empty because nothing has been fetched yet.
        //Product List sucess response
        case PRODUCT_LIST_SUCCESS://set loading to false because its done loading
            return { loading: false, products: action.payload}
        //Product List fail.
        case PRODUCT_LIST_FAIL: //If we get a 404 error
            return {loading: false, error: action.payload}//set loading to false
        default:
            return state
    }

}

//Reducer example for product detail
export const productDetailsReducer = (state={product:{reviews: []}}, action) =>{//remember reviews array exists in mongoose Product Object.
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state} // use spread operator to keep state as is.
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}