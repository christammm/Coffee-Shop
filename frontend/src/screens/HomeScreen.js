import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
//import products from '../products';
import Product from '../components/Product';
import axios from 'axios';
//Products as component level state

//Carts, Product, are global redux state

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    //On first render pull all products
    useEffect(()=>{
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data)
        };

        fetchProducts();
    },[])
    
    
    //loop through each product within products as a separate product component
    return (
        <>
            <h2>Latest Offerings</h2>
            <Row>
                {products.map(product=>{
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default HomeScreen
