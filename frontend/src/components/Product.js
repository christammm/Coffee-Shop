import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Rating from '../components/Rating'

const Product = ({product}) => {
    return (
        <Card className="p-3 my-3 rounded product-card">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>{product.name}</Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating 
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color="brown"
                    />
                </Card.Text>
                <Card.Text as='h3' style={{padding: '1rem 0',}}>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
