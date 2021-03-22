import React from 'react';
import { Card } from 'react-bootstrap';


const Rides = (props) => {
    const { name, image } = props.ride;

    return (
        <a style={{ color: 'black', textDecoration:'none'}} href="#" alt="Rides">
            <Card className="cardContainer" style={{ width: '12rem' }}>
            <Card.Img style={{
                margin: '30px',
                height: '100px',    
                width: '100px'
            }} variant="top" src={image} />
            <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
        </a>

    );
};

export default Rides;