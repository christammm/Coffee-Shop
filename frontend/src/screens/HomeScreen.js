import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
//import products from '../products';
import Product from '../components/Product';
import axios from 'axios';
import {listProducts} from '../actions/productActions'
//Products as component level state

//Carts, Product, are global redux state

const HomeScreen = () => {
    //Deprecated because now we're using redux.
    //const [products, setProducts] = useState([])
    
    //Assign dispatch to useDispatch
    const dispatch = useDispatch();
    //Pull the name of the state from your store. use the same name as what was listed in combineReducer. productList: productListReducers
    const productList = useSelector(state =>state.productList); // use selector takes one param: state. Within state, pull the productList.
    const {loading, error, products} = productList;//Perform a destructured call to capture the loading, error, and products state.
    //REMEMBER: THERE WERE THREE POSSIBLE SCENARIOS IN OUR REDUCER THAT EITHER SAID THE PRODUCT LIST WAS requested, success, or error.
    // we destructure call three because these three properties could give us the answer to whether or it was requested, a success or error.
    //Loading is good for a spinner
    //Error could be used to display an error

    //On first render pull all products
    useEffect(()=>{

        //Use dispatch to invoke actions to fetch products
        dispatch(listProducts())
    },[dispatch])
    
    //loop through each product within products as a separate product component
    return (
        <>
            <h2>Latest Offerings</h2>
            {/**Do a condition call to see if we're loading, if so, show a loading spinner, if error, show error, else show the products */}
            {loading ? <h2>Loading....</h2> : error ? <h3>{error}</h3> : <Row>
                {products.map(product=>{
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                })}
            </Row>}
            
        </>
    )
}

export default HomeScreen
