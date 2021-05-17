import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';//Import this to make redux dev tools work
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
//There will be a bunch of reducers we're going to use
/**
 * If we're fetching from backend
 * we'll have a reducer for productlist
 * 
 * Middleware for thunk
 */

//We dont have any reducers yet so we'll leave the input empty
//breaking into separate details helps with reducers.
const reducer = combineReducers({
    //one you created the reducer store it in here.
    productList: productListReducer,// this is important because this will represent the productList state
    productDetails: productDetailsReducer,
})

const initialState = {}

const middleware=[thunk]

//Create store will take a reducer, initialState, and additional middleware
const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store;