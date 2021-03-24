import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Map from '../Map/Map'
import './Destination.css';
import rideData from '../../FakeData/FakeData.json';



const Destination = () => {
    const {id} = useParams();
    console.log(id);
    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');
    const [searchClicked, setSearchClicked] = useState();
    const [rideDetail, setRideDetail] = useState([])
    
    

    const handleSearchBtn = () => {
        setSearchClicked(true)
    }

    return (
        <Container>
            <Row>
                <hr />

                <br />

                {
                    searchClicked ? <Col style={{ height: '360px' }} id="searchLocation" lg={3}>
                        <div id="location">
                            <p id="pickFrom">{pickFrom}</p>
                            <p>{pickTo}</p>
                        </div>
                        <div className="rideDetails">
                            <div className="rideInfo">
                                <img src={rideDetail.image} alt="" />
                                <p>name</p>
                                <p>sit</p>
                                <p className="ridePrice">$</p>
                            </div>
                        </div>
                        <div className="rideDetails">
                            <div className="rideInfo">
                                <img src={rideDetail.image} alt="" />
                                <p>name</p>
                                <p>sit</p>
                                <p className="ridePrice">$</p>
                            </div>
                        </div>
                        <div className="rideDetails">
                            <div className="rideInfo">
                                <img src={rideDetail.image} alt="" />
                                <p>name</p>
                                <p>sit</p>
                                <p className="ridePrice">$</p>
                            </div>
                        </div>
                    </Col> : <Col style={{ height: '280px' }} id="searchLocation" lg={3}>
                        <form action="">
                            <p>Pick From</p>
                            <input onBlur={e => setPickFrom(e.target.value)} type="text" placeholder="Pick From" />
                            <br />

                            <p>Pick To</p>
                            <input onBlur={e => setPickTo(e.target.value)} type="text" placeholder="Pick To" />
                            <br />
                            <Button onClick={()=>handleSearchBtn()} id="searchbtn">Search</Button>
                        </form>
                    </Col >

                }
                <Col id="map" lg={8}>
                    <Map></Map>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;
