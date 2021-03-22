import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
        </Container>
    );
};

export default Destination;