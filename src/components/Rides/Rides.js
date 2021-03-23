import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Rides = (props) => {
    const { id, name, image } = props.ride;

    let cardStyle =
    {
        width: '12rem',
    }

    const history = useHistory();
    const showDestination = id => {
        const url = `destination/${id}`;
        history.push(url);
    }


    return (
        <a onClick={() => showDestination(id)} style={{ color: 'black', textDecoration: 'none' }}  alt="Rides">
            <Card className="cardContainer" style={cardStyle}>
                <Card.Img style={{
                    margin: '30px',
                    height: '100px',
                    width: '100px'
                }} variant="top" src={image} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </a>

    );
};

export default Rides;