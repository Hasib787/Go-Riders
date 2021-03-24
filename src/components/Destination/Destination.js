import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Map from '../Map/Map'
import './Destination.css';


const Destination = () => {
    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');


    return (
        <Container>
            <Row>
                <hr />
                <Col style={{ height: '280px' }} id="searchLocation" lg={3}>
                    <form action="">
                        <p>Pick From</p>
                        <input onBlur={e => setPickFrom(e.target.value)} type="text" placeholder="Pick From" />
                        <br />

                        <p>Pick To</p>
                        <input onBlur={e => setPickTo(e.target.value)} type="text" placeholder="Pick To" />
                        <br />
                        <Button id="searchbtn">Search</Button>
                    </form>
                </Col >
                <br/>
                <Col style={{ height: '360px' }} id="searchLocation" lg={3}>
                    <div id="location">
                        <p id="pickFrom">{pickFrom}</p>
                        <p>{pickTo}</p>
                    </div>
                    <div className="rideDetails">
                        <img src="" alt=""/>
                    </div>
                    <div className="rideDetails">
                     <img src="" alt=""/>
                    </div>
                    <div className="rideDetails">
                        <img src="" alt=""/>
                    </div>
                </Col>
                <Col id="map" lg={8}>
                    <Map></Map>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;
