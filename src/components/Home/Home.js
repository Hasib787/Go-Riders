import React, { useEffect, useState } from 'react';
import BgImage from '../../images/Bg.png';
import ridesData from '../../FakeData/FakeData.json';
import './Home.css'
import Rides from '../Rides/Rides';

const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        setRides(ridesData);
    }, [])
    return (
        // style={{ backgroundImage: `url(${BgImage})` }} className="bg-image"
        <div >
            <div style={{margin: '50px 250px 0px 250px', display:'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem'}}> 
                {
                    rides.map(ride => <Rides ride={ride}></Rides>)
                }</div>
        </div>
    );
};

export default Home;