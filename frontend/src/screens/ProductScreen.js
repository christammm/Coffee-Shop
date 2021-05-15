import React from 'react'
//Theres no specfic order you need to import the components in.
//First Import the Link from React-router-dom
import {Link} from 'react-router-dom'
//Then import bootstrap components 
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
//We're also throwing in our rating system
import Rating from '../components/Rating'
//Lets also import the product listing from our products.js file
import products from '../products'
import Product from '../components/Product'

//Do a destructured match call to pull the property from our Link tag stored in App.js
const ProductScreen = ({ match }) => {
    //While we dont have any product feed from our express app yet,
    //Find the matching product within 'products' and store it const product.
    const product = products.find((eachProduct)=> eachProduct._id === match.params.id); // We are able to do match.params.id because this was stated in our path params from our Link tag from App.js.. Remember path="/product/:id"? this is where we got this.
    //The final stored product will be placed in our product variable.
    //If we did /product/:test/ instead, we would do 'match.params.test'.

    console.log(Product)


    return (
        <>{/** Remember, this is a fragment call */}
            <Link to="/" className="btn btn-dark my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    {/**product display, adding fluid to image will keep image within container. */}
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    {/**flush takes away the border from the ListGroup Item */}
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        {/**flush takes away the border from the ListGroup Item */}
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <b>{product.price}</b>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>
                                    <Col>
                                        {/** Turnary operator to check if product is in stock. if so return OOS or instock */}
                                        <b>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</b>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    {/**btn-block stretches the button across the container. Disable if OOS */}
                                        <Button className='btn-block' type="button" style={{width: '100%'}} disabled={product.countInStock === 0}>
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
