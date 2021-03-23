import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Destination.css';
import GoogleMapReact from 'google-map-react';
import map from '../../images/Map.png';

const Destination = () => {

    return (
        <Container>
            <Row>
                <hr />
                <Col style={{ height: '280px' }} id="searchLocation" lg={3}>
                    <form action="">
                        <p>Pick From</p>
                        <input type="text" />
                        <br />
                        <p>Pick To</p>
                        <input type="text" />
                        <br />
                        <Button id="searchbtn">Search</Button>
                    </form>
                </Col>
                <Col id="map" lg={8}>
                    <img src={map} alt=""/>
                    {/* <GoogleMapReact
                        bootstrapURLKeys={{ key:  }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {/* <AnyReactComponent 
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        /> */}
                    {/* </GoogleMapReact> */} 
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;
