import React from 'react'
import {Container , Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Left menu
                    </Col>
                    <Col className="text-center py-3">
                        Copyright &copy; Coffee Shop 2021
                    </Col>
                    <Col className="text-center py-3">
                        Right Col
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
